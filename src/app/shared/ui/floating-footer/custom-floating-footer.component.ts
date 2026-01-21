import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-floating-footer',
  templateUrl: './custom-floating-footer.component.html',
  styleUrls: ['./custom-floating-footer.component.scss'],
  standalone: false,
})
export class CustomFloatingFooterComponent {
  @Input() footerClass = '';
  @Input() innerClass = '';
}
