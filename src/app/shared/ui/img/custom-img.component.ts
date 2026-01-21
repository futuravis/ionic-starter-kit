import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-img',
  templateUrl: './custom-img.component.html',
  styleUrls: ['./custom-img.component.scss'],
  standalone: false,
})
export class CustomImgComponent {
  @Input() src?: string;
  @Input() alt = '';
  @Input() loading?: 'lazy' | 'eager';
  @Input() imgClass = '';
}
