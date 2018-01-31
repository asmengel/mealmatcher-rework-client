import { ResultsService } from './../services/results.service';
import { AuthService } from './../services/auth.service';
import { HttpModule } from '@angular/http';
import { MockActivatedRoute } from './../../mocks/activated-route';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { ResultsComponent } from './results.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs/Observable';

describe('ResultsComponent', () => {
  let component: ResultsComponent;
  //let fixture: ComponentFixture<ResultsComponent>;
  let activeRoute: MockActivatedRoute;


  beforeEach(() => {
    activeRoute = new MockActivatedRoute();
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, RouterTestingModule],
      declarations: [ResultsComponent],
      providers: [
        { provide: ActivatedRoute, useValue: activeRoute },
        AuthService,
        ResultsService
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  const createComponent = () => {
    const fixture = TestBed.createComponent(ResultsComponent);
    component = fixture.componentInstance;
  }

  it('should create', () => {
    activeRoute.testParams = {
      results: JSON.stringify({
        restaurant: {
          name: 'Joes taco Truck'
        },
        cuisines: 'bar food',
        location: {
          address: '123 Easy Street Orlando, FL 32765'
        },
        user_rating: {
          aggregate_rating: 5
        }
      }
      )
    }
    createComponent();
    expect(component).toBeTruthy();
  });
});
