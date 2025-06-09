import { Routes } from '@angular/router';
import { HomeComponent } from './views/public/home/home.component';
import { CartComponent } from './views/public/cart/cart.component';
import { LoginComponent } from './views/public/login/login.component';
import { SignUpComponent } from './views/public/sign-up/sign-up.component';
import { AboutComponent } from './views/public/about/about.component';
import { NguonGocComponent } from './views/public/about/nguon-goc/nguon-goc.component';
import { DichVuComponent } from './views/public/about/dich-vu/dich-vu.component';
import { ViecLamComponent } from './views/public/about/viec-lam/viec-lam.component';

export const routes: Routes = [
  //PUBLIC
  { path: '', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'about-us', component: AboutComponent },

  { path: 'nguon-goc', component: NguonGocComponent },
  { path: 'dich-vu', component: DichVuComponent },
  { path: 'viec-lam', component: ViecLamComponent },
];
