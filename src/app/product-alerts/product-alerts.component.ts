import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// app types
import { ProductInterface } from '../types';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  @Input() product: ProductInterface;

  @Output() notifyEvent: EventEmitter<string> = new EventEmitter();

  constructor() {};

  ngOnInit(): void {};

};
