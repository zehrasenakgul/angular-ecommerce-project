import { Injectable } from '@angular/core';
declare let alertify:any;
//Servise global anlamda default olarak eklenir.
//Tüm projede kullanabileceğimiz kodlardır.
//Kod tekrarını önlemek ve clean code düzeni için kullanılır.
//ProvidedIn yeni sürümle gelen bir özellik
//Aslında service kullanımını global yapmak için app.module.ts
//dosyasındaki providers seçeneğini servis adımızla güncellememiz gerekiyor.
@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  success(message:string)
  {
    alertify.success(message)
  }
 
  error(message:string)
  {
    alertify.error(message)
  } 
  
  warning(message:string)
  {
    alertify.warning(message)
  }

}
