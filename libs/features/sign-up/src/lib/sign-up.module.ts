import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialUiModule } from '@mset-client/material-ui';
import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpComponent } from './sign-up.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    SignUpRoutingModule,
    MaterialUiModule,
  ],
  exports: [ReactiveFormsModule],
})
export class SignUpModule {}
