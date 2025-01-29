import { Component } from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-portada',
    imports: [
      RouterModule
    ],
  templateUrl: './portada.component.html',
  styleUrl: './portada.component.css'
})
export class PortadaComponent {
  private router:Router=new Router();
  navegar(url: string) {
    this.router.navigate([url]);

  }
}
