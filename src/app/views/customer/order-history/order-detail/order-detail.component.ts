import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../../model/product.model';
import { orderHistory } from '../../../../model/orderHistory.model';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { User } from '../../../../model/user.model';

@Component({
  selector: 'app-order-detail',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './order-detail.component.html',
  styleUrl: './order-detail.component.scss',
})
export class OrderDetailComponent {
  constructor(private route: ActivatedRoute) {}
  orderHistoryDetail: {
    id: string;
    orders: (Product & { quantity?: number })[];
    check: Date;
    status: string;
    total: number;
  }[] = [];
  orderDetailId = '';
  orderDetail: orderHistory | undefined;
  userCurrent: User | undefined;
  ngOnInit() {
    // Lấy ID đơn hàng từ route
    const orderId = this.route.snapshot.paramMap.get('id');
    const order = localStorage.getItem('orderHistory');
    const user = localStorage.getItem('currentUser');
    if (order) {
      this.orderHistoryDetail = JSON.parse(order);
    }
    if (orderId) {
      this.orderDetailId = orderId;
    }
    if (user) {
      this.userCurrent = JSON.parse(user);
    }
    this.orderDetail = this.orderHistoryDetail.find(
      (od) => od.id === this.orderDetailId
    );
  }
}
