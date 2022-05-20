import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductListingService {
  productList = [
    {
      id: 1,
      name: 'Airwalks',
      imageUrl: '../../assets/shoe-2.jpg',
      description: "Time-travel to 1997 and let's go Skateboarding!",
    },
    {
      id: 2,
      name: 'Xelero',
      imageUrl: '../../assets/shoe-1.jpg',
      description:
        "You can make fun of these shoes all you want, but I can't even hear you from up here on these clouds I'm walking on.",
    },
    {
      id: 3,
      name: "Rothy's",
      imageUrl: '../../assets/shoe-3.jpg',
      description: 'Did you know you can put these in the washing machine?',
    },
  ];

  getProduct(id: number) {
    return this.productList.find((product) => product.id == id);
  }
  constructor() {}
}
