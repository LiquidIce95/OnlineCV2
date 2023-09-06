import { TestBed } from '@angular/core/testing';

import { ImagePreloadService } from '../services/image-preload-service.service';

describe('ImagePreloadServiceService', () => {
  let service: ImagePreloadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagePreloadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
