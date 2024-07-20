import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  constructor(private _observer: BreakpointObserver, private _changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this._observer.observe(['(max-width: 800px)']).subscribe((res: any) => {
      // console.log(res);
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
    // Cuando detecte el cambio
    this._changeDetector.detectChanges();
  }
}
