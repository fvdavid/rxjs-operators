import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable, catchError } from 'rxjs';
import { Product } from '../model/product';

@Injectable()
export class ProductService {

  private http = inject(HttpClient);

  constructor() { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('https://dummyjson.com/products')
      .pipe(
        catchError(() => EMPTY)
      );
  }

  loadUsersByPrefix(value: string): Observable<Product[]> {
    return this.http.get<Product[]>(`https://dummyjson.com/products/search?q=${{ value }}`)
      .pipe(
        catchError(() => EMPTY)
      );
  }

  getProductsLimited(limit: number = 10): Observable<Product[]> {
    return this.http.get<Product[]>(`https://dummyjson.com/products?limit=${limit}&skip=10&select=title,price`)
      .pipe(
        catchError(() => EMPTY)
      );
  }
}
