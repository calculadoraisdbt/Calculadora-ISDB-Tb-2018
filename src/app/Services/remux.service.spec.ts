import { TestBed, inject } from '@angular/core/testing';

import { RemuxService } from './remux.service';

describe('RemuxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RemuxService]
    });
  });

  it('should be created', inject([RemuxService], (service: RemuxService) => {
    expect(service).toBeTruthy();
  }));
});
