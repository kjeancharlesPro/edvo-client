import { Component } from '@angular/core';
import { GoogleMapComponent } from '../google-map/google-map.component';

@Component({
  selector: 'app-newsletter',
  imports: [GoogleMapComponent],
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.scss',
})
export class NewsletterComponent {}
