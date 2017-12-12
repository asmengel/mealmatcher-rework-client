
import { AppErrorHandler } from './common/app-error-handler';
import { ResultsService } from './services/results.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ResultsComponent } from './results/results.component';
import { DetailedresultComponent } from './detailedresult/detailedresult.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    NavbarComponent,
    HomepageComponent,
    NotfoundComponent,
    ResultsComponent,
    DetailedresultComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:'login',
        component: LoginComponent
      },
      {
        path:'signup',
        component: SignUpComponent
      },
      {
        path:'profile',
        component: ProfileComponent
      },
      {
        path:'newsearch',
        component: HomepageComponent
      },
      {
        path:'searchresults/:id',
        component: DetailedresultComponent
      },
      {
        path:'searchresults',
        component: ResultsComponent
      },
      {
        path:'',
        component: HomepageComponent,
        pathMatch: 'full'
      },
      {
        path: ':route',
        component: NotfoundComponent
      }


    ])
    
  ],
  providers: [
    ResultsService,
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
