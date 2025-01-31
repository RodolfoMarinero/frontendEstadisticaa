import { CommonModule } from '@angular/common';
import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataSetsService } from '../../services/data-sets.service';

@Component({
  selector: 'app-recolector-de-datos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recolector-de-datos.component.html',
  styleUrls: ['./recolector-de-datos.component.css'],
})
export class RecolectorDeDatosComponent {
  @Input() titleLess: boolean = false;
  private _cantidadDeMuestras: number = 0;
  constructor(private servicioDataSets : DataSetsService) {
    this.servicioDataSets.currentTab$.subscribe((data) => {
      this._cantidadDeMuestras=data === 'medidas_asociativas' ? 2 : 1;
      console.log('Cantidad de muestras:', this._cantidadDeMuestras);
      
      this.updateCollections();
    });
  }

  muestras: Muestra[] = [];
  datosManuales: { [key: number]: string } = {}; // Almacena datos manuales por colección
  modoIngresoManual: { [key: number]: boolean } = {}; // Controla el modo de ingreso manual

  updateCollections(): void {
    this.muestras = [];
    let i ;
    for(i=0; i < this._cantidadDeMuestras; i++) {
      console.log('i:', i);
      if(i==0){
        this.muestras.push({ id: `primer`, data: [] });
      }else{
        this.muestras.push({ id: `segundo`, data: [] });
      }
    } 
  }

  importarDesdeCSV(collectionId: string): void {
    // Simulación de importación desde CSV
    alert(`Importando datos desde CSV para la ${collectionId} colección`);
    this.servicioDataSets.setDataSets(this.muestras);
  }

  importarDesdeAPI(collectionId: string): void {
    // Simulación de importación desde API
    alert(`Importando datos desde API para la ${collectionId} colección`);
    this.servicioDataSets.setDataSets(this.muestras);
  }

  ingresarManual(collectionId: string): void {
    // Simulación de importación desde API
    alert(`Importando datos de manera manual para la ${collectionId} colección`);
    this.servicioDataSets.setDataSets(this.muestras);
  }


  removeData(collectionId: string, index: number): void {
    const collection = this.muestras.find((c) => c.id === collectionId);
    collection?.data.splice(index, 1);
  }

  calcular(): void {
    alert('Calculando...'+this.muestras);
  }
}

export interface Muestra {
  id: string;
  data: number[];
}