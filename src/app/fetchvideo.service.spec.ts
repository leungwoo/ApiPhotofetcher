import { TestBed } from '@angular/core/testing';

import { FetchvideoService } from './fetchvideo.service';

describe('FetchvideoService', () => {
  let service: FetchvideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchvideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
