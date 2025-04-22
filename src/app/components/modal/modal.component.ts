import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  @Input() button = '';
  @Input() title = '';
  @Input() p1 = '';
  @Input() p2 = '';
  @Input() p3 = '';
  @Input() p4 = '';
  @Input() p5 = '';
}
