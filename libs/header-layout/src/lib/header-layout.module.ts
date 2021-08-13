import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderLayoutComponent } from './header-layout.component';
import { MaterialUiModule } from '@mset-client/material-ui';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [HeaderLayoutComponent],
  imports: [CommonModule, RouterModule, MaterialUiModule, FlexLayoutModule],
  exports: [HeaderLayoutComponent],
})
export class HeaderLayoutModule {}
