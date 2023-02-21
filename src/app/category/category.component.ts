import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from '../interface/product';
import { IProduct,IMenuItem } from '../interface/product';
import { PruductService } from '../service/pruduct.service';
import {InputTextModule} from 'primeng/inputtext';
import {MenuItem} from 'primeng/api';
import {TabViewModule} from 'primeng/tabview';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
 
  cat:any=[]
  catproduct:IProduct[]=[]
 

  activeIndex1: number = 0;

    activeIndex2: number = 0;

    scrollableTabs: any[] = Array.from({ length: 50 }, (_, i) => ({ title: `Tab ${i + 1}`, content: `Tab ${i + 1} Content` }));

  constructor(private _service: PruductService,
    private _route: Router){
      this.scrollableTabs=[
        {label: 'smartphones', icon: 'smartphones'},
        {label: 'laptops', icon: 'laptops'},
        {label: 'fragrances', icon: 'fragrances'},
        {label: 'kincare', icon: 'kincare'},
        {label: 'groceries', icon: 'groceries'},
        {label: 'home-decoration', icon: 'home-decoration'},
        {label: 'furniture', icon: 'furniture'},
        {label: 'tops', icon: 'tops'},
        {label: 'womens-dresses', icon: 'womens-dresses'},
        {label: 'womens-shoes', icon: 'womens-shoes'},
        {label: 'menshirts', icon: 'menshirts'},
        {label: 'mens-shoes', icon: 'mens-shoes'},
        {label: 'mens-watches', icon: 'mens-watches'},
        {label: 'womens-bags', icon: 'womens-bags'},
        {label: 'womens-jewellery', icon: 'womens-jewellery'},
        {label: 'sunglasses', icon: 'sunglasses'},
        {label: 'automotive', icon: 'automotive'},
        {label: 'motorcycle', icon: 'motorcycle'},
        {label: 'lighting', icon: 'lighting'},
        {label: 'menshirts', icon: 'menshirts'},
        {label: 'menshirts', icon: 'menshirts'},
    
    
    
      ]
     
      }

      ngOnInit(): void {

       
        
      }


      activeItemChange(){
        
        return this._service.getProductByCat(this.cat.label).subscribe(res=>{this.catproduct=res});
        
        
        
  
      }

}
