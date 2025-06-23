import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  counter = 0;
  intervalId: NodeJS.Timeout | undefined;
  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.counter++;
    }, 1000);
  }
}
