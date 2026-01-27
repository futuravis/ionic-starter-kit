# Ionic Starter Kit (v3)

This starter kit is an Ionic Angular baseline that uses global design tokens and Ionic components directly.

## Design architecture

### Layers
- Tokens (single source of truth): color + typography tokens live in `src/theme/variables.scss`.
- Global type & helpers: tokenized classes and base element styles in `src/global.scss`.
- Ionic-first usage: pages use Ionic components (`ion-*`) directly and rely on tokens + global classes for consistency.

### App structure
- Shell & navigation: `src/app/app.component.ts`, `src/app/app.component.html`, `src/app/app.component.scss`.
- Tabs & routes: `src/app/tabs/tabs-routing.module.ts`, `src/app/tabs/tabs.module.ts`.
- Core pages: `src/app/home/*`, `src/app/intro/*`, `src/app/typography/*`, `src/app/colors/*`, `src/app/settings/*`.
- UI demos: `src/app/ui-*/*` (Ionic component patterns and demos).
- Assets: `src/assets/**`.

### Key patterns
- Collapsible header: built on Home with `ion-header` + `ion-content` scroll state.
- Theming: controlled in `src/theme/variables.scss` and applied via `src/global.scss`.

## Migration

See `MIGRATION.md` for a step-by-step guide to move this starter kit into another Ionic project.
