import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { IAuth } from '../../interfaces/IAuth.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  constructor(
    private _router: Router,
    private _authService: AuthService
  ) { }

  login() {

    this._authService
      .login()
      .subscribe(resp => {
        console.log(resp);
        if (resp.id) {
          this._router.navigate(['./hero']);
        }
      });
  }

  loginWithout() {
    this._authService.logout();
    this._router.navigate(['./hero']);
  }
}
