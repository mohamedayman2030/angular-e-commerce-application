import { Component, OnInit } from '@angular/core';
import { cart } from '../models/cart';
import { Product } from '../models/product';
import { ProductsService } from '../services/main.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  theCarts:cart[]=[]
  theProducts:Product[]=[]
  fullname:string=''
  address:string=""
  card:string=""
  totalprice:number=0;


  constructor(private product:ProductsService) { }

  calculateprice(){
    for(let i=0;i<this.theCarts.length;i++){
      this.totalprice=Number(this.totalprice)+Number(Number(this.theCarts[i].amount)*Number(this.theCarts[i].price))
    }
  }

  ngOnInit(): void {
    this.product.getProducts().subscribe(
      response=>{
      for(let i=0;i<response.length;i++){
        this.theProducts.push(response[i])
      }
      })
      this.theCarts=this.product.GettheCart()
      this.calculateprice()
    }



    increase(cart:cart){
      
      if(cart.amount<10){
        this.totalprice=0 
      cart.amount=Number(cart.amount)+1
      console.log(this.theCarts)
      this.calculateprice()
      }
    }
    decrease(cart:cart){
      
      if(cart.amount>0){
        this.totalprice=0
      cart.amount=Number(cart.amount)-1
      console.log(this.theCarts)
      this.calculateprice()
      if(cart.amount===0){
        for(let i=0;i<this.theCarts.length;i++){
          if(this.theCarts[i].amount===0){
            this.theCarts.splice(i,1)
            window.alert('you removed the product!')
          }
        }
      }
      }
      
    }

    sendCustomer(){
      this.product.GettheUser({
        name:this.fullname,
        address:this.address,
        card:this.card,
        price:this.totalprice
      })
      
    }

}
