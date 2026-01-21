import { Component, EventEmitter, Input, Output } from '@angular/core';
import type { ActionSheetButton } from '@ionic/angular';

@Component({
  selector: 'custom-action-sheet',
  templateUrl: './custom-action-sheet.component.html',
  styleUrls: ['./custom-action-sheet.component.scss'],
  standalone: false,
})
export class CustomActionSheetComponent {
  @Input() isOpen = false;
  @Input() header?: string;
  @Input() subHeader?: string;
  @Input() buttons?: ActionSheetButton[];
  @Input() cssClass?: string | string[];
  @Input() backdropDismiss = true;
  @Input() keyboardClose = true;
  @Input() translucent = false;
  @Input() trigger?: string;

  @Output() didDismiss = new EventEmitter<CustomEvent>();
  @Output() didPresent = new EventEmitter<CustomEvent>();
}
