import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StorageService } from './storage.service';
import { Muestra } from '../interfaces/Muestra';

@Injectable({
  providedIn: 'root'
})
export class DataSetsService {
  private readonly storageKey = 'dataSets';
  private _dataSetsSubject = new BehaviorSubject<Muestra[]>([]);
  public dataSets$: Observable<Muestra[]> = this._dataSetsSubject.asObservable();

  constructor(private storageService: StorageService) {
    this._dataSetsSubject.next(this.loadStoredData());
    if(this._dataSetsSubject.getValue().length==0){
      this.addMuestra({id:1,nombre:'datos de la piña',data:[1,2,5,7,3,83,3,67,8]});
      this.addMuestra({id:2,nombre:'datos del arroz',data:[1,2,5,7,3,83,3,67,8]});
      this.addMuestra({id:3,nombre:'datos de perros',data:[1,2,5,7,3,83,3,67,8]});
      this.addMuestra({id:4,nombre:'datos de peso',data:[1,2,5,7,3,83,3,67,8]});
      this.addMuestra({id:5,nombre:'datos de estatura',data:[1,2,5,7,3,83,3,67,8]});
      console.log(JSON.stringify(this._dataSetsSubject.getValue()));
      
    }
  }

  //tamaño de las muestras
  public getNumeroDeMuestras(): number {
    return this._dataSetsSubject.value.length;
  }
  //crud para muestras
  public addMuestra(newMuestra: Muestra): void {
    const updatedDataSets = [...this._dataSetsSubject.value, newMuestra];
    this.updateStorageAndNotify(updatedDataSets);
  }
  public getMuestraById(id: number): Muestra | undefined {
    return this._dataSetsSubject.value.find(muestra => muestra.id === id);
  }
  public updateMuestra(id: number, newData: number[]): void {
    const updatedDataSets = this._dataSetsSubject.value.map(muestra =>
      muestra.id === id ? { ...muestra, data: newData } : muestra
    );
    this.updateStorageAndNotify(updatedDataSets);
  }
  public deleteMuestra(id: number): void {
    const updatedDataSets = this._dataSetsSubject.value.filter(muestra => muestra.id !== id);
    this.updateStorageAndNotify(updatedDataSets);
  }

  //control de datos
  public clearDataSets(): void {
    this.storageService.remove(this.storageKey);
    this._dataSetsSubject.next([]);
  }
  private updateStorageAndNotify(updatedDataSets: Muestra[]): void {
    this.storageService.save(this.storageKey, updatedDataSets);
    this._dataSetsSubject.next(updatedDataSets);
  }
  private loadStoredData(): Muestra[] {
    return this.storageService.get<Muestra[]>(this.storageKey) || [];
  }
}
