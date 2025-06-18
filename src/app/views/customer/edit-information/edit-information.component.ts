import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { User } from '../../../model/user.model';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { getProvinces } from 'vietnam-provinces';
import { SidebarComponent } from '../../../components/users/sidebar/sidebar.component';
import { emailRegex, phoneRegex } from '../../../core/utils/regex.util';
@Component({
  selector: 'app-edit-information',
  imports: [RouterLink, DatePipe, FormsModule, SidebarComponent],
  templateUrl: './edit-information.component.html',
  styleUrl: './edit-information.component.scss',
})
export class EditInformationComponent {
  provinces = getProvinces();
  toastr = inject(ToastrService);
  router = inject(Router);
  userCurrent!: User;
  userName = '';
  phone = '';
  address = '';
  city = '';
  gender = '';
  date = '';
  mail = '';
  ngOnInit() {
    const user = localStorage.getItem('currentUser');
    if (user) {
      this.userCurrent = JSON.parse(user);
    }
    this.userName = this.userCurrent.userName;
    this.date = this.userCurrent.date;
    this.gender = this.userCurrent.gender;
    this.mail = this.userCurrent.email;
    this.phone = this.userCurrent.phone;
    this.city = this.userCurrent.city;
    this.address = this.userCurrent.address;
  }
  onSaveEdit() {
    // ===== VALIDATION =====
    if (!this.userName || this.userName.trim() === '') {
      this.toastr.warning('Họ tên không được để trống');
      return;
    }

    if (!this.date) {
      this.toastr.warning('Ngày sinh không được để trống');
      return;
    }

    if (!this.gender || this.gender.trim() === '') {
      this.toastr.warning('Giới tính không được để trống');
      return;
    }

    if (!this.mail || this.mail.trim() === '') {
      this.toastr.warning('Email không được để trống');
      return;
    }

    if (!emailRegex.test(this.mail)) {
      this.toastr.warning('Email không đúng định dạng');
      return;
    }

    if (!this.phone || this.phone.trim() === '') {
      this.toastr.warning('Số điện thoại không được để trống');
      return;
    }

    if (!phoneRegex.test(this.phone)) {
      this.toastr.warning('Số điện thoại không hợp lệ (VD: 098xxxxxxx)');
      return;
    }

    if (!this.city || this.city.trim() === '') {
      this.toastr.warning('Tỉnh/Thành phố không được để trống');
      return;
    }

    if (!this.address || this.address.trim() === '') {
      this.toastr.warning('Địa chỉ không được để trống');
      return;
    }

    // ===== LƯU THÔNG TIN =====
    try {
      this.userCurrent.userName = this.userName;
      this.userCurrent.date = this.date;
      this.userCurrent.gender = this.gender;
      this.userCurrent.email = this.mail;
      this.userCurrent.phone = this.phone;
      this.userCurrent.city = this.city;
      this.userCurrent.address = this.address;

      localStorage.setItem('currentUser', JSON.stringify(this.userCurrent));

      this.toastr.success('Lưu thành công');
      this.router.navigate(['/customer/thong-tin-ca-nhan']);
    } catch (error) {
      this.toastr.warning('Có lỗi xảy ra khi lưu');
    }
  }

  test() {}
}
