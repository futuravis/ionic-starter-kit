import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-input-password-toggle',
  templateUrl: './custom-input-password-toggle.component.html',
  styleUrls: ['./custom-input-password-toggle.component.scss'],
  standalone: false,
})
export class CustomInputPasswordToggleComponent {
  @Input() color?: string;
  @Input() slot: 'start' | 'end' = 'end';
  @Input() toggleClass = '';
  @Input() ariaLabel?: string;
}
