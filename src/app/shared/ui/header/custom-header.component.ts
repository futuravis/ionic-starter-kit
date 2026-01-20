import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.scss'],
  standalone: false,
})
export class CustomHeaderComponent {
  @Input() collapse?: 'condense' | 'fade';
  @Input() translucent = false;
  @Input() mode?: 'ios' | 'md';
  @Input() headerClass = '';
}
