import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-soin-card',
  imports: [],
  templateUrl: './soin-card.component.html',
  styleUrl: './soin-card.component.scss',
})
export class SoinCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() id: string = '';
  content: any;
}
