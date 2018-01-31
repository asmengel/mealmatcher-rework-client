import { AuthService } from './../services/auth.service';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { RouterTestingModule } from '@angular/router/testing';
import { MockActivatedRoute } from './../../mocks/activated-route';
import { ResultsService } from './../services/results.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomepageComponent } from './homepage.component';
import { HttpModule } from '@angular/http';
import {ActivatedRoute} from '@angular/router';

import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';


describe('HomepageComponent', () => {
  let component: HomepageComponent;

  let activeRoute: MockActivatedRoute;

  beforeEach(() => {
    activeRoute = new MockActivatedRoute();
  })
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, RouterTestingModule],
      declarations: [ HomepageComponent ],
      providers: [ 
        {provide: ActivatedRoute, useValue: activeRoute},
        ResultsService,
        AuthService,
        FormBuilder],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  const createComponent = () => {
    const fixture = TestBed.createComponent(HomepageComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
  }

  it('should create', () => {
    createComponent();
    expect(component).toBeTruthy();
  });
});
