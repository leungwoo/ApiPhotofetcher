import { TestBed } from '@angular/core/testing';

import { FetchphotoService } from './fetchphoto.service';

describe('FetchphotoService', () => {
  let service: FetchphotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchphotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
