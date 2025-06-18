import { Component, inject, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type User } from '../../../model/user.model';
import { randomId } from '../../../core/utils/random.util';
import { ToastrService } from 'ngx-toastr';
import { Users } from '../../../mock/user.mock';
import {
  emailRegex,
  nameRegex,
  phoneRegex,
} from '../../../core/utils/regex.util';

@Component({
  selector: 'app-sign-up',

  imports: [FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  toastr = inject(ToastrService);
  oldUser = Users;
  newUser!: User;
  userName = '';
  date = ''; // ngày sinh
  phone = '';
  email = '';
  pass = '';
  reEmail = '';
  rePass = '';
  onSignUp() {
    if (!this.userName || this.userName.trim() === '') {
      this.toastr.warning('Tên không được trống');
    } else if (!this.date || this.date.trim() === '') {
      this.toastr.warning('Ngày sinh không được để trống');
    } else if (!this.phone || this.phone.trim() === '') {
      this.toastr.warning('Số điện thoại không được để trống');
    } else if (!this.email || this.email.trim() === '') {
      this.toastr.warning('Email không được để trống');
    } else if (
      this.oldUser.find((u) => u.email === this.email && u.phone === this.phone)
    ) {
      this.toastr.warning('Email/Số điện thoại đã được sử dụng');
    } else if (this.email !== this.reEmail) {
      this.toastr.warning('Email không trùng khớp');
    } else if (this.pass !== this.rePass) {
      this.toastr.warning('Password không trùng khớp');
    } else if (!phoneRegex.test(this.phone)) {
      this.toastr.warning('Số điện thoại sai định dạng');
    } else if (!emailRegex.test(this.email)) {
      this.toastr.warning('Email sai định dạng');
    } else if (!nameRegex.test(this.userName)) {
      this.toastr.warning('Họ và tên không phù hợp');
    } else {
      this.newUser = {
        id: randomId(),
        userName: this.userName,
        date: this.date,
        phone: this.phone,
        email: this.email,
        pass: this.pass,
        gender: '',
        city: '',
        address: '',
      };
      this.toastr.success('Đăng ký thành công');
      console.log(this.newUser);
    }
  }
}
