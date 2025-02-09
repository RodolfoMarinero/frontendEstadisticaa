import { Component } from '@angular/core';
import { DataSetsService } from '../../services/data-sets.service';
import { RecolectorDeDatosComponent } from '../recolector-de-datos/recolector-de-datos.component';
import { TabService } from '../../services/tab.service';
import { Muestra } from '../../interfaces/Muestra';

@Component({
  selector: 'app-data-container',
  templateUrl: './data-container.component.html',
  styleUrls: ['./data-container.component.css'],
  standalone: true,
  imports: [RecolectorDeDatosComponent]
})
export class DataContainerComponent {
  title: string = '';
  data: Muestra[] = [];
  hasData: boolean = false;
  // Número de datos a mostrar por defecto
  defaultItems: number = 3;
  // Para cada muestra (identificada por su id) se indica si está expandida
  expandedSet: Set<number> = new Set<number>();

  constructor(
    private dataSetsService: DataSetsService,
    private tab: TabService
  ) {
    this.dataSetsService.dataSets$.subscribe((data) => {
      this.hasData = this.dataSetsService.getNumeroDeMuestras() !== 0;
      this.data = data;
      console.log('DataContainerComponent received data:', data);
    });

    this.tab.currentTab$.subscribe((data) => {
      this.title = 'Datos para ' + data.replace(/_/g, ' ');
    });
  }

  // Método para alternar el estado expandido de una muestra
  toggleExpand(muestra: Muestra): void {
    if (this.expandedSet.has(muestra.id)) {
      this.expandedSet.delete(muestra.id);
    } else {
      this.expandedSet.add(muestra.id);
    }
  }

  // Devuelve true si la muestra está marcada como expandida
  isExpanded(muestra: Muestra): boolean {
    return this.expandedSet.has(muestra.id);
  }

  // Métodos para editar y eliminar (según tu lógica)
  editDataSet(muestra: Muestra): void {
    console.log('Editando muestra: ' + muestra.nombre);
  }

  deleteDataSet(muestra: Muestra): void {
    this.dataSetsService.deleteMuestra(muestra.id);
  }
  
  // Método para mostrar todos los datos en la muestra actual (alternativamente, se usa toggleExpand)
  expandir(muestra: Muestra): void {
    // Si no está expandida, la expandimos (se muestran todos los datos)
    if (!this.isExpanded(muestra)) {
      this.expandedSet.add(muestra.id);
    }
  }
}
