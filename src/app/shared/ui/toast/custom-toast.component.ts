import { Component, EventEmitter, Input, Output } from '@angular/core';
import type { ToastButton, ToastLayout } from '@ionic/angular';

@Component({
  selector: 'custom-toast',
  templateUrl: './custom-toast.component.html',
  styleUrls: ['./custom-toast.component.scss'],
  standalone: false,
})
export class CustomToastComponent {
  @Input() isOpen = false;
  @Input() message?: string;
  @Input() color?: string;
  @Input() duration?: number;
  @Input() position?: 'top' | 'middle' | 'bottom';
  @Input() icon?: string;
  @Input() buttons?: ToastButton[];
  @Input() layout?: ToastLayout;
  @Input() cssClass?: string | string[];
  @Input() keyboardClose = true;
  @Input() trigger?: string;

  @Output() didDismiss = new EventEmitter<CustomEvent>();
  @Output() didPresent = new EventEmitter<CustomEvent>();
}
