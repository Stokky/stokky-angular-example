import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPricesComponent } from './cart-prices.component';

describe('CartPricesComponent', () => {
  let component: CartPricesComponent;
  let fixture: ComponentFixture<CartPricesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartPricesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
