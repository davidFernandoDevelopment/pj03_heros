import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {


  constructor(
    private _authService: AuthService,
    private _router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    // if (this._authService.auth.id) {
    //   return true;
    // }
    // console.log("Bloqueado por el canactivate!!!");
    // return false;
    return this._authService.verifyAuth()
      .pipe(tap(isAuth => {
        if (!isAuth) {
          this._router.navigate(['./auth/login']);
        }
      }));

  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    // if (this._authService.auth.id) {
    //   return true;
    // }
    // console.log("Bloqueado por el canload!!!");
    // return false;
    return this._authService.verifyAuth()
      .pipe(tap(isAuth => {
        if (!isAuth) {
          this._router.navigate(['./auth/login']);
        }
      }));
  }
}
