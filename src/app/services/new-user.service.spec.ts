import { HttpModule } from '@angular/http';
import { TestBed, inject } from '@angular/core/testing';

import { NewUserService } from './new-user.service';

describe('NewUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [NewUserService]
    });
  });

  it('should be created', inject([NewUserService], (service: NewUserService) => {
    expect(service).toBeTruthy();
  }));
});
