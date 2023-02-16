import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from '../interface/product';
import { IProduct } from '../interface/product';
import { PruductService } from '../service/pruduct.service';
import {InputTextModule} from 'primeng/inputtext';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  product:IProduct[]=[];
  category: ICategory[]=[]
  

  constructor(private _service: PruductService,
    private _route: Router){}

    ngOnInit() {
      this.getproduct();

     
   
      
    }

    setClas(cat:string): string {
      let clasname:string=''
      cat=cat.toUpperCase();
      switch(cat){
        case ICategory.MEN:
          clasname='men';
          break;
          case ICategory.WOMEN:
          clasname='women';
          break;
          case ICategory.JEWELERY:
          clasname='jewelery';
          break;
          case ICategory.ELECTRONICS:
          clasname='electronics';
          break;
          default: clasname=''
      }
      return clasname
    }

    getproduct(){
      this. _service.getProductList().subscribe((result:IProduct[])=>{
        this.product=result
      })
    }

    detailsPage(productID:number){
   this._route.navigate(['/products/',productID])
   
   
    }

    getResult(){
      this._service.searchProduct(this.category).subscribe(result=>this.product=result)
      
    }


    addToCart(){
      this._service.addToCart();
      alert('product successfully add to cart');
      
      
    }

    
    


  

}


