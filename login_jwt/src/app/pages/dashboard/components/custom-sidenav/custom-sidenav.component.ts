import { Component, OnInit } from '@angular/core';

export type MenuItem = {
  icon: string,
  label: string,
  route?: string,
};

@Component({
  selector: 'app-custom-sidenav',
  templateUrl: './custom-sidenav.component.html',
  styleUrls: ['./custom-sidenav.component.scss']
})
export class CustomSidenavComponent implements OnInit {

  menuItem: MenuItem[] = [
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: 'dashboard'
    },
    {
      icon: 'analytics',
      label: 'Analytics',
      route: 'analytics'
    },
    {
      icon: 'comment',
      label: 'Comments',
      route: 'Dashboards'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
