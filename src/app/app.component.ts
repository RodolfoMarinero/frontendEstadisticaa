import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutPageComponent } from './layout-page/layout-page.component';

@Component({
  selector: 'app-root',
  imports: [LayoutPageComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontendEstadistica';

}
