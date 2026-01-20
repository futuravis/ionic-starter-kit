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
    { title: 'Home', url: '/tabs/home', icon: 'home-outline' },
    { title: 'Components', url: '/tabs/components', icon: 'apps-outline' },
    { title: 'Settings', url: '/tabs/settings', icon: 'settings-outline' }
  ];

  constructor() {}
}
