import jwt_decode from 'jwt-decode';
import { Injectable } from '@angular/core';
import { CookieService } from './cookie.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JWTTokenService {
  jwtToken: string | undefined;
  decodedToken: { [key: string]: string } | undefined;
  userToken$: Observable<any>;
  userTokenSubject: BehaviorSubject<any>;

  constructor(private cookieService: CookieService) {
    this.setToken();
    this.userTokenSubject = new BehaviorSubject(null);
    this.userToken$ = this.userTokenSubject.asObservable();
  }

  setToken() {
    this.jwtToken = this.cookieService.get('auth_token');
  }

  decodeToken() {
    if (this.jwtToken) {
      this.decodedToken = jwt_decode(this.jwtToken);
    }
  }

  getDecodeToken() {
    if (this.jwtToken) {
      return jwt_decode(this.jwtToken);
    }
  }

  getUser() {
    this.decodeToken();
    return this.decodedToken ? this.decodedToken : null;
  }

  getEmailId() {
    this.decodeToken();
    return this.decodedToken ? this.decodedToken.email : null;
  }

  getExpiryTime() {
    this.decodeToken();
    return this.decodedToken ? this.decodedToken.exp : null;
  }

  isTokenExpired(): boolean {
    const expiryTime: number = parseInt(this.getExpiryTime() || '0');
    if (expiryTime) {
      return 1000 * expiryTime - new Date().getTime() < 5000;
    } else {
      return false;
    }
  }
}
