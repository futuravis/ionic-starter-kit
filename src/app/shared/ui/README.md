# UI Wrappers

This folder defines the only UI primitives that pages should use. Each wrapper
sits on top of an Ionic component so styles, behavior, and tokens stay
consistent across the app.

## Rules

- Pages should use `custom-*` components instead of raw `ion-*` tags.
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

## Wrapper catalog

- Buttons: `custom-button`, `custom-button-outline`, `custom-button-clear`
- Labels: `custom-label`
- Inputs: `custom-input`, `custom-textarea`, `custom-select`, `custom-searchbar`
- Toggles: `custom-toggle`
- Segments: `custom-segment`
- Range: `custom-range`
- Cards: `custom-card`
- Lists: `custom-list-item`
- Tags: `custom-chip`, `custom-badge`
- Avatars: `custom-avatar`

## Adding a wrapper

1. Create the wrapper component under `src/app/shared/ui/<component>`.
2. Export it from `src/app/shared/ui/ui.module.ts`.
3. Add a demo to the UI Library pages under `src/app/ui-*`.
4. Update `scripts/lint-ui.sh` if the wrapper replaces a new Ionic tag.
