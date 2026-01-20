#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

PATTERN="<(ion-button|ion-label|ion-input|ion-textarea|ion-select|ion-toggle|ion-chip|ion-badge|ion-avatar)\b"

if rg -n --pcre2 "$PATTERN" src/app   --glob '*.page.html'   --glob '!src/app/ui-*/**'   --glob '!src/app/components/**'   --glob '!src/app/colors/**'   --glob '!src/app/typography/**'; then
  echo "Found raw Ionic components. Use custom-* wrappers in pages."
  exit 1
fi

echo "UI wrapper lint passed."
