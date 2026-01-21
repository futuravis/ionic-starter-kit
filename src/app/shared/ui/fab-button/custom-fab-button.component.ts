import { Component, Input } from '@angular/core';

type RouterDirection = 'forward' | 'back' | 'root';

@Component({
  selector: 'custom-fab-button',
  templateUrl: './custom-fab-button.component.html',
  styleUrls: ['./custom-fab-button.component.scss'],
  standalone: false,
})
export class CustomFabButtonComponent {
  @Input() color: string = 'primary';
  @Input() size?: 'small' | 'default';
  @Input() disabled = false;
  @Input() routerLink?: string | any[];
  @Input() routerDirection?: RouterDirection;
  @Input() href?: string;
  @Input() target?: string;
  @Input() ariaLabel?: string;
  @Input() fabButtonClass = '';
}
