import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Users } from '../../../mock/user.mock';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private router: Router) {}
  users = Users;
  loginType: string = 'email';
  email = '';
  phone = '';
  pass = '';
  onLogin() {
    for (let i = 0; i < this.users.length; i++) {
      if (
        (this.email === this.users[i].email ||
          this.phone === this.users[i].phone) &&
        this.pass === this.users[i].pass
      ) {
        this.router.navigate(['/home']);
        break;
      }
    }
  }
}
