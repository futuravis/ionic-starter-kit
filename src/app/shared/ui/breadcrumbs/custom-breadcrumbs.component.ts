import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-breadcrumbs',
  templateUrl: './custom-breadcrumbs.component.html',
  styleUrls: ['./custom-breadcrumbs.component.scss'],
  standalone: false,
})
export class CustomBreadcrumbsComponent {
  @Input() maxItems?: number;
  @Input() color?: string;
  @Input() breadcrumbsClass = '';
}
