import { Component, OnInit,EventEmitter, Input, Output } from '@angular/core';
import { ProductsService } from '../services/main.service';
import { Product } from '../models/product';
import { cart } from '../models/cart';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() theproducts:Product;
  @Output() addedCart:EventEmitter<cart>=new EventEmitter()
  Amount:number=1
  theamount:number[]=[1,2,3,4,5,6,7,8,9,10]
  thecart:cart[]=[]
  thevalue:number=1

  c:cart={
    name:'',
    price:0,
    url:'',
    amount:0,
  }
  constructor(private products:ProductsService) { 
    this.theproducts={
      id : 0,
      name : '',
      price : 0,
      url : '',
      description : ''
    }
  }

  ngOnInit(): void {

/*
    this.products.getProducts().subscribe(
      response=>{
      for(let i=0;i<response.length;i++){
        this.theproducts.push(response[i])
      }
      }
    )
    */
  }
   
  ChooseAmount(a:any){
   

    this.Amount=a;

  }

  addedtocart(id:number,theurl:string,thename:string,theprice:number){
    this.c={
      name:thename,
      price:theprice,
      url:theurl,
      amount:this.Amount
    }
    /*
    this.thecart=this.products.AddtoCart(this.c)
    window.alert("Added to the cart!")*/

    this.addedCart.emit(this.c)
    window.alert("Added to the cart!")
    
    console.log(this.thecart)
    this.Amount=1;
  }
  ngOnDestroy():void {
  //  this.theproducts =[];
    this.theamount=[]
  }
 
}
