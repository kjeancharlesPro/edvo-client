
import { Component } from '@angular/core';
import { MissionsComponent } from "./missions/missions.component";
import { HistoryComponent } from "./history/history.component";
import { SoinsComponent } from "./soins/soins.component";
import { TestimonyComponent } from "./testimony/testimony.component";
import { FinanceComponent } from "./finance/finance.component";
import { PartenariaComponent } from "./partenaria/partenaria.component";
import { BrefComponent } from "./bref/bref.component";

@Component({
  selector: 'app-about-us',
  imports: [MissionsComponent, HistoryComponent, SoinsComponent, TestimonyComponent, FinanceComponent, PartenariaComponent, BrefComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

}
