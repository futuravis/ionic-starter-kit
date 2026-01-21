#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

PATTERN="<(ion-alert|ion-action-sheet|ion-accordion|ion-accordion-group|ion-avatar|ion-back-button|ion-badge|ion-breadcrumb|ion-breadcrumbs|ion-button|ion-checkbox|ion-chip|ion-content|ion-datetime|ion-fab|ion-fab-button|ion-fab-list|ion-footer|ion-header|ion-img|ion-infinite-scroll|ion-infinite-scroll-content|ion-input|ion-input-password-toggle|ion-item|ion-item-option|ion-item-options|ion-item-sliding|ion-label|ion-list|ion-list-header|ion-loading|ion-modal|ion-note|ion-picker|ion-picker-legacy|ion-popover|ion-progress-bar|ion-radio|ion-radio-group|ion-range|ion-refresher|ion-refresher-content|ion-ripple-effect|ion-searchbar|ion-segment|ion-segment-button|ion-select|ion-skeleton-text|ion-spinner|ion-tab-bar|ion-tab-button|ion-tabs|ion-text|ion-textarea|ion-thumbnail|ion-title|ion-toast|ion-toggle|ion-toolbar)\b"

if rg -n --pcre2 "$PATTERN" src/app   --glob '*.page.html'   --glob '!src/app/ui-*/**'   --glob '!src/app/components/**'   --glob '!src/app/colors/**'   --glob '!src/app/typography/**'; then
  echo "Found raw Ionic components. Use custom-* wrappers in pages."
  exit 1
fi

echo "UI wrapper lint passed."
