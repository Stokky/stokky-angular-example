import { Component } from '@angular/core';

// app assets
import { products } from '../products';

// app types
import { ProductInterface } from '../types';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products: ProductInterface[] = products;

  constructor() {};

};
