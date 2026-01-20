import { Component, Input } from '@angular/core';
import { LABEL_VARIANTS, LabelVariantKey } from './label-variants';

@Component({
  selector: 'custom-label',
  templateUrl: './custom-label.component.html',
  styleUrls: ['./custom-label.component.scss'],
  standalone: false,
})
export class CustomLabelComponent {
  @Input() variant: LabelVariantKey = 'label';
  @Input() color?: string;
  @Input() position?: 'fixed' | 'stacked' | 'floating';
  @Input() labelClass = '';
  @Input() slot?: string;
  @Input() forId?: string;

  get computedClass(): string {
    return [LABEL_VARIANTS[this.variant], this.labelClass].filter(Boolean).join(' ');
  }
}
