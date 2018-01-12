import { NewUserService } from './services/new-user.service';
import {MatSnackBarModule} from '@angular/material';
import { DataService } from './services/data.service';
//import { AdminAuthGuard } from './services/admin-auth-guard.service';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
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
import { HttpModule, Http, BaseRequestOptions } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
    LogOutComponent
  ],
  imports: [
    BrowserModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    
    RouterModule.forRoot([
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


    ])
    
  ],
  providers: [
    ResultsService,
    
    AuthService,
    AuthGuard,
    //AdminAuthGuard,
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
