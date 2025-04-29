import { Component } from '@angular/core';
import { ArticlesComponent } from './articles/articles.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PageHeaderComponent } from '../page-header/page-header.component';

@Component({
  selector: 'app-our-news',
  imports: [ArticlesComponent, SearchBarComponent, PageHeaderComponent],
  templateUrl: './our-news.component.html',
  styleUrl: './our-news.component.scss',
})
export class OurNewsComponent {}
