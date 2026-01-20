import { Component, Input } from '@angular/core';

type TabLayout = 'icon-top' | 'icon-bottom' | 'icon-start' | 'icon-end' | 'label-hide';

@Component({
  selector: 'custom-tab-button',
  templateUrl: './custom-tab-button.component.html',
  styleUrls: ['./custom-tab-button.component.scss'],
  standalone: false,
})
export class CustomTabButtonComponent {
  @Input() tab?: string;
  @Input() href?: string;
  @Input() layout?: TabLayout;
  @Input() disabled = false;
  @Input() icon?: string;
  @Input() label?: string;
  @Input() tabButtonClass = '';
}
