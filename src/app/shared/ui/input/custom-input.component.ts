import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import type { LabelVariantKey } from '../label/label-variants';

export type InputValue = string | number | null | undefined;

@Component({
  selector: 'custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true,
    },
  ],
  standalone: false,
})
export class CustomInputComponent implements ControlValueAccessor {
  @Input() label?: string;
  @Input() labelVariant: LabelVariantKey = 'label';
  @Input() labelPosition: 'stacked' | 'floating' | 'fixed' = 'stacked';
  @Input() helperText?: string;
  @Input() errorText?: string;
  @Input() placeholder?: string;
  @Input() type: string = 'text';
  @Input() inputMode?: string;
  @Input() clearInput = false;
  @Input() disabled = false;
  @Input() readonly = false;
  @Input() required = false;
  @Input() lines: 'full' | 'inset' | 'none' = 'full';
  @Input() inputId = '';
  @Input() name?: string;
  @Input() autocomplete?: string;
  @Input() enterKeyHint?: string;
  @Input() autocapitalize?: string;
  @Input() inputClass = '';
  @Input() itemClass = '';
  @Input() value: InputValue = '';

  @Output() valueChange = new EventEmitter<InputValue>();

  private onChange: (value: InputValue) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: InputValue): void {
    this.value = value ?? '';
  }

  registerOnChange(fn: (value: InputValue) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInput(event: CustomEvent<{ value?: InputValue }>) {
    const nextValue = event.detail?.value ?? '';
    this.value = nextValue;
    this.valueChange.emit(nextValue);
    this.onChange(nextValue);
  }

  onBlur() {
    this.onTouched();
  }
}
