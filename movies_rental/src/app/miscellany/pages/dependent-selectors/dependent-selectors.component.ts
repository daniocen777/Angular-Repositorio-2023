import { Component, inject } from '@angular/core';
import { Country, CountryStateParams, DataService, State, StateCity } from '../../services/data.service';
import { FormControl } from '@angular/forms';
import { filter, of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-dependent-selectors',
  templateUrl: './dependent-selectors.component.html',
  styleUrls: ['./dependent-selectors.component.scss']
})
export class DependentSelectorsComponent {
  countryControl = new FormControl<Country | null>(null);
  stateControl = new FormControl<State | null>(null);
  cityControl = new FormControl<StateCity | null>(null);

  private dataSvc = inject(DataService);

  countries$ = this.dataSvc.getCountries();
  // Estados
  states$ = this.countryControl.valueChanges
    .pipe(
      filter((value): value is Country => value != null),
      switchMap((country: Country) => {
        this.stateControl.reset();
        this.cityControl.reset();
        if (!country) {
          return of([]);
        } else {
          return this.dataSvc.getStatesByCountry(country.id)
            .pipe(
              tap((states) => {
                if (states.length === 0) {
                  alert('No data found')
                }
              })
            );
        }
      })
    );

  // Ciudades
  cities$ = this.stateControl.valueChanges
    .pipe(
      filter((value): value is State => value != null),
      switchMap((state: State) => {
        this.cityControl.reset();
        if (!state) {
          return of([]);
        } else {
          const params: CountryStateParams = {
            state,
            country: this.countryControl.value as Country
          };
          return this.dataSvc.getCitiesByState(params)
            .pipe(
              tap((cities) => {
                if (cities.length === 0) {
                  alert('No data found')
                }
              })
            );
        }
      })
    );
}
