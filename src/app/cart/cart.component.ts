import { Component,NgModule,OnInit } from '@angular/core';
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

  items:any;
  cartItems:IProduct[]=[]
  cartCount: any;

  constructor(private Service: PruductService){

  }

  ngOnInit(): void {
    this.items=this.Service.getItems();
    this.getCArtItems(this.cartItems)

    this.cartCount = this.Service.getcartCounter();
  }

  getCArtItems(productID:any){
    this.Service.cartItem(productID).subscribe(items=>{this.cartItems=items})
  }



  // counter

  getCounter(){
    this.Service.getcartCounter().subscribe(count => {
      console.log(`Cart count: ${count}`);
    });
  }

}
