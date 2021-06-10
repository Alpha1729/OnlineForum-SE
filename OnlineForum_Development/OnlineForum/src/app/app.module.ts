import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { COMPUserLoginComponent } from './comp-user-login/comp-user-login.component';
import { COMPUserAddpostComponent } from './comp-user-addpost/comp-user-addpost.component';
import { COMPUserDeletepostComponent } from './comp-user-deletepost/comp-user-deletepost.component';
import { COMPUserViewforumComponent } from './comp-user-viewforum/comp-user-viewforum.component';

@NgModule({
  declarations: [
    AppComponent,
    COMPUserLoginComponent,
    COMPUserAddpostComponent,
    COMPUserDeletepostComponent,
    COMPUserViewforumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
