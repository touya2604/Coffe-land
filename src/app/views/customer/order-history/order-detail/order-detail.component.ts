import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../../model/product.model';
import { orderHistory } from '../../../../model/orderHistory.model';

@Component({
  selector: 'app-order-detail',
  imports: [],
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
  ngOnInit() {
    // Lấy ID đơn hàng từ route
    const orderId = this.route.snapshot.paramMap.get('id');
    const order = localStorage.getItem('orderHistory');
    if (order) {
      this.orderHistoryDetail = JSON.parse(order);
    }
    if (orderId) {
      this.orderDetailId = orderId;
    }
    this.orderDetail = this.orderHistoryDetail.find(
      (od) => od.id === this.orderDetailId
    );
  }
}
