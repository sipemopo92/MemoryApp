import { Component, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay, filter } from 'rxjs';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  public isScreenSmall!: boolean
  public user!: User

  constructor(private observer: BreakpointObserver, private router: Router, private userService: UsersService) { }

  ngOnInit() {
    this.user = this.userService.getUserLogged()!;
    this.observer.observe([Breakpoints.Small, Breakpoints.XSmall]).subscribe((state: BreakpointState) => {
      this.isScreenSmall = state.matches;
      // if (state.matches) {
      //   this.sidenav.mode = 'over';
      //   this.sidenav.close();
      // } else {
      //   this.sidenav.mode = 'side';
      //   this.sidenav.open();
      // }
    });

    this.router.events.subscribe(() => {
      if (this.sidenav.mode === 'over') {
        this.sidenav.close();
      }
    });
  }

  logout() {
    this.userService.logout()
    this.router.navigate(['login']);
  }

}
