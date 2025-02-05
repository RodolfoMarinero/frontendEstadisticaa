import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorDeMuestrasComponent } from './selector-de-muestras.component';

describe('SelectorDeMuestrasComponent', () => {
  let component: SelectorDeMuestrasComponent;
  let fixture: ComponentFixture<SelectorDeMuestrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectorDeMuestrasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectorDeMuestrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
