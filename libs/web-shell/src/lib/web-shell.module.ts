import { NgModule } from '@angular/core';
import { WebShellRoutingModule } from './web-shell-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [],
  imports: [BrowserModule, HttpClientModule, WebShellRoutingModule],
  exports: [WebShellRoutingModule],
})
export class WebShellModule {}
