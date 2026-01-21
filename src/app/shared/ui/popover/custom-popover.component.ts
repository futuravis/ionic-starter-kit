import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'custom-popover',
  templateUrl: './custom-popover.component.html',
  styleUrls: ['./custom-popover.component.scss'],
  standalone: false,
})
export class CustomPopoverComponent {
  @Input() isOpen = false;
  @Input() trigger?: string;
  @Input() event?: Event;
  @Input() side?: 'top' | 'bottom' | 'start' | 'end';
  @Input() alignment?: 'start' | 'center' | 'end';
  @Input() size?: 'auto' | 'cover';
  @Input() cssClass?: string | string[];
  @Input() showBackdrop = true;
  @Input() backdropDismiss = true;
  @Input() translucent = false;
  @Input() animated = true;

  @Output() didDismiss = new EventEmitter<CustomEvent>();
  @Output() didPresent = new EventEmitter<CustomEvent>();
}
