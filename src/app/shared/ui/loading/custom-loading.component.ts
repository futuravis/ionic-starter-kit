import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'custom-loading',
  templateUrl: './custom-loading.component.html',
  styleUrls: ['./custom-loading.component.scss'],
  standalone: false,
})
export class CustomLoadingComponent {
  @Input() isOpen = false;
  @Input() message?: string;
  @Input() duration?: number;
  @Input() spinner?: 'lines' | 'lines-small' | 'bubbles' | 'circles' | 'crescent' | 'dots' | 'circular' | 'lines-sharp';
  @Input() cssClass?: string | string[];
  @Input() showBackdrop = true;
  @Input() backdropDismiss = false;
  @Input() keyboardClose = true;
  @Input() trigger?: string;

  @Output() didDismiss = new EventEmitter<Event>();
  @Output() didPresent = new EventEmitter<Event>();
}
