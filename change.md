# Change Log

## v1 -> v2

### Summary
- Navigation updates: tabs include `Home`, `Config`, `Libs`, and `Settings`; app menu entries align to the new tabs.
- Home page redesign: sliver-style hero header, collapsible search header on scroll, sticky section, and list items open a bottom-sheet demo modal.
- Settings: added a side menu enable/disable toggle stored in localStorage and wired to Ionic `MenuController`.
- Shared UI wrapper update: collapsible header supports a condensed search slot in the header (wrapper layer removed in v3).
- Tooling: `package-lock.json` upgraded to lockfile v3 after npm install in v2.

### Modified Files
- `package-lock.json`
- `src/app/app.component.ts`
- `src/app/home/home.module.ts`
- `src/app/home/home.page.html`
- `src/app/home/home.page.scss`
- `src/app/home/home.page.ts`
- `src/app/settings/settings.page.html`
- `src/app/settings/settings.page.ts`
- `src/app/tabs/tabs-routing.module.ts`
- `src/app/tabs/tabs.page.html`

## v3 (Ionic-first UI)

### Summary
- Removed the custom wrapper layer and updated all demos/pages to use Ionic components directly.
- Updated navigation copy and page content to reference Ionic components.
- Added migration and project overview docs.
- Removed legacy Amazon Q instructions tied to the wrapper layer.

### Key Areas
- `src/app/ui-*/*`
- `src/app/home/*`
- `src/app/app.component.ts`
- `MIGRATION.md`
- `README.md`

## v4 (cleanup)

### Summary
- Removed the empty `src/app/shared` directory.
- Updated docs to remove versioned naming and keep migration guidance current.

### Key Areas
- `README.md`
- `MIGRATION.md`
- `change.md`
