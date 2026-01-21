import { Component, Input } from '@angular/core';

type RouterDirection = 'forward' | 'back' | 'root';

@Component({
  selector: 'custom-item',
  templateUrl: './custom-item.component.html',
  styleUrls: ['./custom-item.component.scss'],
  standalone: false,
})
export class CustomItemComponent {
  @Input() lines: 'full' | 'inset' | 'none' = 'full';
  @Input() button = false;
  @Input() detail = false;
  @Input() href?: string;
  @Input() routerLink?: string | any[];
  @Input() routerDirection?: RouterDirection;
  @Input() disabled = false;
  @Input() color?: string;
  @Input() itemClass = '';
}
