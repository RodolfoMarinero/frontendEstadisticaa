import { TestBed } from '@angular/core/testing';

import { CalculadorService } from './calculador.service';

describe('CalculadorService', () => {
  let service: CalculadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
