import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-badge',
  templateUrl: './custom-badge.component.html',
  styleUrls: ['./custom-badge.component.scss'],
  standalone: false,
})
export class CustomBadgeComponent {
  @Input() color: string = 'primary';
  @Input() badgeClass = '';
}
