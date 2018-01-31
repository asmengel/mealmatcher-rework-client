import { MockActivatedRoute } from './../../mocks/activated-route';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import { ThankYouComponent } from './thank-you.component';
import { ActivatedRoute } from '@angular/router';

describe('ThankYouComponent', () => {
  let component: ThankYouComponent;
  
  let activeRoute: MockActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, RouterTestingModule],
      declarations: [ ThankYouComponent ],
      providers: [
        {provide: ActivatedRoute, useValue: activeRoute}
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    activeRoute = new MockActivatedRoute();
    
  });

  const createComponent = () => {
    const fixture = TestBed.createComponent(ThankYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }
  it('should create', () => {
    createComponent();
    expect(component).toBeTruthy();
  });
});
