import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private usersService: UsersService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.usersService.isUserLogged()) return true;
    else{
      this.router.navigate(["login"])
      return false;
    }
  }


  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.usersService.isUserLogged()) return true;
    else{
      this.router.navigate(["login"])
      return false;
    }
  }
}
