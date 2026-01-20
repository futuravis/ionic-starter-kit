import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import type { LabelVariantKey } from '../label/label-variants';

export type SelectValue = string | number | boolean | null | undefined | (string | number)[];

@Component({
  selector: 'custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomSelectComponent),
      multi: true,
    },
  ],
  standalone: false,
})
export class CustomSelectComponent implements ControlValueAccessor {
  @Input() label?: string;
  @Input() labelVariant: LabelVariantKey = 'label';
  @Input() labelPosition: 'stacked' | 'floating' | 'fixed' = 'stacked';
  @Input() placeholder?: string;
  @Input() interface: 'action-sheet' | 'alert' | 'popover' | 'modal' = 'popover';
  @Input() multiple = false;
  @Input() disabled = false;
  @Input() required = false;
  @Input() lines: 'full' | 'inset' | 'none' = 'full';
  @Input() selectId = '';
  @Input() name?: string;
  @Input() selectClass = '';
  @Input() itemClass = '';
  @Input() value: SelectValue = '';

  @Output() valueChange = new EventEmitter<SelectValue>();

  private onChange: (value: SelectValue) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: SelectValue): void {
    this.value = value ?? '';
  }

  registerOnChange(fn: (value: SelectValue) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onSelect(event: CustomEvent<{ value?: SelectValue }>) {
    const nextValue = event.detail?.value ?? '';
    this.value = nextValue;
    this.valueChange.emit(nextValue);
    this.onChange(nextValue);
  }

  onBlur() {
    this.onTouched();
  }
}
