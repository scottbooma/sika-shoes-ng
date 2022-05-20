import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductListingService {
  getProduct(id: number, products: Product[]) {
    return products.find((product) => product.id == id);
  }
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get('../assets/products.json');
  }
}
