import { TestBed } from '@angular/core/testing';

import { MuestraFileServiceService } from './muestra-file-service.service';

describe('MuestraFileServiceService', () => {
  let service: MuestraFileServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MuestraFileServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
