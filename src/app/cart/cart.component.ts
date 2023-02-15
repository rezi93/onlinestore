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

  constructor(private Service: PruductService){

  }

  ngOnInit(): void {
    this.items=this.Service.getItems();
  }

}
