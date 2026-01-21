import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-fab',
  templateUrl: './custom-fab.component.html',
  styleUrls: ['./custom-fab.component.scss'],
  standalone: false,
})
export class CustomFabComponent {
  @Input() horizontal: 'start' | 'end' | 'center' = 'end';
  @Input() vertical: 'top' | 'bottom' | 'center' = 'bottom';
  @Input() edge = false;
  @Input() activated = false;
  @Input() fabClass = '';
}
