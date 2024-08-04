import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, mergeMap, Observable, of } from 'rxjs';

export interface BaseEntity {
  id: number,
  name: string
}

export interface Country extends BaseEntity { }

export interface State extends BaseEntity { }

export interface CountryState {
  id: 1,
  idCountry: 1,
  states: State[]
}

export interface City {
  idState: number,
  cities: string[]
}

export interface StateCity {
  id: number,
  idCountry: number,
  idRootState: number,
  states: City[]
}

export interface CountryStateParams {
  state: State,
  country: Country
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private http = inject(HttpClient);

  constructor() { }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`api/countries`)
      .pipe(
        map((countries: Country[]) => countries),
        catchError((error) => {
          console.error("Error fetching countries", error);
          return of([]);
        })
      );
  }

  getStatesByCountry(idCountry: number): Observable<State[]> {
    return this.http.get<CountryState>(`api/states/${idCountry}`)
      .pipe(
        map((res: CountryState) => res.states),
        catchError((error) => {
          console.error("Error fetching states", error);
          return of([]);
        })
      );
  }

  getCitiesByState(params: CountryStateParams): Observable<string[]> {
    return this.http.get<StateCity>(`api/cities/${params.country.id}`)
      .pipe(
        mergeMap((res: StateCity) => this.findMatchingCities(res, params.state.id)),
        catchError((error) => {
          console.error("Error fetching cities", error);
          return of([]);
        })
      );
  }

  private findMatchingCities(res: StateCity, idState: number): Observable<string[]> {
    const matchingCity = res.states.find((city: City) => city.idState === idState);

    return !matchingCity ? of([]) : of(matchingCity.cities);
  }
}
