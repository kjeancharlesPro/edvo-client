import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-google-map',
  imports: [GoogleMapsModule],
  templateUrl: './google-map.component.html',
  styleUrl: './google-map.component.scss',
})
export class GoogleMapComponent {
  center: google.maps.LatLngLiteral = { lat: 48.9731578, lng: 2.3489924 };
  title = 'Association Nationale E.D.V.O';
}
