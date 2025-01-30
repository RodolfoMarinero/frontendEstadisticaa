import { Component } from '@angular/core';
import { Muestra, RecolectorDeDatosComponent } from '../../herramientass/recolector-de-datos/recolector-de-datos.component';
import { DataSetsService } from '../../services/data-sets.service';

@Component({
  selector: 'app-medidas-descriptivas',
  standalone: true,
  imports: [RecolectorDeDatosComponent],
  templateUrl: './medidas-descriptivas.component.html',
  styleUrl: './medidas-descriptivas.component.css'
})
export class MedidasDescriptivasComponent {
  existDataSets: boolean = false;
  constructor(private servicioDataSets : DataSetsService) { 
    this.servicioDataSets.dataSets$.subscribe((data) => {
      this.existDataSets=servicioDataSets.hasDataSets();
    });
  }
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
  openModal(medida:string){
    alert('mostrando detalles de : ' + medida);

  }
}
interface MedidasDescriptivas{
  media: number ;
  mediana: number ;
  moda: number[] ;
  desviacionEstandar: number ;
  varianza: number;
}