import { Component } from '@angular/core';
import { DataSetsService } from '../../services/data-sets.service';
import { ModalService } from '../../services/modal.service';
import { MedidasAsociacion } from '../../interfaces/Muestra';
import { SelectorDeMuestrasComponent } from '../../herramientass/selector-de-muestras/selector-de-muestras.component';

@Component({
  selector: 'app-medidas-asociativas',
  standalone: true,
  imports: [SelectorDeMuestrasComponent],
  templateUrl: './medidas-asociativas.component.html',
  styleUrl: './medidas-asociativas.component.css'
})
export class MedidasAsociativasComponent {
  medidas: MedidasAsociacion = {
    correlacion: 0,
    covarianza: 0,
    coeficienteCorrelacion: 0
  }
  existDataSets: boolean = false;
  constructor(private servicioDataSets: DataSetsService, private modalService: ModalService) {
    this.servicioDataSets.dataSets$.subscribe((data) => {
      this.existDataSets = servicioDataSets.getNumeroDeMuestras()==1;
    });
  }
  openModal(medida: string) {
    this.modalService.abrirModal(medida);
  }
  llenarTabla(datos:any){
    this.medidas=datos;
    this.existDataSets=true;
  }
  volver(){
    this.existDataSets=false;
    this.medidas={
      correlacion: 0,
      covarianza: 0,
      coeficienteCorrelacion: 0};
  }
}
