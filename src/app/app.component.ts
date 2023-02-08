import { Component, OnInit,NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct,  } from './interface/product';
import { ICategory } from './interface/product';
import { PruductService } from './service/pruduct.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  product:IProduct[]=[];

  constructor(private _service: PruductService,
    private _route: Router){}

    ngOnInit() {
      this. _service.getProductList().subscribe((result:IProduct[])=>{
        this.product=result
      })
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

    detailsPage(productID:number){
   this._route.navigate(['/products/',productID])
   
   
    }
}
