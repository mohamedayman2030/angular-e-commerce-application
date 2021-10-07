import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/main.service';
import { Product } from '../models/product';
import {ActivatedRoute} from '@angular/router';
import { cart } from '../models/cart';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private mainproduct:ProductsService,private route: ActivatedRoute) { }
  theID:number=0;
  theproducts:Product[]=[];
  theamount:number[]=[1,2,3,4,5,6,7,8,9,10]
  thecart:cart[]=[]
  Amount:number=0
  c:cart={
    name:'',
    price:0,
    url:'',
    amount:0,
  }
  ngOnInit(): void {
    
    this.mainproduct.getProducts().subscribe(
      response=>{
      for(let i=0;i<response.length;i++){
        this.theproducts.push(response[i])
      }
      }
    )
    this.theID=this.route.snapshot.params.id
  }

  ChooseAmount(a:any){

    this.Amount=a;

  }

  AddtoCart(id:number,theurl:string,thename:string,theprice:number){
    this.c={
      name:thename,
      price:theprice,
      url:theurl,
      amount:this.Amount
    }
    this.thecart=this.mainproduct.AddtoCart(this.c)
    window.alert("Added to the cart!")
    
    console.log(this.thecart)
    this.Amount=1;
  }

}
