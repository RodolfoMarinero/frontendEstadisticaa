import { Component } from '@angular/core';
import { Muestra, RecolectorDeDatosComponent } from '../../recolector-de-datos/recolector-de-datos.component';

@Component({
  selector: 'app-medidas-descriptivas',
  standalone: true,
  imports: [RecolectorDeDatosComponent],
  templateUrl: './medidas-descriptivas.component.html',
  styleUrl: './medidas-descriptivas.component.css'
})
export class MedidasDescriptivasComponent {
  datos: Muestra[] = [];
  medidas:MedidasDescriptivas= {
    media: 0,
    mediana: 0,
    moda:[0],
    desviacionEstandar:0,
    varianza: 0
  };

  dispersarResultados(muestras:Muestra[]){
    this.medidas={
      media: 10,
      mediana: 10,
      moda:[10],
      desviacionEstandar:10,
      varianza: 10
    }
    this.datos=muestras;
  }
}
interface MedidasDescriptivas{
  media: number ;
  mediana: number ;
  moda: number[] ;
  desviacionEstandar: number ;
  varianza: number;
}