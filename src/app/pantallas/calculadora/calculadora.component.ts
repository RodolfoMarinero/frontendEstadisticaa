import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DataContainerComponent } from '../../herramientass/data-container/data-container.component';
import { DataSetsService } from '../../services/data-sets.service';
import { TabService } from '../../services/tab.service';

@Component({
  selector: 'app-calculadora',
  standalone: true, // Habilitar el uso de imports
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    DataContainerComponent
  ],
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  activeTab: string = 'medidas_descriptivas';
  constructor(private tab:TabService) {}

  changeTab(tab: string) {
    this.activeTab = tab;
    this.tab.setCurrentTab(tab);
    console.log(`Changing tab to: ${tab}`);
  }
}
