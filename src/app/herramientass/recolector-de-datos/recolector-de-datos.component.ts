import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, input, Input, Output, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataSetsService } from '../../services/data-sets.service';
import { TabService } from '../../services/tab.service';
import { Muestra } from '../../interfaces/Muestra';
import { EjemplosService } from '../../services/ejemplos.service';

@Component({
  selector: 'app-recolector-de-datos',
  standalone: true,
  imports: [CommonModule, FormsModule,ReactiveFormsModule],
  templateUrl: './recolector-de-datos.component.html',
  styleUrls: ['./recolector-de-datos.component.css'],
})
export class RecolectorDeDatosComponent {
  @ViewChild('listaContainer') listaContainer!: ElementRef;
  datosManuales:number[]=[];
  datosDelApi:number[]=[];
  archivo:File|null=null;
  modoSeleccionado: 'csv' | 'api' | 'manual' | null = null
  nuevo:boolean=false;
  txtNuevoDato : FormControl = new FormControl();
  txtNombreMuestra : FormControl = new FormControl();
  constructor(private servicioDataSets : DataSetsService,private ejemplo:EjemplosService) {
    this.txtNuevoDato.addValidators([Validators.required, Validators.pattern("^[0-9]*$")]);
  }
  setModo(modo: 'csv' | 'api' | 'manual') {
    this.modoSeleccionado = modo;
    this.datosManuales = [];
    this.datosDelApi = [];
    if (modo !== 'csv') {
      this.archivo = null;
    }
    if(modo=='api'){
      this.importarDesdeAPI();
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
  importarDesdeAPI(): void {
    this.ejemplo.getDatosDeEjemplo().subscribe((data)=>{
      this.datosDelApi=data;
    }

    )
  }
  cambiarFormaDeAgregar(){
    this.modoSeleccionado=null;
  }
  deshabilitarAgregar(){
    if(this.txtNombreMuestra.value===""||this.txtNombreMuestra.value==null){
      return true;
    }
    if (this.modoSeleccionado === 'csv') {
      return !this.archivo;
    }
    if (this.modoSeleccionado === 'manual') {
      return this.datosManuales.length === 0;
    }
    if(this.modoSeleccionado === 'api'){
      return this.datosDelApi.length===0;
    }
    return true;
  }
  agregar():void{
    let muestra:Muestra;
    let id = this.servicioDataSets.siguienteIndice();
    switch(this.modoSeleccionado){
      case('api'):
        muestra={
          id:id,
          datos:this.datosDelApi,
          nombre:this.txtNombreMuestra.value
        }
        break;
      case('csv'):
        if(this.archivo){
          muestra={
            id:id,
            datos:[],
            nombre:this.txtNombreMuestra.value,
            file:this.archivo
          } 
        }else{
          return;
        }
        break;
      case('manual'):
        muestra={
          id:id,
          datos:this.datosManuales,
          nombre:this.txtNombreMuestra.value
        }
        break; 
      default:
        return
    }
    this.servicioDataSets.addMuestra(muestra);
    this.cancelar();
  }
  nuevoSetDeDatos(){
    this.nuevo=true;
  }
  cancelar(){
    this.cambiarFormaDeAgregar();
    this.nuevo=false;
    this.txtNombreMuestra.setValue("");
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
  agregarValor(){
    if(!this.txtNuevoDato.valid){
      return;
    }
    if(this.modoSeleccionado=='api'){
      this.datosDelApi.push(this.txtNuevoDato.value)
    }else{
      this.datosManuales.push(this.txtNuevoDato.value)
    }
    this.scrollAbajo();
  }
  eliminarDato(indice:number){
    this.datosManuales.splice(indice, 1);
  }
  scrollAbajo() {
    if (this.listaContainer) {
      const elemento = this.listaContainer.nativeElement;
      elemento.scrollTop = elemento.scrollHeight;
    }
  }
}