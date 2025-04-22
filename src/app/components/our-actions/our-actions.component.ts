import { Component } from '@angular/core';
import { HospitalComponent } from "./hospital/hospital.component";
import { HouseComponent } from "./house/house.component";

@Component({
  selector: 'app-our-actions',
  imports: [HospitalComponent, HouseComponent],
  templateUrl: './our-actions.component.html',
  styleUrl: './our-actions.component.scss'
})
export class OurActionsComponent {

}
