import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Users } from '../../../mock/user.mock';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private router: Router) {}
  toastr = inject(ToastrService);
  users = Users;
  loginType: string = 'email';
  email = '';
  phone = '';
  pass = '';
  onLogin() {
    const loginValue = this.loginType === 'email' ? this.email : this.phone;
    const loginField = this.loginType === 'email' ? 'email' : 'phone';
    if (!loginValue || !this.pass) {
      this.toastr.warning('Vui lòng nhập đầy đủ thông tin');
      return;
    }
    const user = this.users.find(
      (u) => u[loginField] === loginValue && u.pass === this.pass
    );
    if (user) {
      this.toastr.success('Đăng nhập thành công');
      localStorage.setItem('currentUser', JSON.stringify(user));
      localStorage.removeItem('cart');
      this.router.navigate(['/home']).then(() => {
        window.location.reload();
      });
    } else {
      this.toastr.error('Sai thông tin đăng nhập');
    }

    // for (let i = 0; i < this.users.length; i++) {
    //   if (
    //     (this.email === this.users[i].email ||
    //       this.phone === this.users[i].phone) &&
    //     this.pass === this.users[i].pass
    //   ) {
    //     this.router.navigate(['/home']);
    //     break;
    //   }
    // }
  }
}
