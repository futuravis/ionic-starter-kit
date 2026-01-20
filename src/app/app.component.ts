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

  utilityPages = [
    { title: 'Settings', url: '/tabs/settings', icon: 'settings-outline', subtitle: 'Preferences & system' }
  ];

  constructor() {}
}
