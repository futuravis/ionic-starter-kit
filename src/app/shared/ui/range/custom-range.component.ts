import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import type { LabelVariantKey } from '../label/label-variants';

export type RangeValue = number | { lower: number; upper: number } | null | undefined;

@Component({
  selector: 'custom-range',
  templateUrl: './custom-range.component.html',
  styleUrls: ['./custom-range.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomRangeComponent),
      multi: true,
    },
  ],
  standalone: false,
})
export class CustomRangeComponent implements ControlValueAccessor {
  @Input() label?: string;
  @Input() labelVariant: LabelVariantKey = 'label';
  @Input() labelPosition: 'stacked' | 'floating' | 'fixed' = 'stacked';
  @Input() min = 0;
  @Input() max = 100;
  @Input() step = 1;
  @Input() snaps = false;
  @Input() ticks = false;
  @Input() pin = false;
  @Input() dualKnobs = false;
  @Input() color: string = 'primary';
  @Input() disabled = false;
  @Input() lines: 'full' | 'inset' | 'none' = 'full';
  @Input() itemClass = '';
  @Input() rangeClass = '';
  @Input() value: RangeValue = 0;

  @Output() valueChange = new EventEmitter<RangeValue>();

  private onChange: (value: RangeValue) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: RangeValue): void {
    this.value = value ?? 0;
  }

  registerOnChange(fn: (value: RangeValue) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onRangeChange(event: CustomEvent<{ value?: RangeValue }>) {
    const nextValue = event.detail?.value ?? 0;
    this.value = nextValue;
    this.valueChange.emit(nextValue);
    this.onChange(nextValue);
  }

  onBlur() {
    this.onTouched();
  }
}
