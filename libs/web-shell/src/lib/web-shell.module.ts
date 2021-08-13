import { NgModule } from '@angular/core';
import { WebShellRoutingModule } from './web-shell-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AuthInterceptor, AuthModule } from '@mset-client/core-auth';

@NgModule({
  declarations: [],
  imports: [BrowserModule, HttpClientModule, WebShellRoutingModule, AuthModule],
  exports: [WebShellRoutingModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
})
export class WebShellModule {}
