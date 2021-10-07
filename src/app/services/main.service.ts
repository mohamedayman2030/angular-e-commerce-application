import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { cart } from '../models/cart';
import { customer } from '../models/customer';







@Injectable({
  providedIn: 'root'
})





export class ProductsService {

  constructor(private http: HttpClient) { }

  CartList:cart[]=[]
  thecustomer:customer={
    name:'',
    address:'',
    card:'',
    price:0,
  };
  

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("../assets/data.json");
  }

  AddtoCart(product:cart):cart[] {

 //   product.price=product.price*product.amount
   if(product.amount===0){
     product.amount=1
   }

    for(let i=0;i<this.CartList.length;i++){
      if(this.CartList[i].name===product.name){
        this.CartList[i].amount=Number(this.CartList[i].amount)+Number(product.amount)
     //   this.CartList[i].price=Number(this.CartList[i].price)+Number(product.price)
        return this.CartList
      }
    }
  
    this.CartList.push(product)

  
 
return this.CartList;
  }
  GettheCart():cart[] {
   return this.CartList
  }
  GettheUser(cst:customer){
    this.thecustomer=cst;
    console.log(this.thecustomer)
   
  }
  sendUser(){
    return this.thecustomer
  }
}