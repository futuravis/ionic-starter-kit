import { Component, Input } from '@angular/core';

type RouterDirection = 'forward' | 'back' | 'root';

@Component({
  selector: 'custom-breadcrumb',
  templateUrl: './custom-breadcrumb.component.html',
  styleUrls: ['./custom-breadcrumb.component.scss'],
  standalone: false,
})
export class CustomBreadcrumbComponent {
  @Input() href?: string;
  @Input() routerLink?: string | any[];
  @Input() routerDirection?: RouterDirection;
  @Input() color?: string;
  @Input() breadcrumbClass = '';
}
