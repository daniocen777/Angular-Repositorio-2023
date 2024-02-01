import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movies';

  constructor(private _apiService: ApiService<any>) {

    const config = { url: `${environment.baseUrl}${environment.tokenNew}`, params: { api_key: environment.apiKey } }
    this._apiService.getService(config).subscribe(response => {
      const { request_token } = response;
      sessionStorage.setItem('requestToken', request_token);
    });
  }
}
