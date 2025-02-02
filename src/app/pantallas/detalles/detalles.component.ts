import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Informacion } from '../../interfaces/Informacion';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import { MathjaxComponent } from '../../herramientass/mathjax/mathjax.component';
import { HighlightModule } from 'ngx-highlightjs';
@Component({
  selector: 'app-detalles',
  imports: [MatDialogModule,MatExpansionModule,MathjaxComponent,HighlightModule],
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css'
})
export class DetallesComponent{
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
  get info():Informacion{
    return this.data.info;
  }
}
