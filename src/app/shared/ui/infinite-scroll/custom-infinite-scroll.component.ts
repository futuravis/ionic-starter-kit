import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'custom-infinite-scroll',
  templateUrl: './custom-infinite-scroll.component.html',
  styleUrls: ['./custom-infinite-scroll.component.scss'],
  standalone: false,
})
export class CustomInfiniteScrollComponent {
  @Input() disabled = false;
  @Input() position?: 'top' | 'bottom';
  @Input() threshold?: string;
  @Input() infiniteClass = '';

  @Output() infinite = new EventEmitter<CustomEvent>();
}
