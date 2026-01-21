import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-item-option',
  templateUrl: './custom-item-option.component.html',
  styleUrls: ['./custom-item-option.component.scss'],
  standalone: false,
})
export class CustomItemOptionComponent {
  @Input() color?: string;
  @Input() expand?: 'full' | 'block';
  @Input() disabled = false;
  @Input() optionClass = '';
  @Input() icon?: string;
  @Input() label?: string;
}
