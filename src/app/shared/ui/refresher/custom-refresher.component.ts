import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

@Component({
  selector: 'custom-refresher',
  templateUrl: './custom-refresher.component.html',
  styleUrls: ['./custom-refresher.component.scss'],
  standalone: false,
})
export class CustomRefresherComponent {
  @Input() disabled = false;
  @Input() pullFactor?: number;
  @Input() pullMin?: number;
  @Input() pullMax?: number;
  @Input() slot = 'fixed';
  @Input() refresherClass = '';

  @Output() refresh = new EventEmitter<CustomEvent>();

  @HostBinding('attr.slot')
  get hostSlot(): string {
    return this.slot;
  }
}
