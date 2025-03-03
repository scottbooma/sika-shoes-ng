import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';

type ProductResponse = {
  products: [];
};
@Injectable({
  providedIn: 'root',
})
export class ProductListingService {
  getProduct(id: number, products: Product[]) {
    return products.find((product) => product.id == id);
  }
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<ProductResponse>('../assets/products.json');
  }
}
