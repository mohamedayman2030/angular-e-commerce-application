import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/main.service';
import { cart } from '../models/cart';
import { customer } from '../models/customer';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  theCustomer:customer={
    name:'',
    address:'',
    card:'',
    price:1
  }
  constructor(private product:ProductsService) { }

  ngOnInit(): void {
  this.theCustomer=this.product.sendUser()
  }

}
