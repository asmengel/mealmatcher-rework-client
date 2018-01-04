

import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(protected router: Router, protected authService: AuthService) { }

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  //   if (localStorage.getItem('token')) {
  //     return true;
  //   }
  //   this.router.navigate(['/login', { returnUrl: window.location.pathname }]); //{queryParams:
  //   console.log(window.location.pathname, ' window location');
  //   return false;
  // }
    canActivate() {
      if (this.authService.isLoggedIn()) return true;

      this.router.navigate(['/login']);
      return false;
    }
}

