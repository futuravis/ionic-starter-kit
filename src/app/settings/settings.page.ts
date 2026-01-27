import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: false,
})
export class SettingsPage implements OnInit {
  menuEnabled = true;
  notifications = true;
  analytics = false;
  themeMode = 'system';
  textScale = 1;
  themeOptions = [
    { value: 'system', label: 'System', icon: 'desktop-outline' },
    { value: 'light', label: 'Light', icon: 'sunny-outline' },
    { value: 'dark', label: 'Dark', icon: 'moon-outline' },
  ];

  private readonly themeStorageKey = 'starter-kit-theme';
  private readonly menuStorageKey = 'starter-kit-menu';

  constructor(private menuController: MenuController) {}

  ngOnInit(): void {
    const savedMenu = localStorage.getItem(this.menuStorageKey);
    if (savedMenu !== null) {
      this.menuEnabled = savedMenu === 'true';
    }
    this.menuController.enable(this.menuEnabled);

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

  onMenuToggle(enabled: boolean): void {
    this.menuEnabled = enabled;
    localStorage.setItem(this.menuStorageKey, String(enabled));
    this.menuController.enable(enabled);
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
