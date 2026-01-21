import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-list-header',
  templateUrl: './custom-list-header.component.html',
  styleUrls: ['./custom-list-header.component.scss'],
  standalone: false,
})
export class CustomListHeaderComponent {
  @Input() lines?: 'full' | 'inset' | 'none';
  @Input() color?: string;
  @Input() listHeaderClass = '';
}
