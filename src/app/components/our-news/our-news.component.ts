import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { articles } from './data';

@Component({
  selector: 'app-our-news',
  imports: [RouterModule],
  templateUrl: './our-news.component.html',
  styleUrl: './our-news.component.scss',
})
export class OurNewsComponent {
  articles: any = articles;
}
