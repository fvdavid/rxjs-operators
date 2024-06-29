import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable, catchError } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient);

  constructor() { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('https://dummyjson.com/products')
      .pipe(
        catchError(() => EMPTY)
      );
  }
}
