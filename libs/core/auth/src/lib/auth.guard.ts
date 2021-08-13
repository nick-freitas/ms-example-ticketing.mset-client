import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JWTTokenService } from './jwt-token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JWTTokenService, private router: Router) {}
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.jwtService.getUser()) {
      if (this.jwtService.isTokenExpired()) {
        return this.router.navigateByUrl('/sign-up');
      } else {
        return true;
      }
    }

    return this.router.navigateByUrl('/sign-up');
  }
}
