import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../product/product';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';import { Category } from '../category/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  path = "http://localhost:3000/categories";


  getCategories(): Observable<Category[]> {
    let newPath = this.path;

    //subscribe ile istediğimiz linkteki dataya ulaşmak istiyoruz.
    //HATA YÖNETİMİ ve FİLTRELEME
    return this.http.get<Category[]>(newPath).pipe(
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
}
