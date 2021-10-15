import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { IHero } from '../../interfaces/IHeros';
import { HerosService } from '../../services/heros.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: [
    `
      img {
        width: 100%;
        border-radius: 5px;
      }
    `
  ]
})
export class HeroComponent implements OnInit {

  hero !: IHero;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _herosService: HerosService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._activatedRoute
      .params
      .pipe(
        switchMap(({ id }) => this._herosService.getHeroById(id)),
      )
      .subscribe((res: IHero) => this.hero = res);
  }

  goBack() {
    this._router.navigate(['/hero/list']);
  }
}
