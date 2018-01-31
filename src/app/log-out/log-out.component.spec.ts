import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { AuthService } from './../services/auth.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogOutComponent } from './log-out.component';

describe('LogOutComponent', () => {
  let component: LogOutComponent;
  let fixture: ComponentFixture<LogOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, RouterTestingModule],
      declarations: [LogOutComponent],
      providers: [AuthService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
