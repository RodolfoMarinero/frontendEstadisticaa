import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-portada',
    imports: [
        RouterLink,
        RouterLinkActive,
        RouterOutlet
    ],
  templateUrl: './portada.component.html',
  styleUrl: './portada.component.css'
})
export class PortadaComponent {

}
