import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductListingService } from '../product-listing.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css'],
})
export class ProductsPageComponent implements OnInit {
  products: Product[] = [];
  error = false;
  constructor(private productListing: ProductListingService) {}

  ngOnInit() {
    this.productListing.getProducts().subscribe((response) => {
      this.products = response.products;
    });
  }
}
