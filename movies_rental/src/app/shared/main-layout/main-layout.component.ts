import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit, AfterViewInit {
  @Input() title: string = 'Movies Rental';
  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  constructor(private _observer: BreakpointObserver, private _changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this._observer.observe([`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`])
      .subscribe((res: any) => {
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
