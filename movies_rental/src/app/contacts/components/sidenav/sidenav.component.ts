import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Country } from '../../models/country';
import { CountryService } from '../../services/country.service';
import { CountryObject } from '../../models/countryObject';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  isScreenSmall: boolean = false;

  // countries = new Map<string, Country>([]);
  myObject?: Map<string, Country>;

  countries: Country[] = [];

  constructor(private _breakpointObserver: BreakpointObserver,
    private _countryService: CountryService
  ) { }

  ngOnInit(): void {
    this._breakpointObserver.observe([`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`])
      .subscribe((state: BreakpointState) => {
        this.isScreenSmall = state.matches;
      });

    this._countryService.getCountries().subscribe((response: Map<string, Country>) => {
      this.myObject = new Map(Object.entries(response));
      // this.countries = this.myObject.values();
      for (let item of this.myObject.values()) {
        // console.log("ITEM", item);
        // this.countries.push(item);
        this.countries.push(item as Country);
      }
    });
  }

  /* ngAfterViewInit(): void {
    console.log("PAISES", this.countries);
  } */

    

}
