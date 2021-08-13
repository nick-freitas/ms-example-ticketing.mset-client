import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  HeaderLayoutComponent,
  HeaderLayoutModule,
} from '@mset-client/header-layout';

const routes: Routes = [
  {
    path: 'sign-up',
    loadChildren: () =>
      import('@mset-client/features/sign-up').then((m) => m.SignUpModule),
  },
  {
    path: '',
    component: HeaderLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () =>
          import('@mset-client/features/home-page').then(
            (m) => m.HomePageModule
          ),
      },
      {
        path: '**',
        loadChildren: () =>
          import('@mset-client/features/page-not-found').then(
            (m) => m.PageNotFoundModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HeaderLayoutModule],
  exports: [RouterModule],
})
export class WebShellRoutingModule {}
