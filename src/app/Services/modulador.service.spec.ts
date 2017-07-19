import { TestBed, inject } from '@angular/core/testing';

import { ModuladorService } from './modulador.service';

describe('ModuladorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModuladorService]
    });
  });

  it('should be created', inject([ModuladorService], (service: ModuladorService) => {
    expect(service).toBeTruthy();
  }));
});
