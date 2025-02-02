import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../pantallas/header/header.component';

@Component({
  selector: 'app-layout-page',
  standalone: true,
  imports: [HeaderComponent,RouterModule],
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.css'
})
export class LayoutPageComponent {
  constructor() { }
}
