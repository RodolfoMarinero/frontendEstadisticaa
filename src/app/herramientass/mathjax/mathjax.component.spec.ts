import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathjaxComponent } from './mathjax.component';

describe('MathjaxComponent', () => {
  let component: MathjaxComponent;
  let fixture: ComponentFixture<MathjaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MathjaxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MathjaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
