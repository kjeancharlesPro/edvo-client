import { Component } from '@angular/core';

import { ModalFooterComponent } from './modal-footer/modal-footer.component';
import { SoinCardComponent } from './soin-card/soin-card.component';

@Component({
  selector: 'app-soins',
  imports: [ModalFooterComponent, SoinCardComponent],
  templateUrl: './soins.component.html',
  styleUrl: './soins.component.scss',
})
export class SoinsComponent {}
