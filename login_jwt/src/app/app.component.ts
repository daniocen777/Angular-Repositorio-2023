import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'login_jwt';

  show?: boolean;
  sidenavValue: string = '';

  printShow(value: boolean): void {
    this.show = value;
  }

  sidenavWith(value: string): void {
    this.sidenavValue = value;
  }
}
