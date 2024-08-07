import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CreateComponent } from './pages/create/create.component';
import { MainComponent } from './pages/main/main.component';
import { ListComponent } from './pages/list/list.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from "../shared/shared.module";


@NgModule({
  declarations: [
    CreateComponent,
    MainComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MaterialModule,
    SharedModule
]
})
export class CustomerModule { }
