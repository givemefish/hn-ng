import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  sidenavMode: string;
  isSidenavFixedInViewport: boolean;
  isSidenavOpened: boolean;
  isSidenavCloseDisable: boolean;

  isWebOrTablet$: Observable<boolean>;

  ngOnInit(): void {
    this.isWebOrTablet$ = this.breakpointObserver
      .observe([Breakpoints.Web, Breakpoints.Tablet])
      .pipe(map(bp => bp.matches));
  }

  constructor(private breakpointObserver: BreakpointObserver) {}
}
