import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-data-container',
  imports: [],
  templateUrl: './data-container.component.html',
  styleUrl: './data-container.component.css'
})
export class DataContainerComponent {
  @Input() title: string = '';
  @Input() data: string[] = [];
}
