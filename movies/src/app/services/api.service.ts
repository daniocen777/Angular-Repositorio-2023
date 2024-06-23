import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, catchError, throwError } from 'rxjs';
import { ApiNameSpace } from '../utils/api.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService<T> {

  constructor(private _http: HttpClient) { }

  // Servicios generales
  postService(request: ApiNameSpace.Params): Observable<T> {
    const headers = new HttpHeaders({
      accept: 'application/json'
    });

    const { url, params, body } = request;
    const options = {
      headers,
      params
    }

    return this._http.post<T>(url, body, options).pipe(map(res => res), catchError(this._handleError));
  }

  getService(request: ApiNameSpace.Params): Observable<T> {
    const headers = new HttpHeaders({
      accept: 'application/json'
    });

    const { url, params } = request;
    const options = {
      headers,
      params
    }

    return this._http.get<T>(url, options).pipe(map(res => res), catchError(this._handleError));
  }

  private _handleError(err: HttpErrorResponse) {
    console.error(err.error);
    return throwError(() => err);
  }
}
