import { Component } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';

@Component({
  selector: 'app-testimony',
  imports: [YouTubePlayerModule],
  templateUrl: './testimony.component.html',
  styleUrl: './testimony.component.scss',
})
export class TestimonyComponent {
  apiLoaded = false;
  videoId = '-Zx6SE-rY-I';

  ngOnInit() {
    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }
}
