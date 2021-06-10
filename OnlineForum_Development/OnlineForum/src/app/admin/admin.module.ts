import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { COMPAdminLoginComponent } from './comp-admin-login/comp-admin-login.component';
import { COMPAdminViewforumComponent } from './comp-admin-viewforum/comp-admin-viewforum.component';
import { COMPAdminDeletepostComponent } from './comp-admin-deletepost/comp-admin-deletepost.component';


@NgModule({
  declarations: [
    AdminComponent,
    COMPAdminLoginComponent,
    COMPAdminViewforumComponent,
    COMPAdminDeletepostComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
