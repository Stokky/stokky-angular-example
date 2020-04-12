import { Component, OnInit } from '@angular/core';

// app services
import { CartService } from '../cart.service';

@Component({
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {

  constructor(
    public cartService: CartService
  ) {};

  ngOnInit(): void {};

  ngOnDestroy(): void {
    // deleting obsolete cart-prices
    this.cartService.deletePrices();
    // deleting obsolete customer-data
    this.cartService.deleteCustomerData();
  };

};
