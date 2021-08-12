import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { WebShellModule } from '@mset-client/web-shell';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [AppModule, ServerModule, WebShellModule, RouterModule],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
