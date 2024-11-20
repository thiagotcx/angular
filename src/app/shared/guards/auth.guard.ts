import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router)
  const authService: AuthService = inject(AuthService)

  const hasPermission = authService.getIsAuth()

  console.log("Entrou no guard de autenticacao")

  if (hasPermission) {
    console.log("Permissão concedida")
    return true
  }

  console.error("Permissão negada")

  router.createUrlTree(['/entrar'])
  return false
};
