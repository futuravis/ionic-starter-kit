# UI Components (Ionic-first)

This starter kit now uses Ionic components directly. Global tokens in
`src/theme/variables.scss` and styles in `src/global.scss` keep typography,
color, spacing, and states consistent across the app.

## Rules

- Use `ion-*` components directly in pages.
- Keep layout primitives as Ionic headers, toolbars, content, footers, and tabs.
- If wrappers are reintroduced later, document them here and add demos.

## Examples

Buttons:

```html
<ion-button>Primary</ion-button>
<ion-button fill="outline">Outline</ion-button>
<ion-button fill="clear">
  <ion-icon name="sparkles-outline" slot="start"></ion-icon>
  Clear
</ion-button>
```

Inputs:

```html
<ion-input label="Project name" labelPlacement="stacked" [(ngModel)]="projectName"></ion-input>
<ion-textarea label="Notes" labelPlacement="stacked" [(ngModel)]="notes"></ion-textarea>
<ion-select label="Priority" labelPlacement="stacked" [(ngModel)]="priority">
  <ion-select-option value="high">High</ion-select-option>
</ion-select>
<ion-searchbar placeholder="Search" [(ngModel)]="searchQuery"></ion-searchbar>
```

Segments and range:

```html
<ion-segment [(ngModel)]="segmentValue">
  <ion-segment-button value="list">List</ion-segment-button>
  <ion-segment-button value="board">Board</ion-segment-button>
</ion-segment>
<ion-range label="Text scale" labelPlacement="stacked" [(ngModel)]="textScale"></ion-range>
```

Overlays:

```html
<ion-toast [isOpen]="showToast" message="Saved" (didDismiss)="showToast = false"></ion-toast>
```

## Component catalog (Ionic)

- Layout: `ion-app`, `ion-page`, `ion-header`, `ion-toolbar`, `ion-title`, `ion-content`, `ion-footer`, `ion-tabs`, `ion-tab-bar`, `ion-tab-button`
- Navigation: `ion-back-button`, `ion-breadcrumbs`, `ion-breadcrumb`
- Buttons & actions: `ion-button`, `ion-icon`, `ion-fab`, `ion-fab-button`, `ion-fab-list`, `ion-chip`, `ion-ripple-effect`
- Inputs: `ion-input`, `ion-textarea`, `ion-select`, `ion-searchbar`, `ion-toggle`, `ion-checkbox`, `ion-radio-group`, `ion-radio`, `ion-datetime`, `ion-input-password-toggle`, `ion-segment`, `ion-range`
- Lists: `ion-list`, `ion-list-header`, `ion-item`, `ion-item-sliding`, `ion-item-options`, `ion-item-option`, `ion-label`, `ion-note`
- Media & cards: `ion-card`, `ion-card-header`, `ion-card-title`, `ion-card-subtitle`, `ion-card-content`, `ion-avatar`, `ion-thumbnail`, `ion-text`, `ion-img`, `ion-accordion-group`, `ion-accordion`
- Overlays: `ion-alert`, `ion-action-sheet`, `ion-modal`, `ion-popover`, `ion-toast`, `ion-loading`, `ion-picker`
- Feedback & state: `ion-progress-bar`, `ion-spinner`, `ion-skeleton-text`, `ion-refresher`, `ion-refresher-content`, `ion-infinite-scroll`, `ion-infinite-scroll-content`
