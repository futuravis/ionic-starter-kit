import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-chip',
  templateUrl: './custom-chip.component.html',
  styleUrls: ['./custom-chip.component.scss'],
  standalone: false,
})
export class CustomChipComponent {
  @Input() color: string = 'primary';
  @Input() outline = false;
  @Input() disabled = false;
  @Input() chipClass = '';
}
