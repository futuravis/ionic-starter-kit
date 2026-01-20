import { Component } from '@angular/core';

interface ColorCard {
  name: string;
  description: string;
  variable: string;
  hex: string;
  rgb: string;
  color: string;
}

@Component({
  selector: 'app-colors',
  templateUrl: './colors.page.html',
  styleUrls: ['./colors.page.scss'],
  standalone: false,
})
export class ColorsPage {
  activeTab = 'palette';

  brandColors: ColorCard[] = [
    {
      name: 'Primary',
      description: 'Main brand color, primary actions, links, active states',
      variable: '--ion-color-primary',
      hex: '#0275cf',
      rgb: '2, 117, 207',
      color: 'primary'
    },
    {
      name: 'Secondary',
      description: 'Supporting brand color, highlights',
      variable: '--ion-color-secondary',
      hex: '#ff9f1c',
      rgb: '255, 159, 28',
      color: 'secondary'
    },
    {
      name: 'Tertiary',
      description: 'Accent color, special highlights, call-to-actions',
      variable: '--ion-color-tertiary',
      hex: '#1f9d8a',
      rgb: '31, 157, 138',
      color: 'tertiary'
    }
  ];

  semanticColors: ColorCard[] = [
    {
      name: 'Success',
      description: 'Success states, confirmations, positive feedback',
      variable: '--ion-color-success',
      hex: '#22c55e',
      rgb: '34, 197, 94',
      color: 'success'
    },
    {
      name: 'Warning',
      description: 'Warnings, cautions, alerts that need attention',
      variable: '--ion-color-warning',
      hex: '#f7b731',
      rgb: '247, 183, 49',
      color: 'warning'
    },
    {
      name: 'Danger',
      description: 'Error states, destructive actions, critical alerts',
      variable: '--ion-color-danger',
      hex: '#ef476f',
      rgb: '239, 71, 111',
      color: 'danger'
    }
  ];

  neutralColors: ColorCard[] = [
    {
      name: 'Light',
      description: 'Light backgrounds, subtle borders, disabled states',
      variable: '--ion-color-light',
      hex: '#f6f7fb',
      rgb: '246, 247, 251',
      color: 'light'
    },
    {
      name: 'Medium',
      description: 'Secondary text, placeholder text, inactive elements',
      variable: '--ion-color-medium',
      hex: '#8d96ad',
      rgb: '141, 150, 173',
      color: 'medium'
    },
    {
      name: 'Dark',
      description: 'Primary text, dark backgrounds, high contrast elements',
      variable: '--ion-color-dark',
      hex: '#141a2e',
      rgb: '20, 26, 46',
      color: 'dark'
    }
  ];

  usageNotes = [
    'Use primary for main actions and selection states.',
    'Pair semantic colors with iconography for accessible feedback.',
    'Use neutral tones for structure, dividers, and background layers.',
    'Maintain AA contrast ratios across light and dark modes.'
  ];
}
