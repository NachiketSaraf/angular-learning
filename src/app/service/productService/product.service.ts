import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl  ="https://dummyjson.com";

  constructor(private httpClient: HttpClient) { 

  }

  getProducts(): Observable<{ products : Product[] }> {
    const url = `${this.baseUrl}/products`;
    
    return this.httpClient.get<{products : Product[]}>(url);
  }

}

// https://dummyjson.com/products
