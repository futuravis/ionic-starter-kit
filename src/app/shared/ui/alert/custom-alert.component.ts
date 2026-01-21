import { Component, EventEmitter, Input, Output } from '@angular/core';
import type { AlertButton, AlertInput } from '@ionic/angular';

@Component({
  selector: 'custom-alert',
  templateUrl: './custom-alert.component.html',
  styleUrls: ['./custom-alert.component.scss'],
  standalone: false,
})
export class CustomAlertComponent {
  @Input() isOpen = false;
  @Input() header?: string;
  @Input() subHeader?: string;
  @Input() message?: string;
  @Input() buttons?: AlertButton[] | string[];
  @Input() inputs?: AlertInput[];
  @Input() cssClass?: string | string[];
  @Input() backdropDismiss = true;
  @Input() keyboardClose = true;
  @Input() translucent = false;
  @Input() trigger?: string;

  @Output() didDismiss = new EventEmitter<Event>();
  @Output() didPresent = new EventEmitter<Event>();
}
