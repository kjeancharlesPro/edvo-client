import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactForm = new FormGroup({
    demande: new FormControl('Informations', Validators.required),
    name: new FormControl('', Validators.required),
    organism: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required),
  });

  objectOfDemand = [
    { id: 1, value: 'Informations' },
    { id: 2, value: 'Groupe entraide famille' },
    { id: 3, value: 'Prévention scolaire' },
    { id: 4, value: 'Prévention entreprise' },
    { id: 5, value: 'Formation acteur-relais' },
    { id: 6, value: 'Faire un leg' },
    { id: 7, value: 'Devenir adhérent' },
    { id: 8, value: 'Devenir bénévole' },
    { id: 9, value: 'Presse' },
    { id: 10, value: 'Maison Relais' },
    { id: 11, value: 'Autre' },
  ];

  onSubmit() {
    const form = this.contactForm.value;
    const organism = form.organism && ' / ' + form.organism;

    window.location.href =
      'mailto:' +
      form.email +
      '?&subject=' +
      form.demande +
      ' - ' +
      form.name +
      organism +
      '&body=' +
      form.message;
  }
}
