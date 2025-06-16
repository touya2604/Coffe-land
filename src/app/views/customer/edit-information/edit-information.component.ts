import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { User } from '../../../model/user.model';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { getProvinces } from 'vietnam-provinces';
@Component({
  selector: 'app-edit-information',
  imports: [RouterLink, DatePipe, FormsModule],
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
    try {
      this.userCurrent.userName = this.userName;
      this.userCurrent.date = this.date;
      this.userCurrent.gender = this.gender;
      this.userCurrent.email = this.mail;
      this.userCurrent.phone = this.phone;
      this.userCurrent.city = this.city;
      this.userCurrent.address = this.address;
    } catch (error) {
      this.toastr.warning('Có lỗi');
    }
    this.toastr.success('Lưu thành công');
    this.router.navigate(['/customer/thong-tin-ca-nhan']);
    localStorage.setItem('currentUser', JSON.stringify(this.userCurrent));
  }
  test() {}
}
