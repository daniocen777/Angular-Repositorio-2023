import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { DependentSelectorsComponent } from './pages/dependent-selectors/dependent-selectors.component';
import { RxjsRickmortyComponent } from './pages/rxjs-rickmorty/rxjs-rickmorty.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'rickmorty' },
      { path: 'selectors', component: DependentSelectorsComponent },
      { path: 'rickmorty', component: RxjsRickmortyComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiscellanyRoutingModule { }
