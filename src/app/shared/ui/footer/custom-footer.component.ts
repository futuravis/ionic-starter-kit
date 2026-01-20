import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-footer',
  templateUrl: './custom-footer.component.html',
  styleUrls: ['./custom-footer.component.scss'],
  standalone: false,
})
export class CustomFooterComponent {
  @Input() translucent = false;
  @Input() mode?: 'ios' | 'md';
  @Input() footerClass = '';
}
