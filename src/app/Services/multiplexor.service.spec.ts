import { TestBed, inject } from '@angular/core/testing';

import { MultiplexorService } from './multiplexor.service';

describe('ModuladorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MultiplexorService]
    });
  });

  it('should be created', inject([MultiplexorService], (service: MultiplexorService) => {
    expect(service).toBeTruthy();
  }));
});
