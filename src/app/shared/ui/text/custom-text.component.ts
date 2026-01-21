import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-text',
  templateUrl: './custom-text.component.html',
  styleUrls: ['./custom-text.component.scss'],
  standalone: false,
})
export class CustomTextComponent {
  @Input() color?: string;
  @Input() textClass = '';
}
