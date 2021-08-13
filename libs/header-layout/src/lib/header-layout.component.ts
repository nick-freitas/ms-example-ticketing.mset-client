import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'header-layout',
  templateUrl: './header-layout.component.html',
  styleUrls: ['./header-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
