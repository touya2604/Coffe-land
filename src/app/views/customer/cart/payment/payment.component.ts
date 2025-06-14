import { Component, inject } from '@angular/core';
import { Product } from '../../../../model/product.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CurrencyPipe, DatePipe, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { randomNumber } from '../../../../core/utils/random.util';

@Component({
  selector: 'app-payment',
  imports: [FormsModule, NgClass, CurrencyPipe, DatePipe],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss',
})
export class PaymentComponent {
  toastr = inject(ToastrService);
  router = inject(Router);
  checkPayMethod: string = '';
  checkIn = new Date();
  ordersList: (Product & { quantity?: number })[] = [];

  ngOnInit() {
    const orders = localStorage.getItem('orderItem');
    if (orders) {
      this.ordersList = JSON.parse(orders);
    }
  }
  get totalPayMent() {
    return this.ordersList.reduce(
      (sum, product) => sum + (product.price ?? 0) * (product.quantity ?? 1),
      0
    );
  }
  onHandlePay() {
    const orderHistory = JSON.parse(
      localStorage.getItem('orderHistory') || '[]'
    );
    orderHistory.push({
      id: randomNumber(),
      orders: [...this.ordersList],
      check: this.checkIn,
      status: 'Đang giao hàng',
      total: this.totalPayMent,
      payMethod: this.checkPayMethod,
    });
    localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
    this.toastr.success('Đặt hàng thành công');
    localStorage.removeItem('orderItem'); // Sử dụng ở view Payment
    localStorage.removeItem('UserCart'); // Sử dụng ở view Cart
    localStorage.removeItem('cartRandomNumber'); // Sử dụng ở view Cart -> dùng làm tiền ship
    this.router.navigate(['/customer/order-history']);
  }
}
