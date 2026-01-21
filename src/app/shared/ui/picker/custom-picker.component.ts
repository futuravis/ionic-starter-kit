import { Component, EventEmitter, Input, Output } from '@angular/core';
import type { PickerButton, PickerColumn } from '@ionic/angular';

@Component({
  selector: 'custom-picker',
  templateUrl: './custom-picker.component.html',
  styleUrls: ['./custom-picker.component.scss'],
  standalone: false,
})
export class CustomPickerComponent {
  @Input() isOpen = false;
  @Input() columns?: PickerColumn[];
  @Input() buttons?: PickerButton[];
  @Input() cssClass?: string | string[];
  @Input() backdropDismiss = true;
  @Input() trigger?: string;

  @Output() didDismiss = new EventEmitter<CustomEvent>();
  @Output() didPresent = new EventEmitter<CustomEvent>();
}
