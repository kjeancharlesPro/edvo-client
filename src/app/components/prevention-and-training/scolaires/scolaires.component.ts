import { Component } from '@angular/core';
import { Cm2Component } from './cm2/cm2.component';
import { CyberAddictionsComponent } from './cyber-addictions/cyber-addictions.component';

@Component({
  selector: 'app-scolaires',
  imports: [Cm2Component, CyberAddictionsComponent],
  templateUrl: './scolaires.component.html',
  styleUrl: './scolaires.component.scss',
})
export class ScolairesComponent {
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
