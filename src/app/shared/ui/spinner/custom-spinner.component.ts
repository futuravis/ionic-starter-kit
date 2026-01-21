import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-spinner',
  templateUrl: './custom-spinner.component.html',
  styleUrls: ['./custom-spinner.component.scss'],
  standalone: false,
})
export class CustomSpinnerComponent {
  @Input() name?: string;
  @Input() color?: string;
  @Input() duration?: number;
  @Input() paused = false;
  @Input() spinnerClass = '';
}
