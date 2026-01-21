import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-accordion',
  templateUrl: './custom-accordion.component.html',
  styleUrls: ['./custom-accordion.component.scss'],
  standalone: false,
})
export class CustomAccordionComponent {
  @Input() value?: string;
  @Input() toggleIcon?: string;
  @Input() toggleIconSlot?: 'start' | 'end';
  @Input() disabled = false;
  @Input() readonly = false;
  @Input() accordionClass = '';
}
