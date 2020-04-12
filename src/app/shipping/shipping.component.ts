import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

// app services
import { CartService } from '../cart.service';
import { MessagesService } from '../messages.service';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  checkoutForm: FormGroup;

  shippingOptions: Observable<Object>;

  shippingOptionSelected: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public cartService: CartService,
    private messagesService: MessagesService
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: '',
      shippingOption: ''
    });
  };

  ngOnInit(): void {
    this.shippingOptions = this.cartService.getShippingOptions();
    this.shippingOptionSelected = this.cartService.customerData.shippingOption;
  };

  onSubmit(customerData): void {
    // validating submitted data if there are items in Cart
    if (this.cartService.countItems()) {
      let invalidData = false;
      for (let key in customerData) {
        // checking length of strings and arrays (i.e. NOT checking objects)
        const dataIsLengthy: boolean = typeof customerData[key] == 'string' || Array.isArray(customerData[key]);
        if (dataIsLengthy && !customerData[key].length) {
          const msgHtml: string = `[ERROR] Order could not be placed. <b>Missing information: ${key}</b>`;
          this.messagesService.showMessage(msgHtml, 'error');
          invalidData = true;
        }
      }
      // do NOT submit if invalid-data detected
      if (invalidData) {
        return;
      }
      // saving customer-data and items BEFORE removing items from Cart
      this.cartService.saveCustomerData(customerData);
      // removing all items from Cart WITHOUT requesting confirmation
      this.cartService.clearCart(false);
      this.checkoutForm.reset();
      const msgHtml: string = `Your order has been placed`;
      this.messagesService.showMessage(msgHtml, 'success');
      // redirecting to order-confirmation
      this.router.navigate(['/order-confirmation']);
      return;
    } else {
      const msgHtml: string = `[ERROR] Order could not be placed: <b>Cart empty</b>`;
      this.messagesService.showMessage(msgHtml, 'error');
      return;
    }
  };

};
