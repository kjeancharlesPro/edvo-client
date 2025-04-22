import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../page-header/page-header.component';
import { ModalComponent } from '../../modal/modal.component';

@Component({
  selector: 'app-soins',
  imports: [PageHeaderComponent, ModalComponent],
  templateUrl: './soins.component.html',
  styleUrl: './soins.component.scss',
})
export class SoinsComponent {}
