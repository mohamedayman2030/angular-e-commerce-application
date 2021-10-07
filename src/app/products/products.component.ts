import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/main.service';
import { Product } from '../models/product';
import { cart } from '../models/cart';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})



export class ProductsComponent implements OnInit {
 
  theproduct:Product[]=[]
  c:cart={
    name:'',
    price:0,
    url:'',
    amount:0,
  }
  Amount:number=1
  thecart:cart[]=[]
  constructor(private products:ProductsService) { }

  ngOnInit(): void {
   
    this.products.getProducts().subscribe(
      response=>{
      for(let i=0;i<response.length;i++){
        this.theproduct.push(response[i])
      }
      }
    )

}

AddtoCart(Cart:cart){

  
  this.products.AddtoCart(Cart)
  /*
  window.alert("Added to the cart!")
  
  console.log(this.thecart)
  this.Amount=1;
  */
}

}
