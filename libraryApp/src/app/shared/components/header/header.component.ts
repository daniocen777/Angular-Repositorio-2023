import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  goToBook(): void {
    this._router.navigate(['book-catalog/book']);
  }

  goToAuthor(): void {
    this._router.navigate(['book-catalog/author']);
  }

  goToEditorial(): void {
    this._router.navigate(['book-catalog/editorial']);
  }

  goToUser(): void {
    this._router.navigate(['security/user']);
  }
  goToRole(): void {
    this._router.navigate(['security/role']);
  }

}
