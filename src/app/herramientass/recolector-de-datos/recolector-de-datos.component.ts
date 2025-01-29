import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recolector-de-datos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recolector-de-datos.component.html',
  styleUrls: ['./recolector-de-datos.component.css'],
})
export class RecolectorDeDatosComponent {
  @Output() onCalcular: EventEmitter<Muestra[]> = new EventEmitter();

  private _cantidadDeMuestras: number = 0;
  @Input()
  set cantidadDeMuestras(value: number) {
    this._cantidadDeMuestras = value;
    this.updateCollections();
  }
  get cantidadDeMuestras(): number {
    return this._cantidadDeMuestras;
  }

  muestras: Muestra[] = [];
  datosManuales: { [key: number]: string } = {}; // Almacena datos manuales por colección
  modoIngresoManual: { [key: number]: boolean } = {}; // Controla el modo de ingreso manual

  updateCollections(): void {
    this.muestras = Array.from({ length: this.cantidadDeMuestras }, (_, i) => ({
      id: i + 1,
      data: this.muestras[i]?.data || [],
    }));
  }

  importarDesdeCSV(collectionId: number): void {
    // Simulación de importación desde CSV
    alert(`Importando datos desde CSV para la colección ${collectionId}`);
  }

  importarDesdeAPI(collectionId: number): void {
    // Simulación de importación desde API
    alert(`Importando datos desde API para la colección ${collectionId}`);
  }

  ingresarManual(collectionId: number): void {
    this.modoIngresoManual[collectionId] = true;
  }

  guardarDatosManuales(collectionId: number): void {
    const datos = this.datosManuales[collectionId]
      .split(',')
      .map((d) => parseFloat(d.trim()))
      .filter((d) => !isNaN(d));

    const collection = this.muestras.find((c) => c.id === collectionId);
    if (collection) {
      collection.data = datos;
      this.modoIngresoManual[collectionId] = false; // Oculta el área de ingreso manual
    }
  }

  removeData(collectionId: number, index: number): void {
    const collection = this.muestras.find((c) => c.id === collectionId);
    collection?.data.splice(index, 1);
  }

  calcular(): void {
    this.onCalcular.emit(this.muestras); // Emite todas las muestras al componente padre
  }
}

export interface Muestra {
  id: number;
  data: number[];
}