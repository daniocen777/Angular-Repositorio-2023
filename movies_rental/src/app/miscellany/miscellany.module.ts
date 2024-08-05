import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiscellanyRoutingModule } from './miscellany-routing.module';
import { DependentSelectorsComponent } from './pages/dependent-selectors/dependent-selectors.component';
import { MainComponent } from './pages/main/main.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RxjsRickmortyComponent } from './pages/rxjs-rickmorty/rxjs-rickmorty.component';

@NgModule({
  declarations: [
    DependentSelectorsComponent,
    MainComponent,
    RxjsRickmortyComponent
  ],
  imports: [
    CommonModule,
    MiscellanyRoutingModule,
    MaterialModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class MiscellanyModule { }
