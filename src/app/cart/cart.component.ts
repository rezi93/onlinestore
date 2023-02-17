import { Component, NgModule, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from '../interface/product';
import { IProduct } from '../interface/product';
import { PruductService } from '../service/pruduct.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems: IProduct[] = []
  cartCount: any;
  constructor(private Service: PruductService) {

  }

  ngOnInit(): void {
    this.cartItems=this.Service.getItems();
    this.cartCount = this.cartItems.length;
    console.log(this.cartItems)
  }

}
