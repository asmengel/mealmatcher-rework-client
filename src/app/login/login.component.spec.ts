import { MatSnackBar, MatSnackBarModule } from '@angular/material';
import { MockActivatedRoute } from './../../mocks/activated-route';
import { AuthService } from './../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { LoginComponent } from './login.component';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let activeRoute: MockActivatedRoute;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, FormsModule, RouterTestingModule, MatSnackBarModule],
      declarations: [LoginComponent],
      providers: [
        { provide: ActivatedRoute, useValue: activeRoute },
        AuthService,

      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    activeRoute = new MockActivatedRoute();

  });
  const createComponent = () => {
    const fixture = TestBed.createComponent(LoginComponent);
    console.log('inbetween create component pieces')
    component = fixture.componentInstance;

  }

  it('should create', () => {

    createComponent();

    expect(component).toBeTruthy();

  });
});
