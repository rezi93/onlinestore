import { Injectable } from '@angular/core';
import { IProduct } from '../interface/product';
import { HttpClient } from '@angular/common/http';
import { Observable,map,tap, concatMap } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class PruductService {
  IProduct:any;

  constructor(private _http: HttpClient, private _route:Router) { }

  getProductList():Observable<IProduct[]>{
    return this._http.get<IProduct[]>('https://fakestoreapi.com/products').pipe(
      map(result=>result)
    )
      
    
      }

      
}
