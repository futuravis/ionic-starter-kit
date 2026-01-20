import { Component } from '@angular/core';
import { ButtonBase } from './button-base';
import { BUTTON_VARIANTS } from './button-variants';

@Component({
  selector: 'custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss'],
  standalone: false,
})
export class CustomButtonComponent extends ButtonBase {
  readonly variant = BUTTON_VARIANTS.solid;

  constructor() {
    super();
    this.variantClass = this.variant.className;
  }
}
