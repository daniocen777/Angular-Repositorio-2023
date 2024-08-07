import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
// Agregar la api para el ejemmplo
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DbData } from 'src/assets/db.data';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    SharedModule,
    HttpClientModule,

    HttpClientInMemoryWebApiModule.forRoot(DbData)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
