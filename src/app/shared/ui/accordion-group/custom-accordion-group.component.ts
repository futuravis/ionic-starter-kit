import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-accordion-group',
  templateUrl: './custom-accordion-group.component.html',
  styleUrls: ['./custom-accordion-group.component.scss'],
  standalone: false,
})
export class CustomAccordionGroupComponent {
  @Input() animated?: boolean;
  @Input() disabled = false;
  @Input() expand?: 'inset' | 'compact';
  @Input() multiple = false;
  @Input() readonly = false;
  @Input() value?: string | string[];
  @Input() groupClass = '';
}
