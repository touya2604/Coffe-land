import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  // = constructor(private router: Router)
  const isLoggin = !!localStorage.getItem('currentUser');
  return isLoggin ? true : router.createUrlTree(['/login']);
};
