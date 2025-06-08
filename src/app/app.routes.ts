import { Routes } from '@angular/router';
import { HomeComponent } from './views/public/home/home.component';
import { CartComponent } from './views/public/cart/cart.component';
import { LoginComponent } from './views/public/login/login.component';
import { SignUpComponent } from './views/public/sign-up/sign-up.component';
import { AboutComponent } from './views/public/about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'about-us', component: AboutComponent },
];
