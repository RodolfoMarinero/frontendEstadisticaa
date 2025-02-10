import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StorageService } from './storage.service';
import { ConsultaConteo } from '../interfaces/Conteo';

@Injectable({
  providedIn: 'root'
})
export class MonitorConsultasService {
  private readonly STORAGE_KEY = 'historialConsultas';

  // BehaviorSubject para la última consulta.
  private ultimaConsultaSubject = new BehaviorSubject<ConsultaConteo | null>(null);
  // BehaviorSubject para todo el historial de consultas.
  private historialConsultasSubject = new BehaviorSubject<ConsultaConteo[]>([]);

  constructor(private storage: StorageService) {
    this.cargarHistorialDesdeStorage();
  }
  private cargarHistorialDesdeStorage(): void {
    const historial = this.storage.get<ConsultaConteo[]>(this.STORAGE_KEY) || [];
    this.historialConsultasSubject.next(historial);

    if (historial.length > 0) {
      this.ultimaConsultaSubject.next(historial[historial.length - 1]); // Última consulta
    }
  }
  registrarConsulta(consulta: ConsultaConteo): void {
    const historial = this.historialConsultasSubject.value;
    historial.push(consulta);

    this.storage.save(this.STORAGE_KEY, historial);

    this.historialConsultasSubject.next([...historial]);
    this.ultimaConsultaSubject.next(consulta);
  }

  obtenerUltimaConsulta(): Observable<ConsultaConteo | null> {
    return this.ultimaConsultaSubject.asObservable();
  }

  obtenerHistorialConsultas(): Observable<ConsultaConteo[]> {
    return this.historialConsultasSubject.asObservable();
  }

  limpiarHistorial(): void {
    this.storage.remove(this.STORAGE_KEY);
    this.historialConsultasSubject.next([]);
    this.ultimaConsultaSubject.next(null);
  }
}
