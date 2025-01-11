import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedidasDescriptivasComponent } from './medidas-descriptivas.component';

describe('MedidasDescriptivasComponent', () => {
  let component: MedidasDescriptivasComponent;
  let fixture: ComponentFixture<MedidasDescriptivasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedidasDescriptivasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedidasDescriptivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
