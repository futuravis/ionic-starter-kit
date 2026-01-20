import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss'],
  standalone: false,
})
export class CustomCardComponent {
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() cardClass = '';
}
