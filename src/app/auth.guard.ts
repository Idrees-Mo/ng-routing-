import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard = () => {
  return () => {
    const router = inject(Router);
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (isLoggedIn) {
      console.warn('Access granted - User is logged in');
      return true;
    } else {
      router.navigate(['/']);
      console.warn('Access denied - Redirecting to login page');
      return false;
    }
  };
};
