import { TestBed } from '@angular/core/testing';

import { VisibilityService } from './visibility-service.service';

describe('VisibilityServiceService', () => {
  let service: VisibilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisibilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
