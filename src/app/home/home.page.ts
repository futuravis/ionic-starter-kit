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

interface DemoInfo {
  name: string;
  group: string;
  description: string;
}

interface ScrollDetail {
  scrollTop: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage {
  searchQuery = '';
  isCollapsed = false;
  demoOpen = false;
  selectedDemo: DemoInfo | null = null;

  private readonly collapseThreshold = 140;

  highlights: Highlight[] = [
    { title: 'Tokenized UI', text: 'Typography and color tokens are wired into screens.', icon: 'color-palette-outline' },
    { title: 'Ionic-first UI', text: 'Ionic components plus global tokens keep styles consistent.', icon: 'layers-outline' },
    { title: 'Pattern demos', text: 'UI Library pages document core building blocks.', icon: 'albums-outline' },
  ];

  componentGroups: ComponentGroup[] = [
    { group: 'Buttons & Actions', items: ['ion-button', 'ion-icon', 'ion-fab', 'ion-fab-button', 'ion-fab-list', 'ion-chip', 'ion-ripple-effect'] },
    { group: 'Inputs', items: ['ion-input', 'ion-textarea', 'ion-select', 'ion-searchbar', 'ion-toggle', 'ion-checkbox', 'ion-radio-group', 'ion-radio', 'ion-datetime', 'ion-input-password-toggle', 'ion-segment', 'ion-range'] },
    { group: 'Lists', items: ['ion-list', 'ion-list-header', 'ion-item', 'ion-item-sliding', 'ion-item-options', 'ion-item-option', 'ion-label', 'ion-note'] },
    { group: 'Media & Cards', items: ['ion-card', 'ion-card-header', 'ion-card-title', 'ion-card-subtitle', 'ion-card-content', 'ion-avatar', 'ion-thumbnail', 'ion-text', 'ion-img', 'ion-accordion-group', 'ion-accordion'] },
    { group: 'Overlays', items: ['ion-alert', 'ion-action-sheet', 'ion-modal', 'ion-popover', 'ion-toast', 'ion-loading', 'ion-picker'] },
    { group: 'Feedback & State', items: ['ion-progress-bar', 'ion-spinner', 'ion-skeleton-text', 'ion-refresher', 'ion-refresher-content', 'ion-infinite-scroll', 'ion-infinite-scroll-content'] },
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

  onScroll(event: CustomEvent<ScrollDetail>) {
    const nextCollapsed = event.detail.scrollTop > this.collapseThreshold;
    if (this.isCollapsed !== nextCollapsed) {
      this.isCollapsed = nextCollapsed;
    }
  }

  openDemo(group: string, item: string) {
    this.selectedDemo = {
      name: item,
      group,
      description: `Open the ${item} demo in Libraries > ${group}.`,
    };
    this.demoOpen = true;
  }

  closeDemo() {
    this.demoOpen = false;
    this.selectedDemo = null;
  }
}
