import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LayoutsModule } from './presentation/layouts/layouts.module';
import { StoreModule } from '@ngrx/store';
import { appEffects, appReducers } from './domain/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    LayoutsModule,
    // reducers
    StoreModule.forRoot(appReducers),
    // effects
    EffectsModule.forRoot(appEffects),
    // devTools
    StoreDevtoolsModule.instrument({
      maxAge: 25 // ultimos 25 estados
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
