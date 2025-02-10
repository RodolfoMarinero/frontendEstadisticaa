import { Component, ViewChild } from '@angular/core';
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
  defaultItems: number = 3;
  expandedSet: Set<number> = new Set<number>();
  @ViewChild(RecolectorDeDatosComponent) recolectorDeDatosComponent!: RecolectorDeDatosComponent;
  constructor(
    private dataSetsService: DataSetsService,
  ) {
    this.dataSetsService.dataSets$.subscribe((data) => {
      this.hasData = this.dataSetsService.getNumeroDeMuestras() !== 0;
      this.data = data;
      console.log('DataContainerComponent received data:', data);
    });
  }

  toggleExpand(muestra: Muestra): void {
    if (this.expandedSet.has(muestra.id)) {
      this.expandedSet.delete(muestra.id);
    } else {
      this.expandedSet.add(muestra.id);
    }
  }
  isExpanded(muestra: Muestra): boolean {
    return this.expandedSet.has(muestra.id);
  }

  editDataSet(muestra: Muestra): void {
    console.log('Editando muestra: ' + muestra.nombre);
    this.recolectorDeDatosComponent.editarMuestra(muestra);
  }

  deleteDataSet(muestra: Muestra): void {
    this.dataSetsService.deleteMuestra(muestra.id);
  }
  expandir(muestra: Muestra): void {
    if (!this.isExpanded(muestra)) {
      this.expandedSet.add(muestra.id);
    }
  }
  descargarArchivo(muestra:Muestra) {
    if (!muestra.file) {
      alert('No hay archivo para descargar');
      return;
    }
    const url = window.URL.createObjectURL(muestra.file);
    const a = document.createElement('a');
    a.href = url;
    a.download = muestra.file.name;
    a.click();
    window.URL.revokeObjectURL(url);
  }
}
