import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnicasDeConteoComponent } from './tecnicas-de-conteo.component';

describe('TecnicasDeConteoComponent', () => {
  let component: TecnicasDeConteoComponent;
  let fixture: ComponentFixture<TecnicasDeConteoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TecnicasDeConteoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TecnicasDeConteoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
