import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [MainLayoutComponent]
})
export class SharedModule { }
