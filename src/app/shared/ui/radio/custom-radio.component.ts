import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-radio',
  templateUrl: './custom-radio.component.html',
  styleUrls: ['./custom-radio.component.scss'],
  standalone: false,
})
export class CustomRadioComponent {
  @Input() label?: string;
  @Input() description?: string;
  @Input() value?: string;
  @Input() color: string = 'primary';
  @Input() disabled = false;
  @Input() lines: 'full' | 'inset' | 'none' = 'full';
  @Input() itemClass = '';
  @Input() radioClass = '';
}
