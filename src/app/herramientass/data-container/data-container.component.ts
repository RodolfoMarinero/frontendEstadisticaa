import { Component} from '@angular/core';
import { DataSetsService } from '../../services/data-sets.service';
import { RecolectorDeDatosComponent } from '../recolector-de-datos/recolector-de-datos.component';
import { TabService } from '../../services/tab.service';
import { Muestra } from '../../interfaces/Muestra';

@Component({
  selector: 'app-data-container',
  templateUrl: './data-container.component.html',
  styleUrls: ['./data-container.component.css'],
  standalone: true,
  imports: [RecolectorDeDatosComponent]
})
export class DataContainerComponent {
  title: string = '';
  data: Muestra[] = [];
  hasData: boolean = false;
  constructor(private dataSetsService: DataSetsService,private tab : TabService) {
    this.dataSetsService.dataSets$.subscribe((data) => {
      this.hasData = this.dataSetsService.getNumeroDeMuestras()!=0;
      this.data = data;
      console.log('DataContainerComponent received data:', data);
    });
    
    this.tab.currentTab$.subscribe((data) => {
      this.title = 'Datos para '+data.replace(/_/g, ' ');
    });
  }
  isAssociative(): boolean {
    return Array.isArray(this.data) && Array.isArray(this.data[0]);
  }
  editDataSet(muetra:Muestra){
    console.log('editando muestra: '+muetra.nombre);
    
  }
  deleteDataSet(muetra:Muestra){
    console.log('eliminando muestra: '+muetra.nombre);
  }
  viewDataSet(muetra:Muestra){
    console.log('visualizando muestra: '+muetra.nombre);
  }
}
