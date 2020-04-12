// Angular modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

// app services
import { CartService } from './cart.service';
import { MessagesService } from './messages.service';

// app components
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MessagesComponent } from './messages/messages.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { CartPricesComponent } from './cart-prices/cart-prices.component';
import { ProductCardComponent } from './product-card/product-card.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'products/:productId', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'shipping', component: ShippingComponent },
  { path: 'order-confirmation', component: OrderConfirmationComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    MessagesComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    OrderConfirmationComponent,
    CartPricesComponent,
    ProductCardComponent,
  ],
  bootstrap: [ AppComponent ],
  providers: [ CartService, MessagesService ]
})
export class AppModule {};
