import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnicaDataContainerComponent } from './tecnica-data-container.component';

describe('TecnicaDataContainerComponent', () => {
  let component: TecnicaDataContainerComponent;
  let fixture: ComponentFixture<TecnicaDataContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TecnicaDataContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TecnicaDataContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
