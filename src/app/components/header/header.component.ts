import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  userCurrent!: User;
  constructor(private router: Router) {}
  ngOnInit() {
    const user = localStorage.getItem('currentUser');
    if (user) {
      this.userCurrent = JSON.parse(user);
    }
  }
  onLogOut() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/home']).then(() => {
      window.location.reload();
    });
  }
}
