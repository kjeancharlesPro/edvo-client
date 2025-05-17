import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hospital-carousel',
  imports: [],
  templateUrl: './hospital-carousel.component.html',
  styleUrl: './hospital-carousel.component.scss',
})
export class HospitalCarouselComponent {
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

  @Input() scr = '';
  @Input() alt = '';
  @Input() id = 0;
}
