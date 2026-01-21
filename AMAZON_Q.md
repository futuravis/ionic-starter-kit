# Amazon Q Guide

This document helps Amazon Q understand the scope, structure, and migration flow
for this Ionic Angular starter kit. Use it to guide refactors or to migrate UI
components into another project.

## Project scope

- Ionic Angular starter kit with a design system and UI wrapper layer.
- Layout uses Ionic primitives (`ion-header`, `ion-content`, `ion-toolbar`, etc.).
- UI primitives (buttons, inputs, lists, overlays, feedback) use `custom-*`
  wrappers under `src/app/shared/ui`.
- Demo pages live under `src/app/ui-*` and are wired into tabs + the side menu.

## Key directories

- `src/app/shared/ui`: All reusable wrapper components.
- `src/app/ui-*`: Demo pages that showcase wrappers.
- `src/app/colors`, `src/app/typography`: Design system pages.
- `src/app/home`, `src/app/components`, `src/app/settings`: App screens.
- `scripts/lint-ui.sh`: Lints raw `ion-*` usage in pages (layout excluded).
- `scripts/migrate-ui.sh`: Copies the UI wrapper layer to another project.

## UI wrapper rules

- Pages should use `custom-*` components for UI primitives.
- Layout should use Ionic tags directly:
  `ion-header`, `ion-toolbar`, `ion-title`, `ion-content`, `ion-footer`,
  `ion-tabs`, `ion-tab-bar`, `ion-tab-button`.
- Every wrapper lives under `src/app/shared/ui/<component>` and is exported from
  `src/app/shared/ui/ui.module.ts`.

## Wrapper catalog (current)

- Buttons & actions: `custom-button`, `custom-button-outline`,
  `custom-button-clear`, `custom-fab`, `custom-fab-button`, `custom-fab-list`,
  `custom-ripple`, `custom-floating-footer`
- Inputs: `custom-input`, `custom-textarea`, `custom-select`,
  `custom-searchbar`, `custom-toggle`, `custom-checkbox`,
  `custom-radio-group`, `custom-radio`, `custom-datetime`,
  `custom-input-password-toggle`
- Lists: `custom-list`, `custom-list-header`, `custom-item`,
  `custom-item-sliding`, `custom-item-options`, `custom-item-option`,
  `custom-note`, `custom-list-item`
- Tags & media: `custom-chip`, `custom-badge`, `custom-avatar`,
  `custom-thumbnail`, `custom-text`, `custom-img`,
  `custom-accordion-group`, `custom-accordion`
- Overlays: `custom-alert`, `custom-action-sheet`, `custom-modal`,
  `custom-popover`, `custom-toast`, `custom-loading`, `custom-picker`
- Feedback & state: `custom-progress-bar`, `custom-spinner`,
  `custom-skeleton`, `custom-refresher`, `custom-refresher-content`,
  `custom-infinite-scroll`, `custom-infinite-scroll-content`

## Demo routes

- `/tabs/ui-library` is the index of UI demos.
- Each demo page is under `src/app/ui-*` and routed in
  `src/app/tabs/tabs-routing.module.ts`.

## Migration steps (for another project)

1) Run the script:

```bash
./scripts/migrate-ui.sh /path/to/target-project
```

2) In the target project:
   - Import `UiModule` in any page module using `custom-*` components.
   - Run `./scripts/lint-ui.sh` to detect raw Ionic usage in pages.
   - Add routes/menu entries for any `ui-*` demo pages you want to keep.

## Guidance for Amazon Q prompts

When instructing Amazon Q, use explicit constraints:

- "Use existing `custom-*` wrappers from `src/app/shared/ui`."
- "Do not add new `ion-*` tags in pages, except layout tags
  (`ion-header`, `ion-toolbar`, `ion-title`, `ion-content`, `ion-footer`,
  `ion-tabs`, `ion-tab-bar`, `ion-tab-button`)."
- "If a new wrapper is needed, add it under `src/app/shared/ui`,
  export in `src/app/shared/ui/ui.module.ts`, and add a demo under `src/app/ui-*`."
- "Update `scripts/lint-ui.sh` if introducing a new wrapper that replaces a raw
  Ionic tag."
