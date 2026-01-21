import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-infinite-scroll-content',
  templateUrl: './custom-infinite-scroll-content.component.html',
  styleUrls: ['./custom-infinite-scroll-content.component.scss'],
  standalone: false,
})
export class CustomInfiniteScrollContentComponent {
  @Input() loadingSpinner?: string;
  @Input() loadingText?: string;
  @Input() contentClass = '';
}
