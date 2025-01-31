import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DataContainerComponent } from '../../herramientass/data-container/data-container.component';
import { DataSetsService } from '../../services/data-sets.service';

@Component({
  selector: 'app-calculadora',
  standalone: true, // Habilitar el uso de imports
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    DataContainerComponent
  ],
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  activeTab: string = 'medidas_descriptivas';

  // Datos para cada pestaña (arreglos unidimensionales y bidimensionales)
  dataSets: { [key: string]: string[] | string[][] } = {
    medidas_descriptivas: ['1', '2', '3'],
    medidas_asociativas: [['1', '2', '3'], ['4', '5', '6']],
  };

  // Títulos dinámicos
  titles: { [key: string]: string } = {
    medidas_descriptivas: 'Set de datos para Medidas Descriptivas',
    medidas_asociativas: 'Set de datos para Medidas Asociativas',
  };

  constructor(private dataSetService:DataSetsService) {

  }

  changeTab(tab: string) {
    this.activeTab = tab;
    this.dataSetService.setCurrentTab(tab);
    console.log(`Changing tab to: ${tab}`);
  }
}
