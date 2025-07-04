import { Component } from '@angular/core';
import { HospitalCarouselComponent } from './hospital-carousel/hospital-carousel.component';

@Component({
  selector: 'app-hospital',
  imports: [HospitalCarouselComponent],
  templateUrl: './hospital.component.html',
  styleUrl: './hospital.component.scss',
})
export class HospitalComponent {
  images = [
    {
      id: 0,
      src: 'https://edvo.fr/wp-content/uploads/2018/09/EDVO-Salle-a-manger.jpg',
      alt: 'EDVO-Salle-a-manger',
    },
    {
      id: 1,
      src: 'https://edvo.fr/wp-content/uploads/2018/09/EDVO-Salle-GT-2-1.jpg',
      alt: 'EDVO-Salle-GT-2-1',
    },
    {
      id: 2,
      src: 'https://edvo.fr/wp-content/uploads/2018/09/EDVO-Groupe-accueil-2.jpg',
      alt: 'EDVO-Groupe-accueil-2',
    },
    {
      id: 3,
      src: 'https://edvo.fr/wp-content/uploads/2018/09/EDVO-Couloir-2.jpg',
      alt: 'EDVO-Couloir-2',
    },
    {
      id: 4,
      src: 'https://edvo.fr/wp-content/uploads/2018/09/EDVO-Salle-TV-3.jpg',
      alt: 'EDVO-Salle-TV-3',
    },
    {
      id: 5,
      src: 'https://edvo.fr/wp-content/uploads/2018/09/EDVO-Chambre.jpg',
      alt: 'EDVO-Chambre',
    },
    {
      id: 6,
      src: 'https://edvo.fr/wp-content/uploads/2018/09/EDVO-Salle-TV.jpg',
      alt: 'EDVO-Salle-TV',
    },
    {
      id: 7,
      src: 'https://edvo.fr/wp-content/uploads/2018/09/EDVO-Paneaux.jpg',
      alt: 'EDVO-Paneaux',
    },
  ];
}
