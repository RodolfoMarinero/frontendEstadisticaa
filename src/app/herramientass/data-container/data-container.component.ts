import { Component, Input, OnChanges, ViewChild, ViewContainerRef, ComponentRef, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { DataSetsService } from '../../services/data-sets.service';
import { RecolectorDeDatosComponent } from '../recolector-de-datos/recolector-de-datos.component';

@Component({
  selector: 'app-data-container',
  templateUrl: './data-container.component.html',
  styleUrls: ['./data-container.component.css'],
  standalone: true,
  imports: [RecolectorDeDatosComponent]
})
export class DataContainerComponent implements OnChanges, OnDestroy {
  title: string = '';
  data: string[] | string[][] = [];
  hasData: boolean = false;
  private recolectorDeDatosRef: ComponentRef<RecolectorDeDatosComponent> | null = null;

  @ViewChild('recolectorDeDatosContainer', { read: ViewContainerRef, static: true }) recolectorDeDatosContainer!: ViewContainerRef;

  constructor(private dataSetsService: DataSetsService, private resolver: ComponentFactoryResolver) {
    this.dataSetsService.dataSets$.subscribe((data) => {
      this.hasData = this.dataSetsService.hasDataSets();
      this.data = data;
      console.log('DataContainerComponent received data:', data);
      this.checkForUnusedChild();
    });
  }

  ngOnChanges() {
    console.log('DataContainerComponent updated:', this.title, this.data);
  }

  ngOnDestroy() {
    if (this.recolectorDeDatosRef) {
      this.recolectorDeDatosRef.destroy();
    }
  }

  isAssociative(): boolean {
    return Array.isArray(this.data) && Array.isArray(this.data[0]);
  }

  checkForUnusedChild() {
    if (this.hasData && this.recolectorDeDatosRef) {
      this.recolectorDeDatosRef.destroy();
      this.recolectorDeDatosRef = null;
    } else if (!this.hasData && !this.recolectorDeDatosRef) {
      const factory = this.resolver.resolveComponentFactory(RecolectorDeDatosComponent);
      this.recolectorDeDatosRef = this.recolectorDeDatosContainer.createComponent(factory);
    }
  }
}
