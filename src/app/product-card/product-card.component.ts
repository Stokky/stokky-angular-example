import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

// app types
import { ProductInterface } from '../types';

// app services
import { CartService } from '../cart.service';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input() product: ProductInterface;

  constructor(
    private router: Router,
    private cartService: CartService,
    private messagesService: MessagesService
  ) {};

  routeProductDetails(productId: number): void {
    // redirecting to product-details
    this.router.navigate(['/products', productId]);
  };

  buyNow(product: ProductInterface): void {
    // prevent click-bubbling to ".product-card" that would trigger "routeProductDetails()"
    event.stopPropagation();
    this.cartService.addToCart(product);
  };

  onNotify(productName: string): void {
    // prevent click-bubbling to ".product-card" that would trigger "routeProductDetails()"
    event.stopPropagation();
    // triggering message
    const msgHtml: string = `You will be notified when the product <b>${productName}</b> becomes available`;
    this.messagesService.showMessage(msgHtml, 'success');
  };

};
