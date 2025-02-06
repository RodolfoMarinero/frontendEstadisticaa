import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetallesComponent } from '../pantallas/detalles/detalles.component';
import { informacion } from '../informaciones/informacion';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor(private dialog: MatDialog) { }

  abrirModal(medida: string) {
    const dialogRef = this.dialog.open(DetallesComponent, {
      minWidth: '900px',
      panelClass: 'pantalla-detalles',
      data: { info: informacion.getInfo(medida) }
    });
  }

  cerrarModal() {
    this.dialog.closeAll();
  }
}
