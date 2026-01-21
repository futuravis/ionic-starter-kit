import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-item-sliding',
  templateUrl: './custom-item-sliding.component.html',
  styleUrls: ['./custom-item-sliding.component.scss'],
  standalone: false,
})
export class CustomItemSlidingComponent {
  @Input() disabled = false;
  @Input() slidingClass = '';
}
