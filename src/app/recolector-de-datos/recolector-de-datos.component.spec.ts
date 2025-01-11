import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecolectorDeDatosComponent } from './recolector-de-datos.component';

describe('RecolectorDeDatosComponent', () => {
  let component: RecolectorDeDatosComponent;
  let fixture: ComponentFixture<RecolectorDeDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecolectorDeDatosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecolectorDeDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
