import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../models/country';

// https://countryapi.io/api/all?apikey=

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  queryParams: HttpParams = new HttpParams();


  constructor(private _http: HttpClient) {
    this.queryParams = this.queryParams.set('apikey', 'wIfwZiDE0rrBCtTXur9BcDA9lDvRQ4dWj3L3soJ4');
  }

  getCountries(): Observable<Map<string, Country>> {
    return this._http.get<Map<string, Country>>('https://countryapi.io/api/all', { params: this.queryParams });
  }

  getCountryByName(name: string): Observable<Map<string, Country>> {
    return this._http.get<Map<string, Country>>(`https://countryapi.io/api/name/${name}`, { params: this.queryParams });
  }
}
