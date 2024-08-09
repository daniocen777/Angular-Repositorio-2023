import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'customers',
    loadChildren: () => import('./customer/customer.module').then((m) => m.CustomerModule),
  },
  {
    path: 'movies',
    loadChildren: () => import('./movie/movie.module').then((m) => m.MovieModule),
  },
  {
    path: 'contacts',
    loadChildren: () => import('./contacts/contacts.module').then((m) => m.ContactsModule),
  },
  {
    path: 'miscellany',
    loadChildren: () => import('./miscellany/miscellany.module').then((m) => m.MiscellanyModule),
  },
  { path: '**', redirectTo: 'movies' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
