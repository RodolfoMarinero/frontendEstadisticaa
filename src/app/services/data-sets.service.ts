import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSetsService {
  private dataSetsSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public dataSets$: Observable<any[]> = this.dataSetsSubject.asObservable();

  private currentTabSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public currentTab$: Observable<string> = this.currentTabSubject.asObservable();

  constructor() { }

  public hasDataSets(): boolean {
    return this.dataSetsSubject.value.length > 0;
  }

  public setDataSets(dataSets: any[]): void {
    this.dataSetsSubject.next(dataSets);
  }

  public setCurrentTab(tab: string): void {
    this.currentTabSubject.next(tab);
  }
}
