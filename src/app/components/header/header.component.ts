import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { User } from '../../model/user.model';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  userCurrent!: User;
  constructor(private router: Router) {}
  checkCart = this.userCurrent ? 'UserCart' : 'cart';
  cartCurrent: Product[] = [];
  ngOnInit() {
    const user = localStorage.getItem('currentUser');
    this.checkCart = user ? 'UserCart' : 'cart';
    this.updateCart(); // Lấy lần đầu
    if (user) {
      this.userCurrent = JSON.parse(user);
    }
    setInterval(() => {
      this.updateCart();
    }, 1000); // cập nhật mỗi 1 giây
  }
  updateCart() {
    const cart = localStorage.getItem(this.checkCart);
    if (cart) {
      this.cartCurrent = JSON.parse(cart);
    }
  }
  onLogOut() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/home']).then(() => {
      window.location.reload();
    });
  }
}
