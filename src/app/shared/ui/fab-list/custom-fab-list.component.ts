import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-fab-list',
  templateUrl: './custom-fab-list.component.html',
  styleUrls: ['./custom-fab-list.component.scss'],
  standalone: false,
})
export class CustomFabListComponent {
  @Input() side: 'top' | 'bottom' | 'start' | 'end' = 'top';
  @Input() fabListClass = '';
}
