import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedidasAsociativasComponent } from './medidas-asociativas.component';

describe('MedidasAsociativasComponent', () => {
  let component: MedidasAsociativasComponent;
  let fixture: ComponentFixture<MedidasAsociativasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedidasAsociativasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedidasAsociativasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
