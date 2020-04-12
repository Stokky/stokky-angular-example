import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

// app assets
import { products } from '../products';

// app types
import { ProductInterface } from '../types';

// app services
import { CartService } from '../cart.service';
import { MessagesService } from '../messages.service';

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: ProductInterface;

  // cartService needed in template => NOT private
  constructor(
    private activatedRoute: ActivatedRoute,
    public cartService: CartService,
    private messagesService: MessagesService
  ) {};

  getProductById (productId: number): ProductInterface | null {
    const productsFiltered: ProductInterface[] = products.filter(productData => productData.id === productId);
    return productsFiltered[0] ? productsFiltered[0] : null;
  };

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      console.log('--- paramMap.subscribe > next...');
      const productId: number = +params.get('productId');
      this.product = this.getProductById(productId);
      if (this.product === null) {
        const msgHtml: string = `[ERROR] Invalid product ID`;
        this.messagesService.showMessage(msgHtml, 'error');
      }
    });
  };

  notify(): void {
    // triggering message
    const msgHtml: string = `You will be notified when the product <b>${this.product.name}</b> becomes available`;
    this.messagesService.showMessage(msgHtml, 'success');
  };

};
