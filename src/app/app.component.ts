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
  

  constructor(){}

    ngOnInit() {
     
    }

    
}
