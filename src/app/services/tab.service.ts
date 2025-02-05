import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabService {
  private currentTabSubject = new BehaviorSubject<string>(''); // Pestaña actual
  public currentTab$: Observable<string> = this.currentTabSubject.asObservable();

  constructor() {}

  public getCurrentTab(): string {
    return this.currentTabSubject.value;
  }
  public setCurrentTab(tab: string): void {
    this.currentTabSubject.next(tab);
  }
}
