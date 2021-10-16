import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IHero } from '../../interfaces/IHeros';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styles: []
})
export class ConfirmComponent implements OnInit {

  constructor(
    private _dialogRef: MatDialogRef<ConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IHero
  ) { }

  ngOnInit(): void {
  }
  borrar() {
    this._dialogRef.close(true);
  }

  cerrar() {
    this._dialogRef.close(false);
  }
}
