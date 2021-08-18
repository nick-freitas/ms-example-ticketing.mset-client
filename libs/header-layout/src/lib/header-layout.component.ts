import { Component, ChangeDetectionStrategy } from '@angular/core';
import { JWTTokenService } from '@mset-client/core-auth';
import { HeaderLayoutService } from './header-layout.service';

@Component({
  selector: 'header-layout',
  templateUrl: './header-layout.component.html',
  styleUrls: ['./header-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderLayoutComponent {
  constructor(
    public readonly tokenService: JWTTokenService,
    private readonly service: HeaderLayoutService
  ) {}

  signOut() {
    this.service.signOut().subscribe({ error: (err) => console.error(err) });
  }
}
