import { Injectable } from '@angular/core';
import { ICategory, IProduct, IBaseResponsive } from '../interface/product';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap, concatMap, Subject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class PruductService {
  IProduct: any;
  productID!: any
  items: IProduct[] = []
  product: IProduct[] = [];
  productData: any
  item: any;

  constructor(private _http: HttpClient, private _route: ActivatedRoute) { }
  getProductList(): Observable<IProduct[]> {
    return this._http.get<IBaseResponsive>('https://dummyjson.com/products').pipe(
      tap(result => result),
      map(data => data.products)
    )
  }


  getProduct(id: any): Observable<IProduct[]> {

    return this._http.get<IProduct[]>('https://dummyjson.com/products/' + id + '/ ')
  }

  searchProduct(category: any): Observable<IProduct[]> {
    return this._http.get<IBaseResponsive>('https://dummyjson.com/products/search', {
      params: { q: category }
    }).pipe(map(data => data.products))
  }

  // add-cart function

  // cartItem(id: any): Observable<IProduct[]> {

  //   return this._http.get<IProduct[]>('https://dummyjson.com/products/' + id + '/ ')
  // }
  addToCart(product: IProduct) {
    this.items.push(product)
    console.log(this.items)
  }

  getItems() {
    return this.items
  }

  // cart counter

  // cartcount = new Subject<number>();

  getcartCounter() {
    return this.items.length;
  }


  getProductByCat(category:any): Observable<IProduct[]> {

    return this._http.get<IProduct[]>('https://dummyjson.com/products/categories/'+category+'/ ').pipe(map(data => data))
  }

}
