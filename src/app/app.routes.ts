import { Routes } from '@angular/router';
import { HomeComponent } from './views/public/home/home.component';
import { CartComponent } from './views/public/cart/cart.component';
import { LoginComponent } from './views/public/login/login.component';
import { SignUpComponent } from './views/public/sign-up/sign-up.component';
import { AboutComponent } from './views/public/about/about.component';
import { NguonGocComponent } from './views/public/about/nguon-goc/nguon-goc.component';
import { DichVuComponent } from './views/public/about/dich-vu/dich-vu.component';
import { ViecLamComponent } from './views/public/about/viec-lam/viec-lam.component';
import { ThongTinComponent } from './views/customer/thong-tin/thong-tin.component';
import { authGuard } from './auth.guard';
import { PaymentComponent } from './views/customer/cart/payment/payment.component';
import { PaymentNormalComponent } from './views/public/payment-normal/payment-normal.component';
import { FoodComponent } from './views/public/food/food.component';
import { DrinkComponent } from './views/public/drink/drink.component';
import { OrderHistoryComponent } from './views/customer/order-history/order-history.component';
import { EditInformationComponent } from './views/customer/edit-information/edit-information.component';
import { AdvancedComponent } from './views/customer/advanced/advanced.component';
import { OrderDetailComponent } from './views/customer/order-history/order-detail/order-detail.component';
import { ForgetPasswordComponent } from './views/public/login/forget-password/forget-password.component';

export const routes: Routes = [
  //Public routes

  //header/...
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'about-us', component: AboutComponent },
  { path: 'foods', component: FoodComponent },
  { path: 'drinks', component: DrinkComponent },
  //about-us/...
  { path: 'nguon-goc', component: NguonGocComponent },
  { path: 'dich-vu', component: DichVuComponent },
  { path: 'viec-lam', component: ViecLamComponent },
  //cart/...
  { path: 'payment', component: PaymentNormalComponent },
  //login/forget-password
  { path: 'recover', component: ForgetPasswordComponent },

  //Customer routes
  {
    path: 'customer',
    canActivate: [authGuard],
    children: [
      {
        path: 'thong-tin-ca-nhan',
        component: ThongTinComponent,
      },
      {
        path: 'payment',
        component: PaymentComponent,
      },
      {
        path: 'order-history',
        component: OrderHistoryComponent,
      },
      {
        path: 'edit',
        component: EditInformationComponent,
      },
      {
        path: 'nang-cao',
        component: AdvancedComponent,
      },

      {
        path: 'order-detail/:id',
        component: OrderDetailComponent,
      },
    ],
  },
];
