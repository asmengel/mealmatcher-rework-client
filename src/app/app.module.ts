import { NewUserService } from './services/new-user.service';
import {MatSnackBarModule, MatOptionModule, MatSelectModule} from '@angular/material';
import { DataService } from './services/data.service';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { AppErrorHandler } from './common/app-error-handler';
import { ResultsService } from './services/results.service';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';


import { NgModule, ErrorHandler } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { HttpModule, Http, BaseRequestOptions } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';

import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ResultsComponent } from './results/results.component';
import { DetailedresultComponent } from './detailedresult/detailedresult.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { LogOutComponent } from './log-out/log-out.component';


export const routes = [
      
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'logout',
    component: LogOutComponent
  },
  {
    path:'signup',
    component: SignUpComponent
  },
  {
    path:'thank-you',
    component: ThankYouComponent
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
    path:'searchresults/:restaurantname/:id',
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


];


export function getAuthHttp(http) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'token'
  }), http);
}

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
    ProfileComponent,
    ThankYouComponent,
    LogOutComponent,
    
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDXs56qR2Ilt14AJl785F2FS8hPM2HDgm0'
    }),
    BrowserModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    
    RouterModule.forRoot(routes)
    
  ],
  providers: [
    ResultsService,
    FormBuilder,
    AuthService,
    AuthGuard,
    AuthHttp,
    NewUserService,
    {
      provide: AuthHttp,
      useFactory: getAuthHttp,
      deps: [Http]
    },
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
