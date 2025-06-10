import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    // provideToastr({
    //   positionClass: 'toast-top-right', // Vị trí hiển thị
    //   timeOut: 3000,
    //   closeButton: true,
    //   progressBar: true,
    // }), // Đúng cú pháp để dùng toast
    provideToastr({
      timeOut: 3000,
      closeButton: true,
      progressBar: true,
    }),
  ],
};
