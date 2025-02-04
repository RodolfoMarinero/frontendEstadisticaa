import { Component } from '@angular/core';
import { RecolectorDeDatosComponent, Muestra } from '../../herramientass/recolector-de-datos/recolector-de-datos.component';
import { DataSetsService } from '../../services/data-sets.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-medidas-asociativas',
  standalone: true,
  imports: [RecolectorDeDatosComponent],
  templateUrl: './medidas-asociativas.component.html',
  styleUrl: './medidas-asociativas.component.css'
})
export class MedidasAsociativasComponent {
  datos: Muestra[] = [];
  medidas: MedidasAsociacion = {
    correlacion: 0,
    covarianza: 0,
    coeficienteCorrelacion: 0
  }
  existDataSets: boolean = false;
  constructor(private servicioDataSets: DataSetsService, private modalService: ModalService) {
    this.servicioDataSets.dataSets$.subscribe((data) => {
      this.existDataSets = servicioDataSets.hasDataSets();
    });
  }
  openModal(medida: string) {
    this.modalService.abrirModal(medida);
  }
  dispersarResultados(muestras: Muestra[]) {
    this.medidas = {
      correlacion: 10,
      covarianza: 10,
      coeficienteCorrelacion: 10
    }
    this.datos = muestras;
  }
}
interface MedidasAsociacion {
  correlacion: number;
  covarianza: number;
  coeficienteCorrelacion: number;
}