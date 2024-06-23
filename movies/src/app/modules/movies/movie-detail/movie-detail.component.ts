import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';
import { MovieDetail } from '../models/movie-detail.model';
import { ApiNameSpace } from 'src/app/utils/api.model';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie!: MovieDetail;
  imagePath: string = environment.imagePath;

  constructor(
    private readonly _apiService: ApiService<any>,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router) { }

  ngOnInit(): void {
    // ActivatedRoute para obtener parametros de la ruta
    this._activatedRoute.params.subscribe((val: any) => {
      this.getMovies(val.id);
    });
  }

  private getMovies(movieId: string) {
    const config: ApiNameSpace.Params = { url: `${environment.baseUrl}/movie/${movieId}`, params: { api_key: environment.apiKey } };
    this._apiService.getService(config).subscribe((response: MovieDetail) => {
      // console.log(`Response => ${response}`);
      this.movie = response;
      console.log(this.movie);
    })
  }

  goBack(): void {
    this._router.navigate(['/popular']);
  }
}
