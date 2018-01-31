import { MockActivatedRoute } from './../../mocks/activated-route';
import { HttpModule } from '@angular/http';
import { ResultsService } from './../services/results.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router/';
import { Observable } from 'rxjs/Observable';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DetailedresultComponent } from './detailedresult.component';

describe('DetailedresultComponent', () => {
  let component: DetailedresultComponent;

  let activeRoute: MockActivatedRoute;

  beforeEach(() => {
    activeRoute = new MockActivatedRoute();
  });
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpModule],
      providers: [
        { provide: ActivatedRoute, useValue: activeRoute },
        ResultsService],
      declarations: [DetailedresultComponent],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  const createComponent = () => {
    const fixture = TestBed.createComponent(DetailedresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }
  it('should create', () => {
    activeRoute.testParams = {
      restaurant: JSON.stringify({
        location: {
          latitude: 1,
          longitude: 2
        },
        user_rating: 5
      })
    }
    createComponent();
    expect(component).toBeTruthy();
  });
});
