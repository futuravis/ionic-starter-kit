import { Component } from '@angular/core';
import { ButtonBase } from './button-base';
import { BUTTON_VARIANTS } from './button-variants';

@Component({
  selector: 'custom-button-outline',
  templateUrl: './custom-button-outline.component.html',
  styleUrls: ['./custom-button-outline.component.scss'],
  standalone: false,
})
export class CustomButtonOutlineComponent extends ButtonBase {
  readonly variant = BUTTON_VARIANTS.outline;

  constructor() {
    super();
    this.variantClass = this.variant.className;
  }
}
