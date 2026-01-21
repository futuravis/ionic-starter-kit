import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-list',
  templateUrl: './custom-list.component.html',
  styleUrls: ['./custom-list.component.scss'],
  standalone: false,
})
export class CustomListComponent {
  @Input() inset = false;
  @Input() lines?: 'full' | 'inset' | 'none';
  @Input() listClass = '';
}
