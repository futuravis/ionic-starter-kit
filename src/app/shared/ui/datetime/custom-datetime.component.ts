import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import type { LabelVariantKey } from '../label/label-variants';

export type DatetimeValue = string | string[] | null | undefined;

@Component({
  selector: 'custom-datetime',
  templateUrl: './custom-datetime.component.html',
  styleUrls: ['./custom-datetime.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomDatetimeComponent),
      multi: true,
    },
  ],
  standalone: false,
})
export class CustomDatetimeComponent implements ControlValueAccessor {
  @Input() label?: string;
  @Input() labelVariant: LabelVariantKey = 'label';
  @Input() labelPosition: 'stacked' | 'floating' | 'fixed' = 'stacked';
  @Input() presentation: 'date' | 'time' | 'date-time' | 'time-date' | 'month' | 'month-year' | 'year' = 'date';
  @Input() value: DatetimeValue = '';
  @Input() min?: string;
  @Input() max?: string;
  @Input() showDefaultButtons = false;
  @Input() disabled = false;
  @Input() datetimeClass = '';

  @Output() valueChange = new EventEmitter<DatetimeValue>();

  private onChange: (value: DatetimeValue) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: DatetimeValue): void {
    this.value = value ?? '';
  }

  registerOnChange(fn: (value: DatetimeValue) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onDatetimeChange(event: CustomEvent<{ value?: DatetimeValue }>) {
    const nextValue = event.detail?.value ?? '';
    this.value = nextValue;
    this.valueChange.emit(nextValue);
    this.onChange(nextValue);
  }

  onBlur() {
    this.onTouched();
  }
}
