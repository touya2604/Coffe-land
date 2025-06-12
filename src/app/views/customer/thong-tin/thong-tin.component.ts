import { Component } from '@angular/core';
import { User } from '../../../model/user.model';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-thong-tin',
  imports: [DatePipe, RouterLink],
  templateUrl: './thong-tin.component.html',
  styleUrl: './thong-tin.component.scss',
})
export class ThongTinComponent {
  userCurrent!: User;
  ngOnInit() {
    const user = localStorage.getItem('currentUser');
    if (user) {
      this.userCurrent = JSON.parse(user);
    }
  }
}
