import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MainComponent } from './pages/main/main.component';
import { ListComponent } from './pages/list/list.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';


@NgModule({
  declarations: [
    MainComponent,
    ListComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class MovieModule { }
