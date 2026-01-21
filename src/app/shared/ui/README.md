# UI Wrappers

This folder defines the only UI primitives that pages should use. Each wrapper
sits on top of an Ionic component so styles, behavior, and tokens stay
consistent across the app.

## Rules

- Pages should use `custom-*` components for UI primitives (layout can use Ionic `ion-*` tags).
- New design components must be added as wrappers in this folder.
- Update the UI Library demos when adding a new wrapper.

## Examples

Buttons:

```html
<custom-button>Primary</custom-button>
<custom-button-outline>Outline</custom-button-outline>
<custom-button-clear>
  <ion-icon name="sparkles-outline"></ion-icon>
</custom-button-clear>
```

Inputs:

```html
<custom-input label="Project name" [(ngModel)]="projectName"></custom-input>
<custom-textarea label="Notes" [(ngModel)]="notes"></custom-textarea>
<custom-select label="Priority" [(ngModel)]="priority">
  <ion-select-option value="high">High</ion-select-option>
</custom-select>
<custom-searchbar placeholder="Search" [(ngModel)]="searchQuery"></custom-searchbar>
```

Segments and range:

```html
<custom-segment [options]="segmentOptions" [(ngModel)]="segmentValue"></custom-segment>
<custom-range label="Text scale" [(ngModel)]="textScale"></custom-range>
```

Overlays:

```html
<custom-toast [isOpen]="showToast" message="Saved" (didDismiss)="showToast = false"></custom-toast>
```

## Wrapper catalog

- Layout: use Ionic `ion-header`, `ion-toolbar`, `ion-title`, `ion-content`, `ion-footer`, `ion-tabs`, `ion-tab-bar`, `ion-tab-button`
- Navigation: `custom-back-button`
- Buttons & actions: `custom-button`, `custom-button-outline`, `custom-button-clear`, `custom-fab`, `custom-fab-button`, `custom-fab-list`, `custom-ripple`, `custom-floating-footer`
- Inputs: `custom-input`, `custom-textarea`, `custom-select`, `custom-searchbar`, `custom-toggle`, `custom-checkbox`, `custom-radio-group`, `custom-radio`, `custom-datetime`, `custom-input-password-toggle`
- Lists: `custom-list`, `custom-list-header`, `custom-item`, `custom-item-sliding`, `custom-item-options`, `custom-item-option`, `custom-note`, `custom-list-item`
- Tags: `custom-chip`, `custom-badge`
- Media & cards: `custom-card`, `custom-avatar`, `custom-thumbnail`, `custom-text`, `custom-img`, `custom-accordion-group`, `custom-accordion`
- Overlays: `custom-alert`, `custom-action-sheet`, `custom-modal`, `custom-popover`, `custom-toast`, `custom-loading`, `custom-picker`
- Feedback & state: `custom-progress-bar`, `custom-spinner`, `custom-skeleton`, `custom-refresher`, `custom-refresher-content`, `custom-infinite-scroll`, `custom-infinite-scroll-content`

## Adding a wrapper

1. Create the wrapper component under `src/app/shared/ui/<component>`.
2. Export it from `src/app/shared/ui/ui.module.ts`.
3. Add a demo to the UI Library pages under `src/app/ui-*`.
4. Update `scripts/lint-ui.sh` if the wrapper replaces a new Ionic tag.
