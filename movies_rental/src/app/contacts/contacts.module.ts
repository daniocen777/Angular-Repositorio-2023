import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { MainComponent } from './pages/main/main.component';
import { ListComponent } from './pages/list/list.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    MainComponent,
    ListComponent,
    ToolbarComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    MaterialModule
  ]
})
export class ContactsModule { }
