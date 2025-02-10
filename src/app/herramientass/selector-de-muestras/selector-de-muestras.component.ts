import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { TabService } from '../../services/tab.service';
import { DataSetsService } from '../../services/data-sets.service';
import { MatSelectModule } from '@angular/material/select';
import { Muestra } from '../../interfaces/Muestra';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CalculadorService } from '../../services/calculador.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { error } from 'jquery';

@Component({
  selector: 'app-selector-de-muestras',
  standalone: true,
  imports: [MatSelectModule, MatFormFieldModule, ReactiveFormsModule],
  templateUrl: './selector-de-muestras.component.html',
  styleUrl: './selector-de-muestras.component.css',
  encapsulation:ViewEncapsulation.None
})
export class SelectorDeMuestrasComponent {
  errorFeedBack!:string;
  muestrasRegistradas: Muestra[] = [];
  nombreMedida: string = '';
  cantidadDeMuestrasNecesarias: number = 0;
  muestras!:FormGroup;

  @Output() resultadoCalculado = new EventEmitter<any>(); // Emitimos el resultado

  constructor(
    tab: TabService,
    dataSets: DataSetsService,
    private calculadora: CalculadorService,
    private fb : FormBuilder
  ) { 
    tab.currentTab$.subscribe((tab) => {
      this.nombreMedida = tab.replace(/_/g, ' ');
      this.cantidadDeMuestrasNecesarias = tab === 'medidas_asociativas' ? 2 : 1;
      this.construirFormulario();
    });

    dataSets.dataSets$.subscribe((data) => {
      this.muestrasRegistradas = data;
      console.log('Muestras registradas actualizadas:', this.muestrasRegistradas);
    });
  }
  construirFormulario(){
    if(this.cantidadDeMuestrasNecesarias==1){
      this.muestras=this.fb.group({
        optMuestra1 : [,Validators.required]
      });
    }else{
      this.muestras=this.fb.group({
        optMuestra1 : [,Validators.required],
        optMuestra2 : [,Validators.required]
      });
    }
  }
  calcular(): void {
    let muestras: Muestra[];
    if (this.cantidadDeMuestrasNecesarias == 2) {
      muestras = [this.muestras.get('optMuestra1')?.value,this.muestras.get('optMuestra2')?.value]
    }else{
      muestras = [this.muestras.get('optMuestra1')?.value]
    }

    this.calculadora.realizarCalculo(muestras).subscribe({
      next: (data) => {
        this.resultadoCalculado.emit(data);
        console.log('Resultado del cálculo:', data);
      },
      error: (err) => {
        this.errorFeedBack = err.error?.error || 'Ocurrió un error inesperado';
        console.error('Error en el cálculo:', this.errorFeedBack);
      }
    });
    
  }
}
