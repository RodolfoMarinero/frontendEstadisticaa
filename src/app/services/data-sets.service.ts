import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StorageService } from './storage.service';
import { Muestra } from '../interfaces/Muestra';
import { MuestraFileService } from './muestra-file-service.service';

@Injectable({
  providedIn: 'root'
})
export class DataSetsService {
  private readonly storageKey = 'dataSets';
  private _dataSetsSubject = new BehaviorSubject<Muestra[]>([]);
  public dataSets$: Observable<Muestra[]> = this._dataSetsSubject.asObservable();

  constructor(
    private storageService: StorageService,
    private muestraFileService: MuestraFileService
  ) {
    this.loadStoredDataWithFiles().then((muestras: Muestra[]) => {
      this._dataSetsSubject.next(muestras);
    });
      }

  public getNumeroDeMuestras(): number {
    return this._dataSetsSubject.value.length;
  }

  public addMuestra(newMuestra: Muestra): void {
    if (newMuestra.file) {
      this.muestraFileService.saveMuestraFile(newMuestra).then(() => {
        const muestraToStore: Muestra = { ...newMuestra };
        const updatedDataSets = [...this._dataSetsSubject.value, muestraToStore];
        this.updateStorageAndNotify(updatedDataSets);
      });
    } else {
      const updatedDataSets = [...this._dataSetsSubject.value, newMuestra];
      this.updateStorageAndNotify(updatedDataSets);
    }
  }

  public getMuestraById(id: number): Muestra | undefined {
    return this._dataSetsSubject.value.find(muestra => muestra.id === id);
  }

  public updateMuestra(id: number, newData: number[]): void {
    const updatedDataSets = this._dataSetsSubject.value.map(muestra =>
      muestra.id === id ? { ...muestra, datos: newData } : muestra
    );
    this.updateStorageAndNotify(updatedDataSets);
  }

  public deleteMuestra(id: number): void {
    const muestraToDelete = this._dataSetsSubject.value.find(muestra => muestra.id === id);
    if (muestraToDelete) {
      this.muestraFileService.removeMuestraFile(muestraToDelete);
    }
    const updatedDataSets = this._dataSetsSubject.value.filter(muestra => muestra.id !== id);
    this.updateStorageAndNotify(updatedDataSets);
  }

  public siguienteIndice(): number {
    const dataSets = this._dataSetsSubject.value;
    return dataSets.length > 0 ? Math.max(...dataSets.map(muestra => muestra.id)) + 1 : 1;
  }

  public clearDataSets(): void {
    this._dataSetsSubject.value.forEach(muestra => {
      this.muestraFileService.removeMuestraFile(muestra);
    });
    this.storageService.remove(this.storageKey);
    this._dataSetsSubject.next([]);
  }

  private updateStorageAndNotify(updatedDataSets: Muestra[]): void {
    this.storageService.save(this.storageKey, updatedDataSets);
    this._dataSetsSubject.next(updatedDataSets);
  }

  public loadStoredDataWithFiles(): Promise<Muestra[]> {
    // Recupera los datos almacenados; si no hay datos, devuelve un array vacío.
    const storedData: Muestra[] = this.storageService.get<Muestra[]>(this.storageKey) || [];
    
    // Actualiza el BehaviorSubject con los datos recuperados.
    this._dataSetsSubject.next(storedData);
    
    // Recorre cada muestra y, si tiene propiedad 'file', reconstruye el objeto File.
    const promises = storedData.map(muestra => {
      if (muestra.file) {
        return this.muestraFileService.getMuestraFile(muestra);
      }
      return Promise.resolve(muestra);
    });
    
    // Retorna una promesa que se resuelve cuando todas las muestras han sido procesadas.
    return Promise.all(promises);
  }
  
}
