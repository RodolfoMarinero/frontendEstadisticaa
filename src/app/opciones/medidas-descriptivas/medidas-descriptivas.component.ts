import { Component } from '@angular/core';
import { DataSetsService } from '../../services/data-sets.service';
import { ModalService } from '../../services/modal.service';
import { SelectorDeMuestrasComponent } from '../../herramientass/selector-de-muestras/selector-de-muestras.component';
import { MedidasDescriptivas, Muestra } from '../../interfaces/Muestra';

@Component({
  selector: 'app-medidas-descriptivas',
  standalone: true,
  imports: [SelectorDeMuestrasComponent],
  templateUrl: './medidas-descriptivas.component.html',
  styleUrl: './medidas-descriptivas.component.css'
})
export class MedidasDescriptivasComponent {
  existDataSets: boolean = false;
  medidas!:MedidasDescriptivas;
  datos: Muestra[] = [];
  constructor(private servicioDataSets : DataSetsService,private modalService:ModalService) { 
    this.servicioDataSets.dataSets$.subscribe((data) => {
      this.existDataSets=servicioDataSets.getNumeroDeMuestras()==2;
    });
  }
  openModal(medida:string){
    this.modalService.abrirModal(medida);
  }
  llenarTabla(datos:any){
    console.log('datos recibidos'+datos);
    
    this.medidas=datos;
    this.existDataSets=true;
  }
  volver(){
    this.existDataSets=false;
    this.medidas = {
      desviacionEstandar:0,
      media:0,
      mediana:0,
      moda:[0],
      varianza:0
    }
    }
}
