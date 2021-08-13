import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { JWTTokenService } from './jwt-token.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
  constructor(private jwtTokenService: JWTTokenService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      tap(() => this.jwtTokenService.setToken()),
      tap((res: HttpEvent<any>) =>
        console.log(`REQ ${req.method} ${req.urlWithParams} GOT ${res.type}`)
      ),
      tap(() => console.log(this.jwtTokenService.getUser()))
    );
  }
}
