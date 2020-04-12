import { Component, OnInit } from '@angular/core';

// app services
import { CartService } from '../cart.service';

@Component({
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  // DISABLED
  // -- using "items" from "cartService"
  // -- to ensure the list of cart-items is auto-updated
  // -- e.g. when running "clearCart"
  //items;

  // cartService needed in template => NOT private
  constructor(
    public cartService: CartService
  ) {};

  ngOnInit(): void {
    // DISABLED -- see notes above...
    //this.items = this.cartService.getItems();

    this.cartService.updatePrices();
  };

};
