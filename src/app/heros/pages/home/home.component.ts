import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    .container {
      margin: 16px
    }
  `]
})
export class HomeComponent implements OnInit {

  get auth() {
    return this._authService.auth;
  }

  constructor(
    private _router: Router,
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
  }
  logout() {
    this._router.navigate(['./auth']);
  }
}
