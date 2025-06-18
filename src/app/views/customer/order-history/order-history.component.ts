import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Product } from '../../../model/product.model';
import { CurrencyPipe, DatePipe, JsonPipe } from '@angular/common';
import { orderHistory } from '../../../model/orderHistory.model';
import { SidebarComponent } from '../../../components/users/sidebar/sidebar.component';

@Component({
  selector: 'app-order-history',
  imports: [RouterLink, DatePipe, CurrencyPipe, SidebarComponent],
  templateUrl: './order-history.component.html',
  styleUrl: './order-history.component.scss',
})
export class OrderHistoryComponent {
  orderHistory: orderHistory[] = [];

  ngOnInit() {
    const order = localStorage.getItem('orderHistory');

    if (order) {
      this.orderHistory = JSON.parse(order);
    }
  }
}
