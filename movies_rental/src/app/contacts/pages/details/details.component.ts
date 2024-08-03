import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { Country } from '../../models/country';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  country!: Country;
  countryObject?: Map<string, Country>;
  panelOpenState = false;
  translations!: string[];

  constructor(private _route: ActivatedRoute, private _countryService: CountryService) { }

  ngOnInit(): void {
    this.translations = ['Fra', 'Ita', 'Esp', 'Deu'];
    
    this._route.params.subscribe(params => {
      const name = params['name'];
      this._countryService.getCountryByName(name).subscribe((response: Map<string, Country>) => {
        this.countryObject = new Map(Object.entries(response));
        for (let item of this.countryObject.values()) {
          this.country = item as Country;
        }
      });
    });
  }

}
