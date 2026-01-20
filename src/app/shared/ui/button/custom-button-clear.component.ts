import { Component } from '@angular/core';
import { ButtonBase } from './button-base';
import { BUTTON_VARIANTS } from './button-variants';

@Component({
  selector: 'custom-button-clear',
  templateUrl: './custom-button-clear.component.html',
  styleUrls: ['./custom-button-clear.component.scss'],
  standalone: false,
})
export class CustomButtonClearComponent extends ButtonBase {
  readonly variant = BUTTON_VARIANTS.clear;

  constructor() {
    super();
    this.variantClass = this.variant.className;
  }
}
