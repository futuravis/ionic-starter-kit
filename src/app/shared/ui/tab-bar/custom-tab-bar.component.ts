import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-tab-bar',
  templateUrl: './custom-tab-bar.component.html',
  styleUrls: ['./custom-tab-bar.component.scss'],
  standalone: false,
})
export class CustomTabBarComponent {
  @Input() slot: 'top' | 'bottom' = 'bottom';
  @Input() color?: string;
  @Input() tabBarClass = '';
}
