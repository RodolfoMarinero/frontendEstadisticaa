import { Component } from '@angular/core';
import { ConsultaConteo } from '../../interfaces/Conteo';
import { MonitorConsultasService } from '../../services/monitor-consultas.service';

@Component({
  selector: 'app-tecnica-data-container',
  imports: [],
  templateUrl: './tecnica-data-container.component.html',
  styleUrl: './tecnica-data-container.component.css'
})
export class TecnicaDataContainerComponent {
  ultimaConsulta!: ConsultaConteo;
  anteriores: ConsultaConteo[] = [];
  constructor(consultas:MonitorConsultasService){
    consultas.obtenerUltimaConsulta().subscribe(data=>{
      if(data){
        this.ultimaConsulta=data;
      }
    });
    consultas.obtenerHistorialConsultas().subscribe(data=>{
      if(data){
        this.anteriores=data;
        this.anteriores.reverse();
      }
    });
  }

}
