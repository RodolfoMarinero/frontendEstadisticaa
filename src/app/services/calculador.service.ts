import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MedidasAsociacion, MedidasDescriptivas, Muestra } from '../interfaces/Muestra';
import { HttpClient } from '@angular/common/http';
import { APIURL } from '../../ENVIROMENT';

@Injectable({
  providedIn: 'root'
})
export class CalculadorService {

  constructor(private httpClient:HttpClient) { }

  private getMedidasDescriptivas(muestra: Muestra): Observable<MedidasDescriptivas> {
    const formData = new FormData();

    formData.append("id", muestra.id+"");
    formData.append("nombre", muestra.nombre);
    formData.append("datos", JSON.stringify(muestra.datos)); // Convertir array a string

    if (muestra.file) {
        formData.append("file", muestra.file);
    }

    return this.httpClient.post<MedidasDescriptivas>(APIURL + "/procesar-csv", formData);
}

private getMedidasAsociativas(muestra1: Muestra, muestra2: Muestra): Observable<MedidasAsociacion> {
    const formData = new FormData();

    formData.append("muestra1.id", muestra1.id+"");
    formData.append("muestra1.nombre", muestra1.nombre);
    formData.append("muestra1.datos", JSON.stringify(muestra1.datos));
    if (muestra1.file) {
        formData.append("muestra1.file", muestra1.file);
    }

    formData.append("muestra2.id", muestra2.id+"");
    formData.append("muestra2.nombre", muestra2.nombre);
    formData.append("muestra2.datos", JSON.stringify(muestra2.datos));
    if (muestra2.file) {
        formData.append("muestra2.file", muestra2.file);
    }

    return this.httpClient.post<MedidasAsociacion>(APIURL + "/procesar-csv-doble", formData);
}


  realizarCalculo(muestras: Muestra[]): Observable<MedidasAsociacion | MedidasDescriptivas> {
    console.log("realizando calculo con muestras"+JSON.stringify(muestras));
    
    if (muestras.length > 1) {
      return this.getMedidasAsociativas(muestras[0],muestras[1]); // Si hay varias muestras, calcular medidas asociativas
    } else {
      return this.getMedidasDescriptivas(muestras[0]); // Si hay una muestra, calcular medidas descriptivas
    }
  }
}
