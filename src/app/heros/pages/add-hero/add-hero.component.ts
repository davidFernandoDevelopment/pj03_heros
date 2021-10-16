import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ConfirmComponent } from '../../components/confirm/confirm.component';

import { IHero, Publisher } from '../../interfaces/IHeros';
import { HerosService } from '../../services/heros.service';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 5px;
    }
  `]
})
export class AddHeroComponent implements OnInit {

  publishers = [
    {
      id: "DC Comics",
      desc: "DC - Comics"
    },
    {
      id: "Marvel Comics",
      desc: "Marvel - Comics"
    }
  ];
  hero: IHero = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: ''
  };

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _snackbar: MatSnackBar,
    private _dialog: MatDialog,
    private _router: Router,
    private _herosService: HerosService
  ) { }

  ngOnInit(): void {
    if (!this._router.url.includes('edit')) return;
    this._activatedRoute
      .params
      .pipe(
        switchMap(({ id }) => this._herosService.getHeroById(id))
      )
      .subscribe(hero => {
        this.hero = hero;
      });
  }

  save(): void {
    if (!this.hero.superhero.trim().length) return;
    if (this.hero.id) {
      this._herosService
        .editHero(this.hero)
        .subscribe(_ => this.showSnackbar('Registro actualizado'));
    } else {
      console.log(this.hero.id);
      this._herosService
        .addHero(this.hero)
        .subscribe(hero => {
          this.showSnackbar('Registro creado');
          this._router.navigate(['/hero/edit', hero.id]);
        });
    }
  }
  deleted(): void {
    const dialog = this._dialog
      .open(ConfirmComponent, {
        width: '250px',
        data: this.hero
      });
    dialog
      .afterClosed()
      .subscribe(result => {
        if (result) {
          this._herosService
            .deleteHero(this.hero.id!)
            .subscribe(_ => this._router.navigate(['/hero']));
        }
      });
  }
  showSnackbar(msj: string): void {
    this._snackbar
      .open(msj, 'Ok', {
        duration: 2000
      });
  }
}
