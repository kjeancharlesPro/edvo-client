import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  imports: [ReactiveFormsModule],
  templateUrl: './form-control.component.html',
  styleUrl: './form-control.component.scss',
})
export class FormControlComponent {
  @Input() id: string = '';
  @Input() type: string = '';
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() formControlName: string = '';
}
