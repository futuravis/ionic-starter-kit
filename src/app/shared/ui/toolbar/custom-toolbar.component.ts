import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-toolbar',
  templateUrl: './custom-toolbar.component.html',
  styleUrls: ['./custom-toolbar.component.scss'],
  standalone: false,
})
export class CustomToolbarComponent {
  @Input() color?: string;
  @Input() mode?: 'ios' | 'md';
  @Input() toolbarClass = '';
}
