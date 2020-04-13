import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// app types
import {
  ProductInterface,
  CartPricesInterface,
  CustomerDataInterface,
  ShippingOptionInterface
} from './types';

// app services
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: ProductInterface[] = [];

  pricesDefault: CartPricesInterface = {
    subtotal: 0,
    shipping: 'TBD',
    tax: 0,
    total: 0
  };

  prices: CartPricesInterface = {...this.pricesDefault};

  customerData: CustomerDataInterface = {
    name: '',
    address: '',
    shippingOption: '',
    items: [],
    prices: {...this.pricesDefault}
  };

  constructor(
    private httpClient: HttpClient,
    private messagesService: MessagesService
  ) {};

  countItems(): number {
    return this.items.length;
  };

  addToCart(product: ProductInterface): void {
    this.items.push(product);
    // sorting items alphabetically
    // -- so that "duplicate" items are grouped in the Cart page
    this.sortItems();
    // triggering message
    const msgHtml: string = `<b>${product.name}</b> has been added to Cart`;
    this.messagesService.showMessage(msgHtml, 'success');
  };

  sortItems(): void {
    this.items.sort((a, b) => a.name > b.name ? 1 : -1 );
  };

  getItems(): ProductInterface[] {
    return this.items;
  };

  isNumber(price: any) {
    return typeof price === 'number';
  };

  updatePrices(): void {
    // updating subtotal
    let subtotal: number = 0;
    this.items.forEach( item => {
      subtotal += item.price;
    });
    this.prices.subtotal = subtotal;
    // updating total
    let total: number = 0;
    if (subtotal > 0) {
      total = subtotal;
      // -- adding shipping-price if number (i.e. not "TBD")
      if (typeof this.prices.shipping == 'number') {
        total += this.prices.shipping;
      }
      // -- adding tax only if number (i.e. not "TBD")
      if (typeof this.prices.tax == 'number') {
        total += this.prices.tax;
      }
    }
    this.prices.total = total;
  };

  deletePrices(): void {
    this.prices = {...this.pricesDefault};
  };

  // clearing the Cart requires a confirmation, by default
  clearCart(withConfirmation: boolean = true): void {
    if (!withConfirmation) {
      this.items = [];
      return;
    }
    if (confirm("Are you sure you want to remove all items from Cart?")) {
      this.items = [];
      // triggering message
      const msgHtml: string = `All items removed from Cart`;
      this.messagesService.showMessage(msgHtml, 'success');
    }
  };

  getShippingOptions(): Observable<ShippingOptionInterface[]> {
    return this.httpClient.get<ShippingOptionInterface[]>('/assets/shipping.json');
  };

  setShippingOption(shippingOption: ShippingOptionInterface): void {
    this.customerData.shippingOption = shippingOption.type;
    this.prices.shipping = shippingOption.price;
    this.updatePrices();
  };

  saveCustomerData(customerData): void {
    this.customerData = customerData;
    this.customerData.items = this.items;
    this.customerData.prices = this.prices;
  };

  deleteCustomerData(): void {
    // resetting keys of type "string" (e.g. name, address etc.)
    for (let key in this.customerData) {
      if (typeof this.customerData[key] === 'string') {
        this.customerData[key] = '';
      }
    }
    this.customerData.items = [];
    this.customerData.prices = {...this.pricesDefault};
  };
};
