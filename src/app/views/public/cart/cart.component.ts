import { Component, inject } from '@angular/core';
import { type Product } from '../../../model/product.model';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { User } from '../../../model/user.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe, FormsModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  // productCart: Product[] = [];
  constructor(private router: Router) {}
  productCart: (Product & { quantity?: number })[] = []; //Danh sách sản phẩm
  // productCart = [];
  // randomNumber!: number; // Tiền ship
  userCurrent!: User; //check Login
  toastr = inject(ToastrService);
  checkKey = this.userCurrent ? 'UserCart' : 'cart'; //Check cart. Nếu đã login thì là UserCart còn ko thì là cart
  ngOnInit() {
    // this.initializeRandomNumber(); // Tiền ship

    const user = localStorage.getItem('currentUser');
    const key = user ? 'UserCart' : 'cart';
    const product = localStorage.getItem(key);

    if (product) {
      this.productCart = JSON.parse(product);
    }
    if (user) {
      this.userCurrent = JSON.parse(user);
    }
  }

  //Tiền ship
  // private initializeRandomNumber(): void {
  //   const savedRandomNumber = localStorage.getItem('cartRandomNumber');

  //   if (savedRandomNumber) {
  //     // Nếu đã có số random được lưu, sử dụng số đó
  //     this.randomNumber = parseInt(savedRandomNumber);
  //   } else {
  //     // Nếu chưa có, tạo số mới và lưu lại
  //     this.randomNumber =
  //       Math.floor(Math.random() * (40000 - 10000 + 1)) + 10000;
  //     localStorage.setItem('cartRandomNumber', this.randomNumber.toString());
  //   }
  // }

  // /**
  //  * Hàm reset random number (nếu cần thiết)
  //  */
  // resetRandomNumber(): void {
  //   this.randomNumber = Math.floor(Math.random() * (40000 - 10000 + 1)) + 10000;
  //   localStorage.setItem('cartRandomNumber', this.randomNumber.toString());
  // }

  onDeleteItemCart(id: string) {
    this.productCart = this.productCart.filter((product) => product.id !== id);
    localStorage.setItem(this.checkKey, JSON.stringify(this.productCart));
  }
  onIncrease(id: string) {
    const product = this.productCart.find((p) => p.id === id);
    if (
      product &&
      typeof product.quantity === 'number' &&
      product.quantity < 99
    ) {
      product.quantity += 1;
      localStorage.setItem(this.checkKey, JSON.stringify(this.productCart));
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
      localStorage.setItem(this.checkKey, JSON.stringify(this.productCart));
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
      localStorage.setItem(this.checkKey, JSON.stringify(this.productCart));
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
      if (this.userCurrent) {
        this.router.navigate(['/customer/payment']);
      } else {
        this.router.navigate(['/payment']);
      }
    } else {
      this.toastr.warning('Vui lòng thêm sản phẩm vào giỏ hàng');
    }
  }
}
