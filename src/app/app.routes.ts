import { Routes } from '@angular/router';
import { MedidasAsociativasComponent } from './opciones/medidas-asociativas/medidas-asociativas.component';
import { MedidasDescriptivasComponent } from './opciones/medidas-descriptivas/medidas-descriptivas.component';

export const routes: Routes = [
    {path: 'medidas_asociativas', component: MedidasAsociativasComponent},
    {path: 'medidas_descriptivas', component: MedidasDescriptivasComponent}
];
