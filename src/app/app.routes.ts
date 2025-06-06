import { Routes } from '@angular/router';
import { HomeComponent } from './views/public/home/home.component';
import { CartComponent } from './views/public/cart/cart.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cart', component: CartComponent },
];
