import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';


import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
