import { CommonModule } from '@angular/common';
import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataSetsService } from '../../services/data-sets.service';
import { TabService } from '../../services/tab.service';
import { Muestra } from '../../interfaces/Muestra';

@Component({
  selector: 'app-recolector-de-datos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recolector-de-datos.component.html',
  styleUrls: ['./recolector-de-datos.component.css'],
})
export class RecolectorDeDatosComponent {
  @Input() titleLess: boolean = false;
  private _cantidadDeMuestrasNecesarias: number = 0;
  nuevo:boolean=false;
  constructor(private servicioDataSets : DataSetsService,private tabService:TabService) {
    this.tabService.currentTab$.subscribe((data) => {
      this._cantidadDeMuestrasNecesarias=data === 'medidas_asociativas' ? 2 : 1;
      console.log('Cantidad de muestras:', this._cantidadDeMuestrasNecesarias);
    });
  }
  muestras: Muestra[] = [];

  importarDesdeCSV(): void {
    // Simulación de importación desde CSV
    alert(`Importando datos desde CSV`);
    //this.servicioDataSets.addMuestra(this.muestras[0]);
  }

  importarDesdeAPI(): void {
    // Simulación de importación desde API
    alert(`Importando datos desde API`);
    //this.servicioDataSets.addMuestra(this.muestras[0]);
  }

  ingresarManual(): void {
    // Simulación de importación desde API
    alert(`Importando datos de manera manual`);
    //this.servicioDataSets.addMuestra(this.muestras[0]);
  }
  agregar():void{

  }
  nuevoSetDeDatos(){
    this.nuevo=true;
  }
  cancelar(){
    this.nuevo=false;
  }
}