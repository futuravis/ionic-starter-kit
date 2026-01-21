import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-refresher-content',
  templateUrl: './custom-refresher-content.component.html',
  styleUrls: ['./custom-refresher-content.component.scss'],
  standalone: false,
})
export class CustomRefresherContentComponent {
  @Input() pullingIcon?: string;
  @Input() pullingText?: string;
  @Input() refreshingSpinner?: string;
  @Input() refreshingText?: string;
  @Input() refresherContentClass = '';
}
