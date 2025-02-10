import { Routes } from '@angular/router';
import { MedidasAsociativasComponent } from './opciones/medidas-asociativas/medidas-asociativas.component';
import { MedidasDescriptivasComponent } from './opciones/medidas-descriptivas/medidas-descriptivas.component';
import { TecnicasDeConteoComponent } from './opciones/tecnicas-de-conteo/tecnicas-de-conteo.component';
import { PortadaComponent } from './pantallas/portada/portada.component';
import { CalculadoraComponent } from './pantallas/calculadora/calculadora.component';
export const routes: Routes = [
  { path: '', redirectTo: 'portada', pathMatch: 'full' },
  { path: 'portada', component: PortadaComponent },
  {
    path: 'calculadora',
    component: CalculadoraComponent,
    children: [
      { path: '', redirectTo: 'medidas_descriptivas', pathMatch: 'full' },
      { path: 'medidas_descriptivas', component: MedidasDescriptivasComponent },
      { path: 'medidas_asociativas', component: MedidasAsociativasComponent },
      { path: 'tecnicas_conteo', component: TecnicasDeConteoComponent },
    ],
  },
  { path: '**', redirectTo: 'portada', pathMatch: 'full' },
];
