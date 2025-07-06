import { Component, inject } from '@angular/core';
import { type Product } from '../../../../model/product.model';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { User } from '../../../../model/user.model';
import { ToastrService } from 'ngx-toastr';
import { VouchersComponent } from '../vouchers/vouchers.component';
import { Voucher } from '../../../../model/voucher.model';
import { Vouchers } from '../../../../mock/voucher.mock';
@Component({
  selector: 'app-cart-cus',
  imports: [CurrencyPipe, FormsModule, RouterLink, VouchersComponent],
  templateUrl: './cart-cus.component.html',
  styleUrl: './cart-cus.component.scss',
})
export class CartCusComponent {
  constructor(private router: Router) {}
  productCart: (Product & { quantity?: number })[] = []; //Danh sách sản phẩm
  vouchers = Vouchers;
  toastr = inject(ToastrService);
  check = false;

  ngOnInit() {
    const product = localStorage.getItem('UserCart');
    if (product) {
      this.productCart = JSON.parse(product);
    }
  }

  onDeleteItemCart(id: string) {
    this.productCart = this.productCart.filter((product) => product.id !== id);
    localStorage.setItem('UserCart', JSON.stringify(this.productCart));
  }
  onIncrease(id: string) {
    const product = this.productCart.find((p) => p.id === id);
    if (
      product &&
      typeof product.quantity === 'number' &&
      product.quantity < 99
    ) {
      product.quantity += 1;
      localStorage.setItem('UserCart', JSON.stringify(this.productCart));
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
      localStorage.setItem('UserCart', JSON.stringify(this.productCart));
    }
  }
  onHandleInputQuantity(id: string, event: Event) {
    const target = event.target as HTMLInputElement | null;
    let inputQuantity = Number(target?.value ?? 1);
    const product = this.productCart.find((p) => p.id === id);
    if (product && typeof product.quantity === 'number') {
      if (inputQuantity < 1) {
        this.toastr.warning('Vượt quá giới hạn');
        inputQuantity = 1;
      } else if (inputQuantity > 99) {
        this.toastr.warning('Vượt quá giới hạn');
        inputQuantity = 99;
      }
      product.quantity = inputQuantity;
      localStorage.setItem('UserCart', JSON.stringify(this.productCart));
    }
  }
  get totalPrice() {
    return this.productCart.reduce(
      (sum, product) => sum + (product.price ?? 0) * (product.quantity ?? 0),
      0
    );
  }
  onHandlePayProduct() {
    // this.toastr.success('Thanh toán thành công !!!');
    // localStorage.clear();

    if (this.productCart.length > 0) {
      localStorage.setItem('orderItem', JSON.stringify(this.productCart));
      this.router.navigate(['/customer/payment']);
    } else {
      this.toastr.warning('Vui lòng thêm sản phẩm vào giỏ hàng');
    }
  }
  onPopupVoucher() {
    this.check = true;
  }
  onHadleClosePopup() {
    this.check = false;
  }
  VoucherDiscout(id: string) {
    const voucherUse = this.vouchers.find((v) => (v.id = id));
  }
}
