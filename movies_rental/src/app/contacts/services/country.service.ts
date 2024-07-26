import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../models/country';

// https://countryapi.io/api/all?apikey=

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private _http: HttpClient) { }

  getCountries(): Observable<Map<string, Country>> {
    return this._http.get<Map<string, Country>>('https://countryapi.io/api/all?apikey=');
  }
}
