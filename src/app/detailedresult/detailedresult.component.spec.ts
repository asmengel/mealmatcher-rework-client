import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedresultComponent } from './detailedresult.component';

describe('DetailedresultComponent', () => {
  let component: DetailedresultComponent;
  let fixture: ComponentFixture<DetailedresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
