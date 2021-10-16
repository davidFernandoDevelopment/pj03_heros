import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IAuth } from '../interfaces/IAuth.interface';

import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _baseURL: string = environment.baseURL;
  private _auth: IAuth | undefined;

  get auth() {
    return { ...this._auth };
  }

  constructor(
    private _httpClient: HttpClient
  ) { }

  login(): Observable<IAuth> {
    return this._httpClient
      .get<IAuth>(`${this._baseURL}/usuarios/1`)
      .pipe(
        tap(resp => this._auth = resp),
        tap(resp => localStorage.setItem('auth', resp.id)));
  }
  logout() {
    this._auth = undefined;
  }
  verifyAuth(): Observable<boolean> {
    if (!localStorage.getItem('auth')) {
      return of(false);
    }

    return this._httpClient
      .get<IAuth>(`${this._baseURL}/usuarios/1`)
      .pipe(
        map(auth => {
          this._auth = auth;
          console.log("map: ", auth);
          return true;
        })
      );
  }
}
