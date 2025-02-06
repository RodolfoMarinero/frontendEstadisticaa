import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MedidasAsociacion, MedidasDescriptivas, Muestra } from '../interfaces/Muestra';

@Injectable({
  providedIn: 'root'
})
export class CalculadorService {

  constructor() { }

  private getMedidasAsociativas(): Observable<MedidasAsociacion> {
    const medidasAsociacion: MedidasAsociacion = {
      correlacion: 0.85,
      covarianza: 2.5,
      coeficienteCorrelacion: 0.9,      
    };
    return of(medidasAsociacion);
  }
  
  private getMedidasDescriptivas(): Observable<MedidasDescriptivas> {
    const medidasDescriptivas: MedidasDescriptivas = {
      media: 50,
      mediana: 45,
      moda: [40],
      desviacionEstandar: 5,
      varianza: 25
    };
    return of(medidasDescriptivas);
  }

  /**
   * Método para calcular medidas basado en las muestras recibidas.
   * @param muestras Array de muestras
   * @returns Observable con el resultado del cálculo
   */
  realizarCalculo(muestras: Muestra[]): Observable<MedidasAsociacion | MedidasDescriptivas> {
    if (muestras.length > 1) {
      return this.getMedidasAsociativas(); // Si hay varias muestras, calcular medidas asociativas
    } else {
      return this.getMedidasDescriptivas(); // Si hay una muestra, calcular medidas descriptivas
    }
  }
}
