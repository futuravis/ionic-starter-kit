import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export type SearchValue = string | null | undefined;

@Component({
  selector: 'custom-searchbar',
  templateUrl: './custom-searchbar.component.html',
  styleUrls: ['./custom-searchbar.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomSearchbarComponent),
      multi: true,
    },
  ],
  standalone: false,
})
export class CustomSearchbarComponent implements ControlValueAccessor {
  @Input() placeholder = 'Search';
  @Input() debounce = 0;
  @Input() animated = true;
  @Input() showCancelButton: 'never' | 'always' | 'focus' = 'never';
  @Input() showClearButton: 'never' | 'always' | 'focus' = 'focus';
  @Input() inputMode?: string;
  @Input() enterKeyHint?: string;
  @Input() autocapitalize?: string;
  @Input() disabled = false;
  @Input() searchbarClass = '';
  @Input() value: SearchValue = '';

  @Output() valueChange = new EventEmitter<SearchValue>();

  private onChange: (value: SearchValue) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: SearchValue): void {
    this.value = value ?? '';
  }

  registerOnChange(fn: (value: SearchValue) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInput(event: CustomEvent<{ value?: SearchValue }>) {
    const nextValue = event.detail?.value ?? '';
    this.value = nextValue;
    this.valueChange.emit(nextValue);
    this.onChange(nextValue);
  }

  onBlur() {
    this.onTouched();
  }
}
