import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Character } from './character';
import { Episode } from './episode';

const endpoint = 'https://rickandmortyapi.com/api/';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor(private http: HttpClient) {}

  getCharacters(): Observable<any> {
    return this.http
      .get<Character>(endpoint + 'character')
      .pipe(catchError(this.handleError));
  }

  getCharacter(id: number): Observable<any> {
    return this.http
      .get<Character>(endpoint + 'character/' + id)
      .pipe(catchError(this.handleError));
  }

  getEpisode(id: number): Observable<any> {
    return this.http
      .get<Episode>(endpoint + 'episode/' + id)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
