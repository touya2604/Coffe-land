import { Component, inject } from '@angular/core';
import { Product } from '../../../model/product.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CurrencyPipe, DatePipe, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
    this.toastr.success('Đặt hàng thành công');
    localStorage.removeItem('orderItem');
    localStorage.removeItem('cart');
    localStorage.removeItem('cartRandomNumber');
    this.router.navigate(['/']);
  }
}
