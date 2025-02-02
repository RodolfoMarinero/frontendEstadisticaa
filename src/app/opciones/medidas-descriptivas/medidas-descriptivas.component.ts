import { Component } from '@angular/core';
import { Muestra, RecolectorDeDatosComponent } from '../../herramientass/recolector-de-datos/recolector-de-datos.component';
import { DataSetsService } from '../../services/data-sets.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-medidas-descriptivas',
  standalone: true,
  imports: [RecolectorDeDatosComponent],
  templateUrl: './medidas-descriptivas.component.html',
  styleUrl: './medidas-descriptivas.component.css'
})
export class MedidasDescriptivasComponent {
  existDataSets: boolean = false;
  medidas!:MedidasDescriptivas;
  datos: Muestra[] = [];
  constructor(private servicioDataSets : DataSetsService,private modalService:ModalService) { 
    this.servicioDataSets.dataSets$.subscribe((data) => {
      this.existDataSets=servicioDataSets.hasDataSets();
      this.checkForDS();
    });
  }
  openModal(medida:string){
    this.modalService.abrirModal(medida);
  }
  checkForDS(){
    if(this.existDataSets){
      this.medidas={
        media: 10,
        mediana: 10,
        moda: [10],
        desviacionEstandar: 10,
        varianza: 10
      }
    }
  }
}
interface MedidasDescriptivas{
  media: number ;
  mediana: number ;
  moda: number[] ;
  desviacionEstandar: number ;
  varianza: number;
}