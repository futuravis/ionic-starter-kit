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

  private readonly themeStorageKey = 'starter-kit-theme';

  ngOnInit(): void {
    const savedTheme = localStorage.getItem(this.themeStorageKey);
    if (savedTheme) {
      this.themeMode = savedTheme;
    }
    this.applyTheme(this.themeMode);
  }

  onThemeChange(mode: string): void {
    this.themeMode = mode;
    localStorage.setItem(this.themeStorageKey, mode);
    this.applyTheme(mode);
  }

  private applyTheme(mode: string): void {
    const root = document.documentElement;

    if (mode === 'dark') {
      root.setAttribute('data-theme', 'dark');
      return;
    }

    if (mode === 'light') {
      root.setAttribute('data-theme', 'light');
      return;
    }

    root.removeAttribute('data-theme');
  }
}
