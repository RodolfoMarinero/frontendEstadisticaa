import { Component } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MonitorConsultasService } from '../../services/monitor-consultas.service';
import { TecnicasService } from '../../services/tecnicas.service';

@Component({
  selector: 'app-tecnicas-de-conteo',
  imports: [ReactiveFormsModule],
  templateUrl: './tecnicas-de-conteo.component.html',
  styleUrls: ['./tecnicas-de-conteo.component.css']
})
export class TecnicasDeConteoComponent {
  // Se define el FormGroup con dos controles: numeroElementos y numeroSeleccionados
  form: FormGroup;

  constructor(private modal: ModalService,
    private fb: FormBuilder,
    private consultasService:MonitorConsultasService,
    private tecnicasService:TecnicasService
  ) {
    this.form = this.fb.group({
      numeroElementos: [null, [Validators.required, Validators.min(1)]],
      numeroSeleccionados: [null, [Validators.required, Validators.min(1)]]
    });
  }
  mostrarInfo(clave: string) {
    this.modal.abrirModal(clave);
  }
  calcularCombinaciones() {
    if (this.form.valid) {
      const n = this.form.value.numeroElementos;
      const r = this.form.value.numeroSeleccionados;
      if (r > n) {
        alert("El número de seleccionados (r) no puede ser mayor que el número de elementos (n).");
        return;
      }
      this.tecnicasService.getCombinatoria(n,r).subscribe(data=>{
        this.consultasService.registrarConsulta({
          tipo:'combinacion',
          n:n,
          r:r,
          resultado:data
        });
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
  calcularPermutaciones() {
    if (this.form.valid) {
      const n = this.form.value.numeroElementos;
      const r = this.form.value.numeroSeleccionados;
      
      if (r > n) {
        alert("El número de seleccionados (r) no puede ser mayor que el número de elementos (n).");
        return;
      }
      this.tecnicasService.getPermutacion(n,r).subscribe(data=>{
        this.consultasService.registrarConsulta({
          tipo:'permutacion',
          n:n,
          r:r,
          resultado:data
        });
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
