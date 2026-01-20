import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-content',
  templateUrl: './custom-content.component.html',
  styleUrls: ['./custom-content.component.scss'],
  standalone: false,
})
export class CustomContentComponent {
  @Input() fullscreen = false;
  @Input() scrollY = true;
  @Input() scrollX = false;
  @Input() color?: string;
  @Input() contentClass = '';
}
