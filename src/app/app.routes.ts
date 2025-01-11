import { Routes } from '@angular/router';
import { MedidasAsociativasComponent } from './opciones/medidas-asociativas/medidas-asociativas.component';
import { MedidasDescriptivasComponent } from './opciones/medidas-descriptivas/medidas-descriptivas.component';
import { TecnicasDeConteoComponent } from './opciones/tecnicas-de-conteo/tecnicas-de-conteo.component';

export const routes: Routes = [
    {path: 'medidas_asociativas', component: MedidasAsociativasComponent},
    {path: 'medidas_descriptivas', component: MedidasDescriptivasComponent},
    {path: 'tecnicas_conteo', component: TecnicasDeConteoComponent}
];
