import { Component, Input, OnInit } from '@angular/core';
import { IHero } from '../../interfaces/IHeros';

@Component({
  selector: 'app-card-hero',
  templateUrl: './card-hero.component.html',
  styles: [
    `
      mat-card{
        margin-top: 20px;
      }
    `
  ]
})
export class CardHeroComponent implements OnInit {

  @Input() hero!: IHero;

  constructor(
  ) { }

  ngOnInit(): void {

  }

}
