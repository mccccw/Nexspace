#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT_DIR"

API_URL="http://localhost:3001"
WEB_URL="http://localhost:3000"
API_DOCS_URL="${API_URL}/api/docs"
MAILHOG_URL="http://localhost:8025"
MEILI_URL="http://localhost:7700"

if ! command -v pnpm >/dev/null 2>&1; then
  npm i -g pnpm@9.0.0
fi

[ -f .env ] || cp .env.example .env

pnpm install

docker compose -f docker-compose.dev.yml up -d
pnpm --filter api prisma:generate
pnpm --filter api db:push
pnpm --filter api db:seed

mkdir -p .logs

# stop older local dev servers if they exist
pkill -f "next dev" >/dev/null 2>&1 || true
pkill -f "tsx watch src/index.ts" >/dev/null 2>&1 || true

nohup pnpm --filter api dev > .logs/api.log 2>&1 &
API_PID=$!
nohup pnpm --filter web dev > .logs/web.log 2>&1 &
WEB_PID=$!

echo ""
echo "✅ NexSpace setup completed and services started in background"
echo ""
echo "PIDs:"
echo "- API: ${API_PID}"
echo "- Web: ${WEB_PID}"
echo ""
echo "Links:"
echo "- Frontend:    ${WEB_URL}"
echo "- API:         ${API_URL}"
echo "- API Docs:    ${API_DOCS_URL}"
echo "- Mailhog:     ${MAILHOG_URL}"
echo "- Meilisearch: ${MEILI_URL}"
echo ""
echo "Logs:"
echo "- API log: .logs/api.log"
echo "- Web log: .logs/web.log"
echo ""
echo "Stop commands:"
echo "- pkill -f 'next dev'"
echo "- pkill -f 'tsx watch src/index.ts'"
echo "- docker compose -f docker-compose.dev.yml down"
