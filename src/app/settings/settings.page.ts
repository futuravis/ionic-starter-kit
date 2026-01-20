import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: false,
})
export class SettingsPage implements OnInit {
  notifications = true;
  analytics = false;
  themeMode = 'system';
  textScale = 1;
  themeOptions = [
    { value: 'system', label: 'System' },
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' },
  ];

  private readonly themeStorageKey = 'starter-kit-theme';

  ngOnInit(): void {
    const savedTheme = localStorage.getItem(this.themeStorageKey);
    if (savedTheme) {
      this.themeMode = savedTheme;
    }
    this.applyTheme(this.themeMode);
  }

  onThemeChange(mode: string | number): void {
    const nextMode = String(mode || 'system');
    this.themeMode = nextMode;
    localStorage.setItem(this.themeStorageKey, nextMode);
    this.applyTheme(nextMode);
  }

  private applyTheme(mode: string): void {
    const root = document.documentElement;
    const body = document.body;

    if (mode === 'dark') {
      root.setAttribute('data-theme', 'dark');
      body.setAttribute('data-theme', 'dark');
      return;
    }

    if (mode === 'light') {
      root.setAttribute('data-theme', 'light');
      body.setAttribute('data-theme', 'light');
      return;
    }

    root.removeAttribute('data-theme');
    body.removeAttribute('data-theme');
  }
}
