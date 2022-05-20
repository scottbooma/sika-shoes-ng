import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductListingService } from '../product-listing.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent {
  product?: Product;
  error = false;

  constructor(
    private productListing: ProductListingService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.productListing.getProducts().subscribe((productResponse) => {
      this.product = this.productListing.getProduct(
        +this.route.snapshot.params['id'],
        productResponse.products
      );
    });
  }
}
