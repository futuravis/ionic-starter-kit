import { Component } from '@angular/core';

interface Highlight {
  title: string;
  text: string;
  icon: string;
}

interface ComponentGroup {
  group: string;
  items: string[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage {
  searchQuery = '';

  highlights: Highlight[] = [
    { title: 'Tokenized UI', text: 'Typography and color tokens are wired into screens.', icon: 'color-palette-outline' },
    { title: 'Reusable layer', text: 'Shared UI wrappers keep styles and behavior consistent.', icon: 'layers-outline' },
    { title: 'Pattern demos', text: 'UI Library pages document core building blocks.', icon: 'albums-outline' },
  ];

  componentGroups: ComponentGroup[] = [
    { group: 'Buttons & Actions', items: ['custom-button', 'custom-button-outline', 'custom-button-clear', 'custom-fab', 'custom-fab-button', 'custom-fab-list', 'custom-ripple', 'custom-floating-footer'] },
    { group: 'Inputs', items: ['custom-input', 'custom-textarea', 'custom-select', 'custom-searchbar', 'custom-toggle', 'custom-checkbox', 'custom-radio-group', 'custom-radio', 'custom-datetime', 'custom-input-password-toggle'] },
    { group: 'Lists', items: ['custom-list', 'custom-list-header', 'custom-item', 'custom-item-sliding', 'custom-item-options', 'custom-item-option', 'custom-note', 'custom-list-item'] },
    { group: 'Media & Cards', items: ['custom-card', 'custom-avatar', 'custom-thumbnail', 'custom-text', 'custom-img', 'custom-accordion-group', 'custom-accordion'] },
    { group: 'Overlays', items: ['custom-alert', 'custom-action-sheet', 'custom-modal', 'custom-popover', 'custom-toast', 'custom-loading', 'custom-picker'] },
    { group: 'Feedback & State', items: ['custom-progress-bar', 'custom-spinner', 'custom-skeleton', 'custom-refresher', 'custom-refresher-content', 'custom-infinite-scroll', 'custom-infinite-scroll-content'] },
  ];

  get filteredGroups(): ComponentGroup[] {
    const query = this.searchQuery.trim().toLowerCase();
    if (!query) {
      return this.componentGroups;
    }

    return this.componentGroups
      .map(group => ({
        group: group.group,
        items: group.items.filter(item => item.toLowerCase().includes(query)),
      }))
      .filter(group => group.items.length > 0);
  }
}
