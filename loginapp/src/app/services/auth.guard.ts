import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from './login.service'; // adjust path as needed

export const authGuard: CanActivateFn = (route, state) => {

  const loginService = inject(LoginService); // use inject to get the service

  const router = inject(Router);

  if (loginService.isLoggedIn()) {
    return true; // allow navigation
  }

  // Redirect to login if not authenticated
  router.navigate(['login']);

  return false; // deny navigation
};
