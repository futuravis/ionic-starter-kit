import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-item-options',
  templateUrl: './custom-item-options.component.html',
  styleUrls: ['./custom-item-options.component.scss'],
  standalone: false,
})
export class CustomItemOptionsComponent {
  @Input() side: 'start' | 'end' = 'end';
  @Input() optionsClass = '';
}
