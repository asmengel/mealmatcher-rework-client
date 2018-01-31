import { AuthService } from './../services/auth.service';
import { NewUserService } from './../services/new-user.service';
import { MockActivatedRoute } from './../../mocks/activated-route';

import { MatSnackBarModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SignUpComponent } from './sign-up.component';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  //let fixture: ComponentFixture<SignUpComponent>;
  let activeRoute: MockActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpModule, FormsModule, MatSnackBarModule],
      declarations: [ SignUpComponent ],
      providers: [
        {provide: ActivatedRoute, useValue: activeRoute},
        NewUserService, AuthService
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    activeRoute = new MockActivatedRoute();
    let token = true;
    
  });

  const createComponent = () => {
    const fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }

  it('should create', () => {
    createComponent();
    expect(component).toBeTruthy();
  });
});
