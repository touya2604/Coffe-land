import { Component } from '@angular/core';
import { type Product } from '../../../model/product.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  productCart: Product[] = [];
  ngOnInit() {
    const product = localStorage.getItem('cart');
    if (product) {
      try {
        this.productCart = JSON.parse(product);
      } catch (e) {
        this.productCart = [];
      }
    }
  }
  onDeleteItemCart(id: string) {
    this.productCart = this.productCart.filter((product) => product.id !== id);
    localStorage.setItem('cart', JSON.stringify(this.productCart));
  }
}
