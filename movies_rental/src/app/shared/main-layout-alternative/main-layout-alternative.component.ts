import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-main-layout-alternative',
  templateUrl: './main-layout-alternative.component.html',
  styleUrls: ['./main-layout-alternative.component.scss']
})
export class MainLayoutAlternativeComponent implements OnInit {
  isScreenSmall: boolean = false;
  @Input() title!: string;

  constructor(private _breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this._breakpointObserver.observe([`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`])
      .subscribe((state: BreakpointState) => {
        this.isScreenSmall = state.matches;
      });
  }

}
