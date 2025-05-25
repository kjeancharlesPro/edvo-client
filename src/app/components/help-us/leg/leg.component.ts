import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-leg',
  imports: [ReactiveFormsModule],
  templateUrl: './leg.component.html',
  styleUrl: './leg.component.scss',
})
export class LegComponent {
  legForm = new FormGroup({
    nom: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    types: new FormArray([]),
    photos: new FormControl({}),
    message: new FormControl('', Validators.required),
  });

  options = [
    {
      id: 0,
      label: 'Ameublement',
      name: 'ameublement',
      value: new FormControl(false),
    },
    {
      id: 1,
      label: 'Électroménager',
      name: 'electroménager',
      value: new FormControl(false),
    },
    {
      id: 2,
      label: 'Arts de table',
      name: 'arts-de-table',
      value: new FormControl(false),
    },
    {
      id: 3,
      label: 'Décoration',
      name: 'decoration',
      value: new FormControl(false),
    },
    {
      id: 4,
      label: 'Linge de maison',
      name: 'linge-de-maison',
      value: new FormControl(false),
    },
    {
      id: 5,
      label: 'Bricolage',
      name: 'bricolage',
      value: new FormControl(false),
    },
    {
      id: 6,
      label: 'Jardinage',
      name: 'jardinage',
      value: new FormControl(false),
    },
    {
      id: 7,
      label: 'Vêtements',
      name: 'vetements',
      value: new FormControl(false),
    },
    {
      id: 8,
      label: 'Chaussures',
      name: 'chaussures',
      value: new FormControl(false),
    },
    {
      id: 9,
      label: 'Accessoires & bagagerie',
      name: 'accessoires-bagagerie',
      value: new FormControl(false),
    },
    {
      id: 10,
      label: 'Équipement bébé',
      name: 'equipement-bebe',
      value: new FormControl(false),
    },
    {
      id: 11,
      label: 'Vêtements bébé',
      name: 'vetements-bebe',
      value: new FormControl(false),
    },
    { id: 12, label: 'Argent', name: 'argent', value: new FormControl(false) },
    { id: 13, label: 'Autre', name: 'autre', value: new FormControl(false) },
  ];

  constructor() {}

  ngOnInit() {
    this.options.forEach((option) =>
      this.checkboxes.setControl(option.id, option.value)
    );
    this.checkboxes.addValidators(this.checkboxesValidator());
  }

  get checkboxes(): FormArray {
    return this.legForm.get('types') as FormArray;
  }

  checkboxesValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const hasSome = this.checkboxes.value.some((v: boolean) => v === true);
      console.log(this.legForm);

      return hasSome ? null : { checkboxes: { value: control.value } };
    };
  }

  handleFileInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.legForm.patchValue({ photos: input.files });
      this.legForm.get('photos')?.updateValueAndValidity();
    }
  }

  handleCheckboxChange(event: Event, index: number): void {
    const checkbox = event.target as HTMLInputElement;
    const isChecked = checkbox.checked;

    this.checkboxes.at(index).setValue(isChecked);
  }

  handleSubmit(): void {
    console.log(this.legForm.value);

    this.checkboxes.controls.forEach((control, index) => {
      if (control.value) {
        console.log(this.options[index].label);
      }
    });
  }
}
