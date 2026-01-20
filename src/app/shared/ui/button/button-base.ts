import { Directive, Input } from '@angular/core';

type RouterDirection = 'forward' | 'back' | 'root';

@Directive()
export class ButtonBase {
  @Input() color: string = 'primary';
  @Input() expand?: 'block' | 'full';
  @Input() size?: 'small' | 'default' | 'large';
  @Input() disabled = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() routerLink?: string | any[];
  @Input() routerDirection?: RouterDirection;
  @Input() href?: string;
  @Input() target?: string;
  @Input() strong?: boolean;
  @Input() shape?: 'round';
  @Input() ariaLabel?: string;
  @Input() buttonClass = '';

  protected variantClass = '';

  get computedClass(): string {
    return [this.variantClass, this.buttonClass].filter(Boolean).join(' ');
  }
}
