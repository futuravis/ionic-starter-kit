import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-progress-bar',
  templateUrl: './custom-progress-bar.component.html',
  styleUrls: ['./custom-progress-bar.component.scss'],
  standalone: false,
})
export class CustomProgressBarComponent {
  @Input() value?: number;
  @Input() buffer?: number;
  @Input() type?: 'determinate' | 'indeterminate';
  @Input() color?: string;
  @Input() reversed = false;
  @Input() progressClass = '';
}
