import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'custom-thumbnail',
  templateUrl: './custom-thumbnail.component.html',
  styleUrls: ['./custom-thumbnail.component.scss'],
  standalone: false,
})
export class CustomThumbnailComponent {
  @Input() src?: string;
  @Input() alt = 'Thumbnail';
  @Input() slot?: string;
  @Input() thumbnailClass = '';

  @HostBinding('attr.slot')
  get hostSlot(): string | undefined {
    return this.slot;
  }
}
