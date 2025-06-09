import { Component } from '@angular/core';
import { type Product } from '../../../model/product.model';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  // productCart: Product[] = [];

  productCart: (Product & { quantity?: number })[] = [];
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
  onIncrease(id: string) {
    const product = this.productCart.find((p) => p.id === id);
    if (
      product &&
      typeof product.quantity === 'number' &&
      product.quantity < 99
    ) {
      product.quantity += 1;
      localStorage.setItem('cart', JSON.stringify(this.productCart));
    }
  }
  onDecrease(id: string) {
    const product = this.productCart.find((p) => p.id === id);
    if (
      product &&
      typeof product.quantity === 'number' &&
      product.quantity > 1
    ) {
      product.quantity -= 1;
      localStorage.setItem('cart', JSON.stringify(this.productCart));
    }
  }
  onHandleInputQuantity(id: string, event: Event) {
    const target = event.target as HTMLInputElement | null;
    let inputQuantity = Number(target?.value ?? 1);
    const product = this.productCart.find((p) => p.id === id);
    if (product && typeof product.quantity === 'number') {
      if (inputQuantity < 1) {
        alert('No no');
        inputQuantity = 1;
      } else if (inputQuantity > 99) {
        alert('No no');
        inputQuantity = 99;
      }
      product.quantity = inputQuantity;
      localStorage.setItem('cart', JSON.stringify(this.productCart));
    }
  }
  get totalPrice() {
    return this.productCart.reduce(
      (sum, product) => sum + (product.price ?? 0) * (product.quantity ?? 0),
      0
    );
  }
}
