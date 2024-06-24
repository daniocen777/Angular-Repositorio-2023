import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { SecurityLayoutComponent } from './layout/security-layout/security-layout.component';
import { RoleComponent } from './pages/role/role.component';
import { UserComponent } from './pages/user/user.component';


@NgModule({
  declarations: [
    SecurityLayoutComponent,
    RoleComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule
  ]
})
export class SecurityModule { }
