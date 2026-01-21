import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-skeleton',
  templateUrl: './custom-skeleton.component.html',
  styleUrls: ['./custom-skeleton.component.scss'],
  standalone: false,
})
export class CustomSkeletonComponent {
  @Input() animated = true;
  @Input() skeletonClass = '';
}
