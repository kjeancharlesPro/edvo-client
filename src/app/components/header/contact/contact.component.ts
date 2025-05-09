import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormControlComponent } from './form-control/form-control.component';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, FormControlComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactForm = new FormGroup({
    demande: new FormControl(''),
    name: new FormControl(''),
    organisme: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl(''),
  });

  onSubmit() {
    console.warn(this.contactForm.value);
  }
}
