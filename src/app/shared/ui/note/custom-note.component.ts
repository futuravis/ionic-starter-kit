import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-note',
  templateUrl: './custom-note.component.html',
  styleUrls: ['./custom-note.component.scss'],
  standalone: false,
})
export class CustomNoteComponent {
  @Input() color?: string;
  @Input() slot?: string;
  @Input() noteClass = '';
}
