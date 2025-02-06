import { Component, EventEmitter, Output } from '@angular/core';
import { TabService } from '../../services/tab.service';
import { DataSetsService } from '../../services/data-sets.service';
import { MatSelectModule } from '@angular/material/select';
import { Muestra } from '../../interfaces/Muestra';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CalculadorService } from '../../services/calculador.service';

@Component({
  selector: 'app-selector-de-muestras',
  standalone: true,
  imports: [MatSelectModule, MatFormFieldModule],
  templateUrl: './selector-de-muestras.component.html',
  styleUrl: './selector-de-muestras.component.css'
})
export class SelectorDeMuestrasComponent {
  muestrasRegistradas: Muestra[] = [];
  nombreMedida: string = '';
  cantidadDeMuestrasNecesarias: number = 0;

  @Output() resultadoCalculado = new EventEmitter<any>(); // Emitimos el resultado

  constructor(
    private tab: TabService,
    private dataSets: DataSetsService,
    private calculadora: CalculadorService
  ) { 
    tab.currentTab$.subscribe((tab) => {
      this.nombreMedida = tab.replace(/_/g, ' ');
      this.cantidadDeMuestrasNecesarias = tab === 'medidas_asociativas' ? 2 : 1;
    });

    dataSets.dataSets$.subscribe((data) => {
      this.muestrasRegistradas = data;
      console.log('Muestras registradas actualizadas:', this.muestrasRegistradas);
    });
  }

  calcular(): void {
    let muestras: Muestra[];
    if (this.cantidadDeMuestrasNecesarias == 2) {
      muestras = [this.muestrasRegistradas[0],this.muestrasRegistradas[1]]
    }else{
      muestras = [this.muestrasRegistradas[0]]
    }

    this.calculadora.realizarCalculo(muestras).subscribe((data) => {
      this.resultadoCalculado.emit(data);
      console.log('Resultado del cálculo:', data);
    });
  }
}
