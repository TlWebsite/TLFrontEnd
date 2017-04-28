import { TestBed, inject } from '@angular/core/testing';

import { TLImageGetService } from './tlimage-get.service';

describe('TLImageGetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TLImageGetService]
    });
  });

  it('should ...', inject([TLImageGetService], (service: TLImageGetService) => {
    expect(service).toBeTruthy();
  }));
});
