import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-service';

export const authGuard: CanActivateFn = (route, state) => {
  const servicioAuth = inject(AuthService)
  const router = inject(Router)

  if(servicioAuth.sesionInciada()){
    return true;
  }
  return router.navigate(['/login'])
  
};
