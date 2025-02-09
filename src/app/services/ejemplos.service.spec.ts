import { TestBed } from '@angular/core/testing';

import { EjemplosService } from './ejemplos.service';

describe('EjemplosService', () => {
  let service: EjemplosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EjemplosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
