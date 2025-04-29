import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../page-header/page-header.component';

@Component({
  selector: 'app-history',
  imports: [PageHeaderComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss',
})
export class HistoryComponent {
  selectSlide(arg0: number) {
    throw new Error('Method not implemented.');
  }
}
