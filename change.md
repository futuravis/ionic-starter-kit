# v1 to v2 Change Log

## Summary
- Navigation updates: tabs now include `Home`, `Config`, `Libs`, and `Settings`; app menu entries align to the new tabs.
- Home page redesign: sliver-style hero header, collapsible search header on scroll, sticky "Shared UI components" section, and list items open a bottom-sheet demo modal.
- Settings: added a side menu enable/disable toggle stored in localStorage and wired to Ionic `MenuController`.
- Shared UI wrapper update: collapsible header supports a condensed search slot in the header.
- Tooling: `package-lock.json` upgraded to lockfile v3 after npm install in v2.

## Modified Files
- `package-lock.json`
- `src/app/app.component.ts`
- `src/app/home/home.module.ts`
- `src/app/home/home.page.html`
- `src/app/home/home.page.scss`
- `src/app/home/home.page.ts`
- `src/app/settings/settings.page.html`
- `src/app/settings/settings.page.ts`
- `src/app/shared/ui/collapsible-header/custom-collapsible-header.component.html`
- `src/app/shared/ui/collapsible-header/custom-collapsible-header.component.scss`
- `src/app/tabs/tabs-routing.module.ts`
- `src/app/tabs/tabs.page.html`
