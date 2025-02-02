import { Component, Input, OnChanges, AfterViewInit } from '@angular/core';
import { MathjaxService } from '../../services/mathjax.service';

@Component({
  selector: 'app-mathjax',
  template: `<span [innerHTML]="mathContent"></span>`,
  styleUrls: ['./mathjax.component.css'],
})
export class MathjaxComponent implements OnChanges, AfterViewInit {
  @Input() formula: string = '';
  mathContent: string = '';

  constructor(private mathjaxService: MathjaxService) {}

  ngOnChanges() {
    this.mathContent = `\\(${this.formula}\\)`;
    this.mathjaxService.renderMath();
  }

  ngAfterViewInit() {
    this.mathjaxService.renderMath();
  }
}
