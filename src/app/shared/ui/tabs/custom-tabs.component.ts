import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-tabs',
  templateUrl: './custom-tabs.component.html',
  styleUrls: ['./custom-tabs.component.scss'],
  standalone: false,
})
export class CustomTabsComponent {
  @Input() tabsClass = '';
}
