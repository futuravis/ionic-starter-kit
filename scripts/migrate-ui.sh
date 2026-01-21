#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
TARGET_DIR="${1:-}"

if [[ -z "$TARGET_DIR" ]]; then
  echo "Usage: $(basename "$0") /path/to/target-project"
  exit 1
fi

if [[ ! -d "$TARGET_DIR" ]]; then
  echo "Target directory does not exist: $TARGET_DIR"
  exit 1
fi

SRC_UI="$ROOT_DIR/src/app/shared/ui"
DEST_UI="$TARGET_DIR/src/app/shared/ui"

if [[ ! -d "$SRC_UI" ]]; then
  echo "Source UI directory not found: $SRC_UI"
  exit 1
fi

mkdir -p "$(dirname "$DEST_UI")"

if [[ -d "$DEST_UI" ]]; then
  BACKUP_DIR="${DEST_UI}.bak-$(date +%Y%m%d%H%M%S)"
  cp -R "$DEST_UI" "$BACKUP_DIR"
  echo "Backed up existing UI folder to $BACKUP_DIR"
fi

rsync -a "$SRC_UI/" "$DEST_UI/"

mkdir -p "$TARGET_DIR/scripts"
cp "$ROOT_DIR/scripts/lint-ui.sh" "$TARGET_DIR/scripts/lint-ui.sh"
chmod +x "$TARGET_DIR/scripts/lint-ui.sh"

cat <<'NOTE'

UI layer copied.

Manual follow-ups in the target project:
1) Import UiModule in page modules that use custom-* components.
2) Run ./scripts/lint-ui.sh to detect leftover ion-* tags in pages.
3) Update routes/menu to include any ui-* demo pages you want.
NOTE
