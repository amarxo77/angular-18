import { TestBed } from '@angular/core/testing';

import { InvetmentService } from './investment.service';

describe('InvetmentService', () => {
  let service: InvetmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvetmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
