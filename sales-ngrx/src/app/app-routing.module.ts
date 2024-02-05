import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseAuthComponent } from './presentation/layouts/base-auth/base-auth.component';
import { BaseLoggedComponent } from './presentation/layouts/base-logged/base-logged.component';
import { LoggedGuard } from './core/guards/logged.guard';
import { UnloggedGuard } from './core/guards/unlogged.guard';

const routes: Routes = [
  {
    path: 'auth',
    component: BaseAuthComponent,
    canActivate: [UnloggedGuard],
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('./presentation/features/auth/login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'signup',
        loadChildren: () =>
          import('./presentation/features/auth/signup/signup.module').then(m => m.SignupModule)
      },
    ]
  },
  {
    path: '',
    component: BaseLoggedComponent,
    canActivate: [LoggedGuard],
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./presentation/features/home/home.module').then(m => m.HomeModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
