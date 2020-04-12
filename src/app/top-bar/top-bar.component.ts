import { Component, OnInit } from '@angular/core';

// app services
import { CartService } from '../cart.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  // cartService needed in template => NOT private
  constructor(
    public cartService: CartService
  ) {};

  ngOnInit(): void {};

};
