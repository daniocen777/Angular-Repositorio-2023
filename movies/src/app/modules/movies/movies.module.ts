import { NgModule } from '@angular/core';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
// Prime 1:53
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';

@NgModule({
    declarations: [
        MoviesComponent,
        MovieDetailComponent
    ],
    imports: [
        MoviesRoutingModule,
        CommonModule,
        CardModule,
        ButtonModule,
        TagModule,
    ]
})
export class MoviesModule { }
