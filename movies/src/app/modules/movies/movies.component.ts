import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Movie, MovieRespoonse } from './models/movie.model';
import { Router } from '@angular/router';
import { BaseComponent } from '../shared/base/base.component';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent extends BaseComponent<MovieRespoonse> implements OnInit {
  movies: Movie[] = [];
  imagePath: string = environment.imagePath;

  constructor(private readonly _router: Router, protected _apiService: ApiService<MovieRespoonse>) {
    super(_apiService);
  }

  // 2:13
  override ngOnInit(): void {
    // const config = { url: `${environment.baseUrl}${environment.popularMovies}`, params: { api_key: environment.apiKey } }
    this.paramsConfig.url = `${environment.baseUrl}${environment.popularMovies}`;
    this.paramsConfig.params.api_key = { api_key: environment.apiKey };
    this.getRequest();
  }

  getDetail(id: number): void {
    this._router.navigate([`popular/detalle/${id}`]);
  }
}
