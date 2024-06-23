import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

const API_URL = environment.api_url;

// Cuando se haga una llamada http, colocarle la ruta base al URL
@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let finalRequest;
    const headers: any = {
      'Content-Type': 'application/json'
    };
    const token = localStorage.getItem('sales.token');
    if (token) {
      headers.Authorization = `Token ${token}`;
    }
    finalRequest = request.clone({
      url: API_URL,
      setHeaders: headers
    });

    return next.handle(finalRequest).pipe(
      catchError((err: any) => this._catchError(API_URL, request, err)),
      map((resp: any) => { return resp; })
    );
  }

  private _catchError(server: string, req: HttpRequest<any>, error: any): Observable<any> {
    console.error(error);
    return throwError(() => error);
  }
}
