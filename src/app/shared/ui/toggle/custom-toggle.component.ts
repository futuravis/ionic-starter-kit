import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import type { LabelVariantKey } from '../label/label-variants';

@Component({
  selector: 'custom-toggle',
  templateUrl: './custom-toggle.component.html',
  styleUrls: ['./custom-toggle.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomToggleComponent),
      multi: true,
    },
  ],
  standalone: false,
})
export class CustomToggleComponent implements ControlValueAccessor {
  @Input() label?: string;
  @Input() description?: string;
  @Input() labelVariant: LabelVariantKey = 'label';
  @Input() color: string = 'primary';
  @Input() disabled = false;
  @Input() lines: 'full' | 'inset' | 'none' = 'full';
  @Input() itemClass = '';
  @Input() toggleClass = '';
  @Input() startIcon?: string;
  @Input() value = false;

  @Output() valueChange = new EventEmitter<boolean>();

  private onChange: (value: boolean) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: boolean): void {
    this.value = !!value;
  }

  registerOnChange(fn: (value: boolean) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onToggle(event: CustomEvent<{ checked?: boolean }>) {
    const nextValue = !!event.detail?.checked;
    this.value = nextValue;
    this.valueChange.emit(nextValue);
    this.onChange(nextValue);
  }

  onBlur() {
    this.onTouched();
  }
}
