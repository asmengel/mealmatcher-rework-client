import { HttpModule } from '@angular/http';
import { TestBed, inject } from '@angular/core/testing';

import { ResultsService } from './results.service';

describe('ResultsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [ResultsService]
    });
  });

  it('should be created', inject([ResultsService], (service: ResultsService) => {
    expect(service).toBeTruthy();
  }));
});
