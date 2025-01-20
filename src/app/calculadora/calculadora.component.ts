import {ChangeDetectorRef, Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {DataContainerComponent} from '../data-container/data-container.component';

@Component({
  selector: 'app-calculadora',
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    DataContainerComponent
  ],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {

  activeTab: string = 'medidas_descriptivas';

  // Datos para cada pestaña
  dataSets: { [key: string]: string[] } = {
    medidas_descriptivas: ['Elemento 1', 'Elemento 2', 'Elemento 3'],
    medidas_asociativas: ['Dato A1', 'Dato B1', 'Dato C1','Dato A2', 'Dato B2', 'Dato C2'],
    tecnicas_conteo: ['Técnica 1', 'Técnica 2', 'Técnica 3'],
  };

  titles: { [key: string]: string } = {
    medidas_descriptivas: 'Datos para Medidas Descriptivas',
    medidas_asociativas: 'Datos para Medidas Asociativas',
    tecnicas_conteo: 'Datos para Técnicas de Conteo',
  };

  constructor(private cdr: ChangeDetectorRef) {}

  changeTab(tab: string) {
    this.activeTab = tab;
    this.cdr.detectChanges(); // Fuerza la detección de cambios
    console.log(`Changing tab to: ${tab}`);
  }


}
