import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { articles } from '../data';

@Component({
  selector: 'app-our-news-detail',
  imports: [],
  templateUrl: './our-news-detail.component.html',
  styleUrl: './our-news-detail.component.scss',
})
export class OurNewsDetailComponent {
  article: any = {};
  constructor(private router: Router) {}

  ngOnInit(): void {
    const articleId = parseInt(this.router.url.split('/')[2]);
    this.article = articles.find((article) => article.id === articleId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
