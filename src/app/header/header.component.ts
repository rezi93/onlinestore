import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from '../interface/product';
import { IProduct,IMenuItem } from '../interface/product';
import { PruductService } from '../service/pruduct.service';
import {InputTextModule} from 'primeng/inputtext';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit  {
  category:IMenuItem[]=[]
  product:IProduct[]=[];
  cartItems: IProduct[] = []
  cartCount: any;


  constructor(private _service: PruductService,
    private _route: Router){
     
    }

    ngOnInit(): void {
     
    this.cartCount = this.cartItems.length;
    console.log(this.cartItems)
      
    }


  getResult(){
    this._service.searchProduct(this.category).subscribe(result=>this.product=result)
    
  }
 
}
