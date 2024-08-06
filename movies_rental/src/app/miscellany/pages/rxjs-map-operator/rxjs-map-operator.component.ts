import { Component, inject, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';
import { map, tap } from 'rxjs';
import { countryCodes } from 'src/app/shared/mock_data/country-code';

@Component({
  selector: 'app-rxjs-map-operator',
  templateUrl: './rxjs-map-operator.component.html',
  styleUrls: ['./rxjs-map-operator.component.scss']
})
export class RxjsMapOperatorComponent implements OnInit {
  users!: User[];
  displayedColumns: string[] = ['name', 'email', 'country', 'postcode'];

  private usersSvc = inject(UserService);

  constructor() {
    this.usersSvc.getUsers$()
      .pipe(
        tap((users: User[]) => console.log(users)),
        map((users: User[]) => {
          return users.map((user: User) => ({
            ...user,
            countryName: countryCodes[user.location.country] || 'Unknown'
          }));
        }),
        tap((users: User[]) => this.users = users), // data ya transformada
      )
      .subscribe();
  }

  ngOnInit(): void {
  }

}
