import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  standalone: true,
  imports: [HeaderComponent,RouterModule],
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.css'
})
export class LayoutPageComponent {

}
