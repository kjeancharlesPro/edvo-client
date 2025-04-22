import { Component } from '@angular/core';
import { LegComponent } from "./leg/leg.component";
import { DonComponent } from "./don/don.component";
import { DocsComponent } from "./docs/docs.component";
import { BenevolComponent } from "./benevol/benevol.component";
import { MeceneComponent } from "./mecene/mecene.component";

@Component({
  selector: 'app-help-us',
  imports: [LegComponent, DonComponent, DocsComponent, BenevolComponent, MeceneComponent],
  templateUrl: './help-us.component.html',
  styleUrl: './help-us.component.scss'
})
export class HelpUsComponent {

}
