import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-data-container',
  templateUrl: './data-container.component.html',
  styleUrls: ['./data-container.component.css'],
})
export class DataContainerComponent implements OnChanges {
  @Input() title: string = '';
  @Input() data: string[] | string[][] = []; // Soporta arreglos bidimensionales

  ngOnChanges() {
    console.log('DataContainerComponent updated:', this.title, this.data);
  }

  isAssociative(): boolean {
    return Array.isArray(this.data) && Array.isArray(this.data[0]);
  }
}
