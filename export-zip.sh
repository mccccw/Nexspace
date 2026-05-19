#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT_DIR"

OUT_PATH="${1:-/workspace/Nexspace.zip}"

mkdir -p "$(dirname "$OUT_PATH")"
rm -f "$OUT_PATH"

zip -r "$OUT_PATH" . \
  -x '.git/*' \
     'node_modules/*' \
     '*/node_modules/*' \
     '.next/*' \
     '*/.next/*' \
     'dist/*' \
     '*/dist/*' \
     'release/*'

echo "✅ ZIP created: $OUT_PATH"
