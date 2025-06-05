import { Component } from '@angular/core';
import { type Product } from '../../../model/product.model';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  productCart = [];
  constructor() {
    const product = localStorage.getItem('product');
    if (product) {
      this.productCart = JSON.parse(product);
    }
  }
}
