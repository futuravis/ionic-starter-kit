import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  appPages = [
    { title: 'Intro', url: '/intro', icon: 'sparkles-outline' },
    { title: 'Home', url: '/tabs/home', icon: 'home-outline' }
  ];

  designPages = [
    { title: 'Design System', url: '/tabs/components', icon: 'sparkles-outline', subtitle: 'Visual design foundation' },
    { title: 'Typography', url: '/tabs/typography', icon: 'text-outline', subtitle: 'Text styles & hierarchy' },
    { title: 'Colors & Theming', url: '/tabs/colors', icon: 'color-palette-outline', subtitle: 'Color palette & themes' }
  ];

  uiPages = [
    { title: 'UI Library', url: '/tabs/ui-library', icon: 'layers-outline', subtitle: 'Reusable component demos' },
    { title: 'Layout', url: '/tabs/ui-layout', icon: 'grid-outline', subtitle: 'Headers, toolbars, content' },
    { title: 'Collapsible Header', url: '/tabs/ui-collapsible-header', icon: 'resize-outline', subtitle: 'Silver header pattern' },
    { title: 'Navigation', url: '/tabs/ui-navigation', icon: 'navigate-outline', subtitle: 'Tabs and breadcrumbs' },
    { title: 'Actions', url: '/tabs/ui-actions', icon: 'flash-outline', subtitle: 'FABs and floating footer' },
    { title: 'Buttons', url: '/tabs/ui-buttons', icon: 'radio-button-on-outline', subtitle: 'Primary and outline buttons' },
    { title: 'Labels', url: '/tabs/ui-labels', icon: 'text-outline', subtitle: 'Label presets' },
    { title: 'Inputs', url: '/tabs/ui-inputs', icon: 'create-outline', subtitle: 'Field wrappers' },
    { title: 'Cards', url: '/tabs/ui-cards', icon: 'albums-outline', subtitle: 'Card shells' },
    { title: 'Lists', url: '/tabs/ui-lists', icon: 'list-outline', subtitle: 'List item variants' },
    { title: 'Data Display', url: '/tabs/ui-data-display', icon: 'image-outline', subtitle: 'Media and accordions' },
    { title: 'Chips & Badges', url: '/tabs/ui-chips', icon: 'pricetag-outline', subtitle: 'Metadata tags' },
    { title: 'Avatars', url: '/tabs/ui-avatars', icon: 'person-circle-outline', subtitle: 'Profile visuals' }
  ];

  utilityPages = [
    { title: 'Settings', url: '/tabs/settings', icon: 'settings-outline', subtitle: 'Preferences & system' }
  ];

  constructor() {}
}
