import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-back-button',
  templateUrl: './custom-back-button.component.html',
  styleUrls: ['./custom-back-button.component.scss'],
  standalone: false,
})
export class CustomBackButtonComponent {
  @Input() defaultHref?: string;
  @Input() text?: string;
  @Input() icon?: string;
  @Input() color?: string;
  @Input() mode?: 'ios' | 'md';
  @Input() backButtonClass = '';
}
