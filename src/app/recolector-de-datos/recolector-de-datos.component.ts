import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recolector-de-datos',
  standalone: true,
  imports: [CommonModule, FormsModule], // Agrega los módulos necesarios
  templateUrl: './recolector-de-datos.component.html',
  styleUrls: ['./recolector-de-datos.component.css'], // Cambia 'styleUrl' por 'styleUrls'
})
export class RecolectorDeDatosComponent {
  // Usamos un setter para actualizar las muestras cuando cambia la cantidad
  private _cantidadDeMuestras: number = 0;
  @Output() onCalcular: EventEmitter<Muestra[]> = new EventEmitter();


  @Input()
  set cantidadDeMuestras(value: number) {
    this._cantidadDeMuestras = value;
    this.updateCollections(); // Llama al método cada vez que cambia la cantidad
  }

  get cantidadDeMuestras(): number {
    return this._cantidadDeMuestras;
  }

  muestras: Muestra[] = [];

  updateCollections(): void {
    this.muestras = Array.from({ length: this.cantidadDeMuestras }, (_, i) => ({
      id: i + 1,
      data: this.muestras[i]?.data || [], // Mantiene datos existentes si hay una reducción
    }));
  }

  addData(collectionId: number): void {
    const collection = this.muestras.find((c) => c.id === collectionId);
    collection?.data.push(0); // Agrega un nuevo dato vacío
  }

  removeData(collectionId: number, index: number): void {
    const collection = this.muestras.find((c) => c.id === collectionId);
    collection?.data.splice(index, 1); // Elimina el dato por índice
  }

  
  calcular(): void {
  console.log(this.muestras);
  alert('Se hizo la magia, chingao.');
  this.muestras=[{ id: 1, data: [1, 2, 3,5,6 ,3,1,5,7,9,521,14,18] }];
  this.onCalcular.emit(this.muestras); // Emite las muestras al componente padre
}

}
export interface Muestra { 
  id: number;
  data: number[];
};
