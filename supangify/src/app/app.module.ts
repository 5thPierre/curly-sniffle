import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { AuthComponent } from './components/auth/auth.component';
import {ReactiveFormsModule} from "@angular/forms";
import { AccountComponent } from './components/account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
