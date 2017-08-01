import { TestBed, inject } from '@angular/core/testing';

import { CodificadorService } from './codificador.service';

describe('CodificadorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CodificadorService]
    });
  });

  it('should be created', inject([CodificadorService], (service: CodificadorService) => {
    expect(service).toBeTruthy();
  }));
});
