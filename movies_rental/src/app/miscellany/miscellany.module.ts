import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiscellanyRoutingModule } from './miscellany-routing.module';
import { DependentSelectorsComponent } from './pages/dependent-selectors/dependent-selectors.component';
import { MainComponent } from './pages/main/main.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DependentSelectorsComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    MiscellanyRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class MiscellanyModule { }
