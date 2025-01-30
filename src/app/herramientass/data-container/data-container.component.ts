import { Component, Input, OnChanges } from '@angular/core';
import { DataSetsService } from '../../services/data-sets.service';

@Component({
  selector: 'app-data-container',
  templateUrl: './data-container.component.html',
  styleUrls: ['./data-container.component.css'],
})
export class DataContainerComponent implements OnChanges {
  title: string = '';
  data: string[] | string[][] = [];
  constructor(private dataSetsService:DataSetsService) {
    this.dataSetsService.dataSets$.subscribe((data) => {
      this.data = data;
      console.log('DataContainerComponent received data:', data);
    });
  }

  ngOnChanges() {
    console.log('DataContainerComponent updated:', this.title, this.data);
  }

  isAssociative(): boolean {
    return Array.isArray(this.data) && Array.isArray(this.data[0]);
  }
}
