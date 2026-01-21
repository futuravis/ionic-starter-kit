import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss'],
  standalone: false,
})
export class CustomModalComponent {
  @Input() isOpen = false;
  @Input() trigger?: string;
  @Input() presentingElement?: HTMLElement;
  @Input() canDismiss?: boolean | (() => Promise<boolean>);
  @Input() backdropDismiss = true;
  @Input() showBackdrop = true;
  @Input() handle?: boolean;
  @Input() initialBreakpoint?: number;
  @Input() breakpoints?: number[];
  @Input() cssClass?: string | string[];
  @Input() animated = true;

  @Output() didDismiss = new EventEmitter<Event>();
  @Output() didPresent = new EventEmitter<Event>();
}
