import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _users: BehaviorSubject<User[]>;

  private dataStore!: {
    users: User[]
  };

  constructor(private _http: HttpClient) {
    this.dataStore = {
      users: []
    };
    this._users = new BehaviorSubject<User[]>([]);
  }

  get users(): Observable<User[]> {
    return this._users.asObservable();
  }

  loadAll(): Observable<User[]> {
    const url = 'https://angular-material-api.azurewebsites.net/users';

    let users = this._http.get<User[]>(url);
    console.log("SERVICE DATA", users);


    return users;
    /* return this._http.get<User[]>(url).subscribe(data => {
      this.dataStore.users = data;
      this._users.next(Object.assign({}, this.dataStore).users);
    }, error => {
      console.error("Error xxx", error);
    }); */
  }
}
