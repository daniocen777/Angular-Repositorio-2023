import { Injectable } from '@angular/core';
import { EMPTY, Observable, of } from 'rxjs';
import { User } from '../interfaces/user';
import { users } from 'src/app/shared/mock_data/user-data';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  search$(user: string): Observable<User> {
    const found = users.find((item: User) => item.name === user);
    return found ? of(found) : EMPTY
  }
}
