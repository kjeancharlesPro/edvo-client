import { Component } from '@angular/core';

@Component({
  selector: 'app-parents',
  imports: [],
  templateUrl: './parents.component.html',
  styleUrl: './parents.component.scss',
})
export class ParentsComponent {
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
