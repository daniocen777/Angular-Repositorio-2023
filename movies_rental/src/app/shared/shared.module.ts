import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { MaterialModule } from '../material/material.module';
import { MainLayoutAlternativeComponent } from './main-layout-alternative/main-layout-alternative.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  declarations: [
    MainLayoutComponent,
    MainLayoutAlternativeComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [MainLayoutComponent, MainLayoutAlternativeComponent]
})
export class SharedModule { }
