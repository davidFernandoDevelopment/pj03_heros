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

  addHero(hero: IHero): Observable<IHero> {
    return this._httpClient.post<IHero>(`${this._baseURL}/heroes`, hero);
  }

  editHero(hero: IHero): Observable<IHero> {
    return this._httpClient.put<IHero>(`${this._baseURL}/heroes/${hero.id}`, hero);
  }

  deleteHero(id: string): Observable<any> {
    return this._httpClient.delete<any>(`${this._baseURL}/heroes/${id}`);
  }
}
