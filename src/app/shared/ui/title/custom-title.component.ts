import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-title',
  templateUrl: './custom-title.component.html',
  styleUrls: ['./custom-title.component.scss'],
  standalone: false,
})
export class CustomTitleComponent {
  @Input() size?: 'small' | 'large' | 'default';
  @Input() color?: string;
  @Input() titleClass = '';
}
