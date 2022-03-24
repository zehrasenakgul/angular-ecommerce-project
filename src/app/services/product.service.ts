import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from '../product/product';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }
  path = "http://localhost:3000/products";

  //filtreleme için dinamik yapı sağlamış oluyoruz
  getProducts(categoryId: any): Observable<Product[]> {
    let newPath = this.path;
    if (categoryId) {
      newPath += "?categoryId=" + categoryId;
    }
    //subscribe ile istediğimiz linkteki dataya ulaşmak istiyoruz.
    //HATA YÖNETİMİ ve FİLTRELEME
    return this.http.get<Product[]>(newPath).pipe(
      //console.log üzerinde ürünlerimizi json formatında listeliyoruz.
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = "Bir hata oluştu " + err.error.message
    } else {
      errorMessage = "Sistemsel bir hata oluştu"
    }
    return throwError(errorMessage);
  }

  addProduct(product:Product): Observable<Product>
  {
    const httpOption =
    {
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization' : 'Token'
      })
    }
    return this.http.post<Product>(this.path,product,httpOption).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );

  }
}
