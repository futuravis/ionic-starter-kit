import { Component, Input } from '@angular/core';

type RouterDirection = 'forward' | 'back' | 'root';

@Component({
  selector: 'custom-list-item',
  templateUrl: './custom-list-item.component.html',
  styleUrls: ['./custom-list-item.component.scss'],
  standalone: false,
})
export class CustomListItemComponent {
  @Input() title = '';
  @Input() subtitle?: string;
  @Input() note?: string;
  @Input() startIcon?: string;
  @Input() endIcon?: string;
  @Input() avatarSrc?: string;
  @Input() avatarAlt = 'Avatar';
  @Input() badge?: string;
  @Input() badgeColor: string = 'primary';
  @Input() lines: 'full' | 'inset' | 'none' = 'full';
  @Input() button = false;
  @Input() detail = false;
  @Input() routerLink?: string | any[];
  @Input() routerDirection?: RouterDirection;
  @Input() href?: string;
  @Input() target?: string;
  @Input() disabled = false;
  @Input() itemClass = '';
}
