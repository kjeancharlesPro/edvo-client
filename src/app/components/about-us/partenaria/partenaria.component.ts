import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-partenaria',
  imports: [NgOptimizedImage],
  templateUrl: './partenaria.component.html',
  styleUrl: './partenaria.component.scss'
})
export class PartenariaComponent {

  logoAurore = "partenariats/logo-aurore.jpg";
  logoBlasonMontmagny = "partenariats/logo-blason-montmagny.png";
  logoCaisseDepot = "partenariats/logo-caisse-depot.png";
  logoFondationAbbePierre = "partenariats/logo-fondation-abbe-pierre.png";

  logoFondationLoreal = "partenariats/logo-fondation-loreal.jpg";
  logoIleDeFrance = "partenariats/logo-ile-de-france.png";
  logoInstitutPourLaJustice = "partenariats/logo-institut-pour-la-justice.png";
  logoLion = "partenariats/logo-lion.png";
  logoMma = "partenariats/logo-mma.jpg";

  logoPrefectureValDoise = "partenariats/logo-prefecture-val-doise.jpg";
  logoRotary = "partenariats/logo-rotary.jpg";
  logoTerrePlurielle = "partenariats/logo-terre-plurielle.png";
}
