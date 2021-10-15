import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { IHero } from '../../interfaces/IHeros';
import { HerosService } from '../../services/heros.service';

@Component({
  selector: 'app-search-hero',
  templateUrl: './search-hero.component.html',
  styles: [
  ]
})
export class SearchHeroComponent implements OnInit {

  txt: string = '';
  heros: IHero[] = [];
  heroSelected: IHero | undefined;

  constructor(
    private _herosService: HerosService
  ) { }

  ngOnInit(): void {
  }
  searching() {
    this._herosService
      .getSuggestions(this.txt.trim())
      .subscribe(res => this.heros = res);
  }
  optSelected(e: MatAutocompleteSelectedEvent): void {
    if (e.option.value) {
      const hero: IHero = e.option.value;
      this.txt = hero.superhero;
      this._herosService
        .getHeroById(hero.id!)
        .subscribe(hero => this.heroSelected = hero);
    } else {
      this.heroSelected = undefined;
    }
  }
}
