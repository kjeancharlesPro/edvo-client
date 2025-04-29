import { Component } from '@angular/core';

import { SoinCardComponent } from './soin-card/soin-card.component';

@Component({
  selector: 'app-soins',
  imports: [SoinCardComponent],
  templateUrl: './soins.component.html',
  styleUrl: './soins.component.scss',
})
export class SoinsComponent {}
