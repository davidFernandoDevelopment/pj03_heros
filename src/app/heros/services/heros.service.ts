import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IHero } from '../interfaces/IHeros';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HerosService {

  private _baseURL: string = environment.baseURL;

  constructor(
    private _httpClient: HttpClient
  ) { }

  getHeros(): Observable<IHero[]> {
    return this._httpClient.get<IHero[]>(`${this._baseURL}/heroes`);
  }

  getHeroById(id: string): Observable<IHero> {
    return this._httpClient.get<IHero>(`${this._baseURL}/heroes/${id}`);
  }

  getSuggestions(txt: string): Observable<IHero[]> {
    return this._httpClient.get<IHero[]>(`${this._baseURL}/heroes?q=${txt}&_limit=6`);
  }
}
