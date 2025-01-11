import { Component } from '@angular/core';
import { RecolectorDeDatosComponent, Muestra } from '../../recolector-de-datos/recolector-de-datos.component';

@Component({
  selector: 'app-medidas-asociativas',
  standalone: true,
  imports: [RecolectorDeDatosComponent],
  templateUrl: './medidas-asociativas.component.html',
  styleUrl: './medidas-asociativas.component.css'
})
export class MedidasAsociativasComponent {
  datos: Muestra[] = [];
  medidas:MedidasAsociacion= {
    correlacion: 0,
    covarianza: 0,
    coeficienteCorrelacion: 0
  }

  dispersarResultados( muestras:Muestra[]){
    this.medidas={
      correlacion: 10,
      covarianza: 10,
      coeficienteCorrelacion: 10
    }
    this.datos=muestras;
  }
}
interface MedidasAsociacion {
  correlacion: number;
  covarianza: number;
  coeficienteCorrelacion: number;
}