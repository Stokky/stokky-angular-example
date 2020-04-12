import { Component, OnInit } from '@angular/core';

// app services
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-prices',
  templateUrl: './cart-prices.component.html',
  styleUrls: ['./cart-prices.component.css']
})
export class CartPricesComponent implements OnInit {

  constructor(
    public cartService: CartService
  ) {};

  ngOnInit(): void {};

};
