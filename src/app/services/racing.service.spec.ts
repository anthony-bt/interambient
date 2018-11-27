import { TestBed } from '@angular/core/testing';

import { RacingService } from './racing.service';

describe('RacingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RacingService = TestBed.get(RacingService);
    expect(service).toBeTruthy();
  });
});
