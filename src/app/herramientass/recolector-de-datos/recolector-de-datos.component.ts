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
  datosManuales:number[]=[];
  datosDelApi:number[]=[];
  archivo:File|null=null;
  modoSeleccionado: 'csv' | 'api' | 'manual' | null = null
  nuevo:boolean=false;
  constructor(private servicioDataSets : DataSetsService) {
  }
  setModo(modo: 'csv' | 'api' | 'manual') {
    this.modoSeleccionado = modo;
    this.datosManuales = [];
    this.datosDelApi = [];
    if (modo !== 'csv') {
      this.archivo = null;
    }
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) {
      return;
    }
    const file = input.files[0];
    console.log('Archivo seleccionado:', file);
    this.setModo('csv');
    this.archivo=file;
  }
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
  cambiarFormaDeAgregar(){
    this.modoSeleccionado=null;
  }
  deshabilitarAgregar(){
    if (this.modoSeleccionado === 'csv') {
      return !this.archivo;
    }
    if (this.modoSeleccionado === 'api' || this.modoSeleccionado === 'manual') {
      return this.datosManuales.length === 0;
    }
    return true;
  }
  agregar():void{

  }
  nuevoSetDeDatos(){
    this.nuevo=true;
  }
  cancelar(){
    this.cambiarFormaDeAgregar();
    this.nuevo=false;
  }
  descargarArchivo() {
    if (!this.archivo) {
      alert('No hay archivo para descargar');
      return;
    }

    const url = window.URL.createObjectURL(this.archivo);
    const a = document.createElement('a');
    a.href = url;
    a.download = this.archivo.name;
    a.click();
    window.URL.revokeObjectURL(url);
  }
}