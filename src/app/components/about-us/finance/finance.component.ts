import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../page-header/page-header.component';

@Component({
  selector: 'app-finance',
  imports: [PageHeaderComponent],
  templateUrl: './finance.component.html',
  styleUrl: './finance.component.scss',
})
export class FinanceComponent {
  logoAurore = 'partenariats/logo-aurore.jpg';
  logoBlasonMontmagny = 'partenariats/logo-blason-montmagny.png';
  logoCaisseDepot = 'partenariats/logo-caisse-depot.png';
  logoFondationAbbePierre = 'partenariats/logo-fondation-abbe-pierre.png';

  logoFondationLoreal = 'partenariats/logo-fondation-loreal.jpg';
  logoIleDeFrance = 'partenariats/logo-ile-de-france.png';
  logoInstitutJustice = 'partenariats/logo-institut-pour-la-justice.png';
  logoLion = 'partenariats/logo-lion.png';
  logoMma = 'partenariats/logo-mma.jpg';

  logoPrefectureValDoise = 'partenariats/logo-prefecture-val-doise.jpg';
  logoRotary = 'partenariats/logo-rotary.jpg';
  logoTerrePlurielle = 'partenariats/logo-terre-plurielle.png';
}
