import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-avatar',
  templateUrl: './custom-avatar.component.html',
  styleUrls: ['./custom-avatar.component.scss'],
  standalone: false,
})
export class CustomAvatarComponent {
  @Input() src?: string;
  @Input() alt = 'Avatar';
  @Input() initials?: string;
  @Input() avatarClass = '';
}
