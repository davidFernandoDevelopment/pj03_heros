import { Component, OnInit } from '@angular/core';
import { HerosService } from '../../services/heros.service';
import { IHero } from '../../interfaces/IHeros';

@Component({
  selector: 'app-list-hero',
  templateUrl: './list-hero.component.html',
  styles: []
})
export class ListHeroComponent implements OnInit {

  heros: IHero[] = [];

  constructor(
    private _herosService: HerosService
  ) { }

  ngOnInit(): void {
    this._herosService
      .getHeros()
      .subscribe((res: IHero[]) => this.heros = res);
  }

}
