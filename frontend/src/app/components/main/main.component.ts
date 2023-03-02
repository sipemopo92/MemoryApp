import { Component, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay, filter } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  public isScreenSmall!: boolean

  constructor(private observer: BreakpointObserver, private router: Router) { }

  ngOnInit() {
    console.log(Breakpoints.Small)
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

}
