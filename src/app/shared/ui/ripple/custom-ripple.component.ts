import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-ripple',
  templateUrl: './custom-ripple.component.html',
  styleUrls: ['./custom-ripple.component.scss'],
  standalone: false,
})
export class CustomRippleComponent {
  @Input() type: 'bounded' | 'unbounded' = 'bounded';
  @Input() rippleClass = '';
}
