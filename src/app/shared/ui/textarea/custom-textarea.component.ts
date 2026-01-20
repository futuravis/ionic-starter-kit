import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import type { LabelVariantKey } from '../label/label-variants';

export type TextareaValue = string | null | undefined;

@Component({
  selector: 'custom-textarea',
  templateUrl: './custom-textarea.component.html',
  styleUrls: ['./custom-textarea.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomTextareaComponent),
      multi: true,
    },
  ],
  standalone: false,
})
export class CustomTextareaComponent implements ControlValueAccessor {
  @Input() label?: string;
  @Input() labelVariant: LabelVariantKey = 'label';
  @Input() labelPosition: 'stacked' | 'floating' | 'fixed' = 'stacked';
  @Input() helperText?: string;
  @Input() errorText?: string;
  @Input() placeholder?: string;
  @Input() autoGrow = false;
  @Input() rows = 3;
  @Input() cols?: number;
  @Input() maxlength?: number;
  @Input() minlength?: number;
  @Input() disabled = false;
  @Input() readonly = false;
  @Input() required = false;
  @Input() lines: 'full' | 'inset' | 'none' = 'full';
  @Input() textareaId = '';
  @Input() name?: string;
  @Input() autocapitalize?: string;
  @Input() textareaClass = '';
  @Input() itemClass = '';
  @Input() value: TextareaValue = '';

  @Output() valueChange = new EventEmitter<TextareaValue>();

  private onChange: (value: TextareaValue) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: TextareaValue): void {
    this.value = value ?? '';
  }

  registerOnChange(fn: (value: TextareaValue) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInput(event: CustomEvent<{ value?: TextareaValue }>) {
    const nextValue = event.detail?.value ?? '';
    this.value = nextValue;
    this.valueChange.emit(nextValue);
    this.onChange(nextValue);
  }

  onBlur() {
    this.onTouched();
  }
}
