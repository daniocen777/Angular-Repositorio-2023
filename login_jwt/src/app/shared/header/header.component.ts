import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  value: boolean = false;
  @Output() collapsed = new EventEmitter<boolean>(this.value);
  @Output() sidenavWith = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  showSidenav(): void {
    this.value = !this.value;
    this.collapsed.emit(this.value);
    this.sidenavWith.emit(this.value ? '65px' : '250px');
  }
}
