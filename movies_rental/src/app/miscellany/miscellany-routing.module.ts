import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { DependentSelectorsComponent } from './pages/dependent-selectors/dependent-selectors.component';
import { RxjsRickmortyComponent } from './pages/rxjs-rickmorty/rxjs-rickmorty.component';
import { RxjsMapOperatorComponent } from './pages/rxjs-map-operator/rxjs-map-operator.component';
import { RxjsSwitchmapOperatorComponent } from './pages/rxjs-switchmap-operator/rxjs-switchmap-operator.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'switchmap' },
      { path: 'selectors', component: DependentSelectorsComponent },
      { path: 'rickmorty', component: RxjsRickmortyComponent },
      { path: 'map', component: RxjsMapOperatorComponent },
      { path: 'switchmap', component: RxjsSwitchmapOperatorComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiscellanyRoutingModule { }
