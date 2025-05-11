import { Component } from '@angular/core';
import { ArticlesComponent } from './articles/articles.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@Component({
  selector: 'app-our-news',
  imports: [ArticlesComponent, SearchBarComponent],
  templateUrl: './our-news.component.html',
  styleUrl: './our-news.component.scss',
})
export class OurNewsComponent {}
