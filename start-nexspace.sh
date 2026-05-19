#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT_DIR"

if ! command -v pnpm >/dev/null 2>&1; then
  npm i -g pnpm@9
fi

[ -f .env ] || cp .env.example .env

pnpm install
docker compose -f docker-compose.dev.yml up -d
pnpm --filter api prisma:generate
pnpm --filter api db:push
pnpm --filter api db:seed

pnpm dev
