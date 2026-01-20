import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

interface IntroSlide {
  title: string;
  text: string;
  image: string;
  tags: string[];
}

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
  standalone: false,
})
export class IntroPage implements AfterViewInit {
  @ViewChild('track', { static: true }) track?: ElementRef<HTMLDivElement>;

  activeIndex = 0;
  slides: IntroSlide[] = [
    {
      title: 'Design-ready foundation',
      text: 'A bold Ionic Angular kit with a real layout, tokens, and patterns that scale.',
      image: 'assets/illustrations/intro-1.svg',
      tags: ['Tokens', 'Typography', 'Theme']
    },
    {
      title: 'Component showcase',
      text: 'Buttons, inputs, lists, cards, and overlays arranged in practical UI sections.',
      image: 'assets/illustrations/intro-2.svg',
      tags: ['UI library', 'Patterns', 'Forms']
    },
    {
      title: 'Ship faster',
      text: 'Menu + tabs navigation, settings page, and utility styles built in.',
      image: 'assets/illustrations/intro-3.svg',
      tags: ['Navigation', 'Layouts', 'Mobile']
    }
  ];

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    this.goTo(0, false);
  }

  onTrackScroll(): void {
    const trackEl = this.track?.nativeElement;
    if (!trackEl) {
      return;
    }

    const nextIndex = Math.round(trackEl.scrollLeft / trackEl.clientWidth);
    if (nextIndex !== this.activeIndex) {
      this.activeIndex = nextIndex;
    }
  }

  goTo(index: number, animate = true): void {
    const trackEl = this.track?.nativeElement;
    if (!trackEl) {
      return;
    }

    const left = index * trackEl.clientWidth;
    trackEl.scrollTo({ left, behavior: animate ? 'smooth' : 'auto' });
    this.activeIndex = index;
  }

  next(): void {
    if (this.activeIndex >= this.slides.length - 1) {
      this.router.navigate(['/tabs/home']);
      return;
    }

    this.goTo(this.activeIndex + 1);
  }

  skip(): void {
    this.router.navigate(['/tabs/home']);
  }
}
