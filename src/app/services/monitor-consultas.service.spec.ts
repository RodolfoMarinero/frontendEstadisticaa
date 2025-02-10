import { TestBed } from '@angular/core/testing';

import { MonitorConsultasService } from './monitor-consultas.service';

describe('MonitorConsultasService', () => {
  let service: MonitorConsultasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonitorConsultasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
