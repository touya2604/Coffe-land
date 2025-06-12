import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../../model/product.model';

@Component({
  selector: 'app-order-history',
  imports: [RouterLink],
  templateUrl: './order-history.component.html',
  styleUrl: './order-history.component.scss',
})
export class OrderHistoryComponent {
  orderHistory: (Product & { quantity?: number; checkIn?: Date })[] = [];
  ngOnInit() {
    const order = localStorage.getItem('orderHistory');
    if (order) {
      this.orderHistory = JSON.parse(order);
    }
    console.log(this.orderHistory);
  }
}
