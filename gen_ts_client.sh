#!/usr/bin/env bash
set -euxo pipefail

SCRIPT_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &>/dev/null && pwd)
GENERATOR='typescript-fetch'
DST="$SCRIPT_DIR/src/_generated/$GENERATOR/"
rm -r "$DST" || true

python3 "$SCRIPT_DIR/app.py" --dry-run

CMD="@openapitools/openapi-generator-cli generate -g '$GENERATOR' -i '$SCRIPT_DIR/openapi.json' -o '$DST'"
# shellcheck disable=SC2086
if command -v pnpm &>/dev/null; then
  pnpm dlx $CMD
else
  npx $CMD
fi
