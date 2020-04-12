import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  API_URL = 'https://glacial-sierra-08840.herokuapp.com/';


  constructor(private http: HttpClient) { }

  shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
  }

  getGameProducts(category, page) {

    return this.http.get<Product[]>(this.API_URL+`game/${category}/${page}`);
  }

  getCheckersProducts(category, page) {

    return this.http.get<Product[]>(this.API_URL+`checkers/${category}/${page}`);
  }

  getPicknPayProducts(category, page) {

    return this.http.get<Product[]>(this.API_URL+`picknpay/${category}/${page}`);
  }
}
