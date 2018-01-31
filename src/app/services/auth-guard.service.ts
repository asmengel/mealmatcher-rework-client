

import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(protected router: Router, protected authService: AuthService) { }
// checks if user is logged in for protected feature,
// if they are not routes them to login in screen
    canActivate() {
      if (this.authService.isLoggedIn()) return true;

      this.router.navigate(['/login']);
      return false;
    }
}

