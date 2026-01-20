import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface SegmentOption {
  value: string | number;
  label: string;
  icon?: string;
  disabled?: boolean;
}

@Component({
  selector: 'custom-segment',
  templateUrl: './custom-segment.component.html',
  styleUrls: ['./custom-segment.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomSegmentComponent),
      multi: true,
    },
  ],
  standalone: false,
})
export class CustomSegmentComponent implements ControlValueAccessor {
  @Input() options: SegmentOption[] = [];
  @Input() color: string = 'primary';
  @Input() disabled = false;
  @Input() segmentClass = '';
  @Input() buttonClass = '';
  @Input() value: string | number = '';

  @Output() valueChange = new EventEmitter<string | number>();

  private onChange: (value: string | number) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: string | number): void {
    this.value = value ?? '';
  }

  registerOnChange(fn: (value: string | number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onSegmentChange(event: CustomEvent<{ value?: string | number }>) {
    const nextValue = event.detail?.value ?? '';
    this.value = nextValue;
    this.valueChange.emit(nextValue);
    this.onChange(nextValue);
  }

  onBlur() {
    this.onTouched();
  }
}
