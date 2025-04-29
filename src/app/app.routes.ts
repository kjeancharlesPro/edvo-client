import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OurNewsComponent } from './components/our-news/our-news.component';
import { BrefComponent } from './components/about-us/bref/bref.component';
import { MissionsComponent } from './components/about-us/missions/missions.component';
import { HistoryComponent } from './components/about-us/history/history.component';
import { SoinsComponent } from './components/about-us/soins/soins.component';
import { LegComponent } from './components/help-us/leg/leg.component';
import { DonComponent } from './components/help-us/don/don.component';
import { GroceryComponent } from './components/our-actions/grocery/grocery.component';
import { HouseComponent } from './components/our-actions/house/house.component';
import { HospitalComponent } from './components/our-actions/hospital/hospital.component';
import { BenevolComponent } from './components/help-us/benevol/benevol.component';
import { DocsComponent } from './components/help-us/docs/docs.component';
import { MeceneComponent } from './components/help-us/mecene/mecene.component';
import { TestimonyComponent } from './components/about-us/testimony/testimony.component';
import { FinanceComponent } from './components/about-us/finance/finance.component';
import { ContactComponent } from './components/header/contact/contact.component';
import { NewsletterComponent } from './components/header/newsletter/newsletter.component';
import { GroupeEntraideFamilleComponent } from './components/our-actions/groupe-entraide-famille/groupe-entraide-famille.component';
import { MaisonRelaisComponent } from './components/our-actions/maison-relais/maison-relais.component';
import { AppartementsTherapeutiquesComponent } from './components/our-actions/appartements-therapeutiques/appartements-therapeutiques.component';
import { ScolairesComponent } from './components/prevention-and-training/scolaires/scolaires.component';
import { ParentsComponent } from './components/prevention-and-training/parents/parents.component';
import { EntreprisesComponent } from './components/prevention-and-training/entreprises/entreprises.component';
import { FormationsActeursRelaisComponent } from './components/prevention-and-training/formations-acteurs-relais/formations-acteurs-relais.component';
export const routes: Routes = [
  {
    path: '',
    title: 'Accueil - Association Nation EDVO',
    component: HomeComponent,
  },
  {
    path: 'contact',
    title: 'Contact - Association Nation EDVO',
    component: ContactComponent,
  },
  {
    path: 'newsletter',
    title: 'Newsletter - Association Nation EDVO',
    component: NewsletterComponent,
  },
  //A propos
  {
    path: 'en-bref',
    title: 'En bref - Association Nation EDVO',
    component: BrefComponent,
  },
  {
    path: 'missions',
    title: 'Missions - Association Nation EDVO',
    component: MissionsComponent,
  },
  {
    path: 'historique',
    title: 'Historique - Association Nation EDVO',
    component: HistoryComponent,
  },
  {
    path: 'parcours-de-soin',
    title: 'Parcours de soin - Association Nation EDVO',
    component: SoinsComponent,
  },
  {
    path: 'temoignages',
    title: 'Temoignages - Association Nation EDVO',
    component: TestimonyComponent,
  },
  {
    path: 'financement',
    title: 'Financement - Association Nation EDVO',
    component: FinanceComponent,
  },
  //Nos actions
  {
    path: 'hotel-social',
    title: 'Hotêl social - Association Nation EDVO',
    component: HospitalComponent,
  },
  {
    path: 'maison-relais',
    title: 'Maison relais - Association Nation EDVO',
    component: MaisonRelaisComponent,
  },
  {
    path: 'epicerie-sociales',
    title: 'Épicerie sociales - Association Nation EDVO',
    component: GroceryComponent,
  },
  {
    path: 'appartements-therapeutiques',
    title: 'Appartements Thérapeutiques - Association Nation EDVO',
    component: AppartementsTherapeutiquesComponent,
  },
  {
    path: 'groupe-entraide-famille',
    title: 'Groupe entraide famille - Association Nation EDVO',
    component: GroupeEntraideFamilleComponent,
  },
  //Prévention & Formation
  {
    path: 'scolaires',
    title: 'Scolaires - Association Nation EDVO',
    component: ScolairesComponent,
  },
  {
    path: 'parents',
    title: 'Parents - Association Nation EDVO',
    component: ParentsComponent,
  },
  {
    path: 'entreprises',
    title: 'Entreprises - Association Nation EDVO',
    component: EntreprisesComponent,
  },
  {
    path: 'formations-acteurs-relais',
    title: 'Formations acteurs-relais - Association Nation EDVO',
    component: FormationsActeursRelaisComponent,
  },
  //Nous soutenir
  {
    path: 'faire-un-leg',
    title: 'Faire un leg - Association Nation EDVO',
    component: LegComponent,
  },
  {
    path: 'don-adherent',
    title: 'Faire un don / Devenir adhérent - Association Nation EDVO',
    component: DonComponent,
  },
  {
    path: 'status-reglement-organigramme',
    title:
      'Status, Reglement interieur et Organigramme - Association Nation EDVO',
    component: DocsComponent,
  },
  {
    path: 'devenir-benevole',
    title: 'Devenir bénévole - Association Nation EDVO',
    component: BenevolComponent,
  },
  {
    path: 'devenir-mecene-de-competences',
    title: 'Devenir mécène de compétences - Association Nation EDVO',
    component: MeceneComponent,
  },
  //Actualités
  {
    path: 'actualites',
    title: 'Actualités - Association Nation EDVO',
    component: OurNewsComponent,
  },
];
