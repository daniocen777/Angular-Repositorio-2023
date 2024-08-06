import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../interfaces/user';
import { users } from 'src/app/shared/mock_data/user-data';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUsers$(): Observable<User[]> {
    return of(users)
  }
}
