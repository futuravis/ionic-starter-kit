import { Component } from '@angular/core';

interface TypeSpec {
  label: string;
  title: string;
  subtitle: string;
  size: string;
  weight: string;
  lineHeight: string;
  tag: string;
}

interface BodySpec {
  label: string;
  subtitle: string;
  size: string;
  weight: string;
  lineHeight: string;
  className: string;
}

interface ColorSpec {
  title: string;
  subtitle: string;
  color: string;
}

@Component({
  selector: 'app-typography',
  templateUrl: './typography.page.html',
  styleUrls: ['./typography.page.scss'],
  standalone: false,
})
export class TypographyPage {
  headingSpecs: TypeSpec[] = [
    {
      label: 'H1',
      title: 'Welcome to Dashboard',
      subtitle: 'Page titles, hero headings',
      size: '32px',
      weight: '700',
      lineHeight: '40px',
      tag: 'h1'
    },
    {
      label: 'H2',
      title: 'Getting Started',
      subtitle: 'Section titles',
      size: '28px',
      weight: '700',
      lineHeight: '36px',
      tag: 'h2'
    },
    {
      label: 'H3',
      title: 'User Profile',
      subtitle: 'Subsection titles',
      size: '24px',
      weight: '600',
      lineHeight: '32px',
      tag: 'h3'
    },
    {
      label: 'H4',
      title: 'Recent Activity',
      subtitle: 'Card titles, list headers',
      size: '20px',
      weight: '600',
      lineHeight: '28px',
      tag: 'h4'
    },
    {
      label: 'H5',
      title: 'Settings',
      subtitle: 'Small headers',
      size: '18px',
      weight: '600',
      lineHeight: '24px',
      tag: 'h5'
    },
    {
      label: 'H6',
      title: 'Category',
      subtitle: 'Overlines, labels',
      size: '16px',
      weight: '600',
      lineHeight: '22px',
      tag: 'h6'
    }
  ];

  bodySpecs: BodySpec[] = [
    {
      label: 'Body Large',
      subtitle: 'Lead paragraphs, introductions',
      size: '18px',
      weight: '400',
      lineHeight: '28px',
      className: 'app-body-lg'
    },
    {
      label: 'Body',
      subtitle: 'Default body text, paragraphs',
      size: '16px',
      weight: '400',
      lineHeight: '24px',
      className: 'app-body'
    },
    {
      label: 'Body Small',
      subtitle: 'Secondary text, captions',
      size: '14px',
      weight: '400',
      lineHeight: '20px',
      className: 'app-body-sm'
    },
    {
      label: 'Caption',
      subtitle: 'Footnotes, hints, metadata',
      size: '12px',
      weight: '500',
      lineHeight: '16px',
      className: 'app-caption'
    }
  ];

  colorVariants: ColorSpec[] = [
    { title: 'Primary', subtitle: 'Brand color, main actions', color: 'primary' },
    { title: 'Secondary', subtitle: 'Supporting brand color', color: 'secondary' },
    { title: 'Tertiary', subtitle: 'Accent highlights', color: 'tertiary' },
    { title: 'Success', subtitle: 'Success states, confirmations', color: 'success' },
    { title: 'Warning', subtitle: 'Warnings, cautions', color: 'warning' },
    { title: 'Danger', subtitle: 'Errors, destructive actions', color: 'danger' },
    { title: 'Medium', subtitle: 'Secondary information', color: 'medium' },
    { title: 'Dark', subtitle: 'Primary text color', color: 'dark' }
  ];

  bestPractices = {
    do: [
      'Use heading hierarchy (h1 -> h2 -> h3) to create clear structure',
      'Apply color variants for semantic meaning (success, warning, danger)',
      'Maintain consistent spacing between text elements',
      'Use medium weight for secondary information'
    ],
    dont: [
      'Skip heading levels (e.g., h1 directly to h4)',
      'Use color for decoration only - it should convey meaning',
      'Mix multiple text sizes in the same paragraph',
      'Use all caps for long text passages'
    ]
  };
}
