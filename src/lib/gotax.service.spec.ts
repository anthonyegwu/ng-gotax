import { TestBed } from '@angular/core/testing';

import { GotaxService } from './gotax.service';

describe('GotaxService', () => {
  let service: GotaxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GotaxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
