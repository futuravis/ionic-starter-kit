# Migration Guide (v4 -> other Ionic starter kit)

This repo is an Ionic Angular starter kit with a design system demo. It uses Ionic components directly (no custom wrapper layer) and relies on global tokens in `src/theme/variables.scss` and `src/global.scss`.

## Quick Amazon Q prompt

Paste this into Amazon Q inside your target repo and update the source path if needed:

```
Analyze the Ionic starter kit at /Users/sivaramakrishnan/Documents/Dev/starter-kit/ionic-framework-v2.
Read MIGRATION.md first. Then provide a step-by-step plan to merge it into this repo.
Focus on pages, routes, theme tokens, global styles, settings, and assets.
Call out any conflicts and give a safe copy/edit order.
```

## Source inventory (what to migrate)

Core pages and demos live under `src/app`:

- Shell + navigation: `src/app/app.component.ts`, `src/app/app.component.html`, `src/app/app.component.scss`
- Tabs + routing: `src/app/tabs/tabs-routing.module.ts`, `src/app/tabs/tabs.module.ts`
- Home: `src/app/home/*`
- Intro: `src/app/intro/*`
- Design system pages: `src/app/typography/*`, `src/app/colors/*`
- Settings: `src/app/settings/*`
- UI library demos: `src/app/ui-*/*` (layout, navigation, actions, buttons, labels, inputs, cards, lists, data display, overlays, feedback, chips, avatars, collapsible header)
- Components landing: `src/app/components/*` and `src/app/ui-library/*`

Global styling and tokens:

- `src/theme/variables.scss` (color + typography tokens)
- `src/global.scss` (global type classes and shared styling)
- `src/app/settings/settings.page.scss` (settings styling)

Assets (images, icons, illustrations):

- `src/assets/**`

## Migration steps (safe order)

1) Copy assets
   - Copy all of `src/assets` into the target repo and overwrite if needed.

2) Copy theme + global styles
   - Merge `src/theme/variables.scss` into the target file (do not drop existing Ionic defaults).
   - Merge `src/global.scss` (global typography classes and shared helpers).
   - Keep file ordering to avoid CSS variable overrides.

3) Copy design system + demo pages
   - For each page folder in `src/app` listed above, copy:
     - `*.page.ts`, `*.page.html`, `*.page.scss`, `*.module.ts`, `*.routing.module.ts` (if present)
   - Keep folder names and selectors consistent.

4) Update app shell + navigation
   - Merge `src/app/app.component.*` to keep side menu, labels, and menu sections.
   - Merge `src/app/tabs/tabs-routing.module.ts` and `src/app/tabs/tabs.module.ts` to include all routes and tab wiring.

5) Update app module imports
   - Ensure each page module imports `IonicModule`, `CommonModule`, `FormsModule`.
   - Add any missing page modules to the tab routing tree.

6) Update settings page
   - Copy `src/app/settings/settings.page.ts` for theme handling and segment configuration.
   - Copy `src/app/settings/settings.page.scss` for layout and styling.

7) Validate build
   - Run `npm install` and `npm run build`.
   - If you see CSS budget warnings, check `angular.json` for `anyComponentStyle` budget.

## Notes and gotchas

- This repo uses Ionic components directly; no custom wrapper components are required.
- `ui-overlays` uses `PickerController` in `src/app/ui-overlays/ui-overlays.page.ts` instead of `<ion-picker>` markup.
- Home uses a collapsible header with search/filter UI and a sticky section.
- Keep `variables.scss` tokens to preserve typography and color screens.

## Suggested copy list (minimum)

- `src/app/app.component.*`
- `src/app/tabs/*`
- `src/app/home/*`
- `src/app/intro/*`
- `src/app/colors/*`
- `src/app/typography/*`
- `src/app/settings/*`
- `src/app/ui-*/*`
- `src/app/components/*`
- `src/app/ui-library/*`
- `src/theme/variables.scss`
- `src/global.scss`
- `src/assets/**`
