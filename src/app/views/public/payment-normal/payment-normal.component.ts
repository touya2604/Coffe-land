import { CurrencyPipe, DatePipe, NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../../model/product.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-normal',
  imports: [FormsModule, NgClass, CurrencyPipe, DatePipe],
  templateUrl: './payment-normal.component.html',
  styleUrl: './payment-normal.component.scss',
})
export class PaymentNormalComponent {
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
    //orderHistory luôn là mảng rỗng mới → bạn không lấy dữ liệu cũ từ localStorage.
    orderHistory.push({
      orders: { ...this.ordersList },
      checkIn: this.checkIn,
    });
    //đây là push 1 object có 2 thuộc tính là orders và checkin
    //Dưới đây là push mảng ọbject có thêm thuộc tính checkIn
    //orderHistory.push({ ...this.ordersList, check: this.checkIn });
    localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
    this.toastr.success('Đặt hàng thành công');
    localStorage.removeItem('orderItem');
    localStorage.removeItem('cart');
    localStorage.removeItem('cartRandomNumber');
    this.router.navigate(['/']);
  }
}
