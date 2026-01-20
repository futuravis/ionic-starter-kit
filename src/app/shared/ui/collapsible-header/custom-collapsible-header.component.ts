import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'custom-collapsible-header',
  templateUrl: './custom-collapsible-header.component.html',
  styleUrls: ['./custom-collapsible-header.component.scss'],
  standalone: false,
})
export class CustomCollapsibleHeaderComponent {
  @Input() title?: string;
  @Input() showMenu = true;
  @Input() showSearch = true;
  @Input() showFilter = true;
  @Input() searchIcon = 'search-outline';
  @Input() filterIcon = 'filter-outline';
  @Input() expandedToolbarClass = '';
  @Input() condensedToolbarClass = '';
  @Input() contentClass = '';

  @Output() searchClick = new EventEmitter<void>();
  @Output() filterClick = new EventEmitter<void>();

  onSearchClick(): void {
    this.searchClick.emit();
  }

  onFilterClick(): void {
    this.filterClick.emit();
  }
}
