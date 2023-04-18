import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from "./app-routing/app-routing.module";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { NavigationComponent } from './Components/navigation/navigation.component';

import { CustomThemeModule } from "./custom-theme.module";
import { SignupComponent } from './Components/forms/signup/signup.component';
import { LoginComponent } from './Components/forms/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CustomThemeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
