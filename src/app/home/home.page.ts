import { Component } from '@angular/core';

interface QuickAction {
  title: string;
  subtitle: string;
  icon: string;
  color: string;
}

interface FeatureCard {
  title: string;
  description: string;
  icon: string;
  link: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage {
  quickActions: QuickAction[] = [
    { title: 'Create Screen', subtitle: 'Layout + tokens ready', icon: 'layers-outline', color: 'primary' },
    { title: 'Add Component', subtitle: 'Use Ionic primitives', icon: 'construct-outline', color: 'secondary' },
    { title: 'Theme Check', subtitle: 'Validate contrast', icon: 'color-palette-outline', color: 'tertiary' }
  ];

  featureCards: FeatureCard[] = [
    { title: 'Menu + Tabs', description: 'Navigation patterns ready for multi-surface apps.', icon: 'navigate-outline', link: '/tabs/home' },
    { title: 'Typography', description: 'Heading scale, body styles, and utility classes.', icon: 'text-outline', link: '/tabs/typography' },
    { title: 'Colors & Theming', description: 'Brand, semantic, and neutral palettes.', icon: 'color-palette-outline', link: '/tabs/colors' },
    { title: 'Component Gallery', description: 'Forms, lists, chips, and feedback in one place.', icon: 'apps-outline', link: '/tabs/components' }
  ];
}
