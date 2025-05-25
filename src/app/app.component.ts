import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { Router, NavigationEnd } from '@angular/router';
import { HeroComponent } from './components/home/hero/hero.component';
import { HomeComponent } from './components/home/home.component';
import { PageHeaderItem } from './models/PageHeaderItem';
import { aboutUs } from './constants/aboutUs';
import { ourActions } from './constants/ourActions';
import { GoogleMapsModule } from '@angular/google-maps';
import { preventionAndTraining } from './constants/preventionAndTraining';
import { helpUs } from './constants/helpUs';
import { ourNews } from './constants/ourNews';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    PageHeaderComponent,
    HeroComponent,
    GoogleMapsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  showScrollUpButton = false;
  currentUrl: string = '';
  aboutUs: PageHeaderItem[];
  ourActions: PageHeaderItem[];
  preventionAndTraining: PageHeaderItem[];
  helpUs: PageHeaderItem[];
  ourNews: PageHeaderItem[];
  center: google.maps.LatLngLiteral = { lat: 23.0225, lng: 72.5714 };

  constructor(private router: Router) {
    this.aboutUs = aboutUs;
    this.ourActions = ourActions;
    this.preventionAndTraining = preventionAndTraining;
    this.helpUs = helpUs;
    this.ourNews = ourNews;
  }

  ngOnInit(): void {
    this.currentUrl = this.router.url;
    this.removeLeadingSlash();
    //trouver l'item correspondant à l'url actuelle dans le tableau

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.urlAfterRedirects;
        this.removeLeadingSlash(); // Remove leading slash
      }
    });
  }

  isInArray(array: PageHeaderItem[]) {
    return array.some((item) => item.url === this.currentUrl);
  }

  findPageHeaderItem(array: PageHeaderItem[]) {
    const foundItem = array.find((item) => item.url === this.currentUrl);
    console.log('foundItem:', foundItem); // Debugging line
  }

  removeLeadingSlash() {
    this.currentUrl = this.currentUrl.replace(/^\//, ''); // Remove leading slash
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    this.showScrollUpButton = scrollPosition > 200; // Show button after scrolling 200px
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
