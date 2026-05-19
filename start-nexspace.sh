#!/usr/bin/env bash
 codex/build-full-stack-web-application-nexspace-rma6dv
set -Eeuo pipefail

on_error() {
  local code=$?
  echo ""
  echo "❌ Setup failed (exit code: ${code})."
  echo "Check the messages above."
  if [[ -t 1 ]]; then
    read -r -p "Press Enter to close..." _
  fi
  exit "$code"
}
trap on_error ERR

set -euo pipefail
 main

ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT_DIR"

 codex/build-full-stack-web-application-nexspace-rma6dv
API_URL="http://localhost:3001"
WEB_URL="http://localhost:3000"
API_DOCS_URL="${API_URL}/api/docs"
MAILHOG_URL="http://localhost:8025"
MEILI_URL="http://localhost:7700"

if ! command -v pnpm >/dev/null 2>&1; then
  npm i -g pnpm@9.0.0
fi

if ! command -v docker >/dev/null 2>&1; then
  echo "❌ Docker is not installed or not in PATH."
  exit 1
fi

if ! docker info >/dev/null 2>&1; then
  echo "❌ Docker daemon is not running. Start Docker Desktop/Engine first."
  exit 1

if ! command -v pnpm >/dev/null 2>&1; then
  npm i -g pnpm@9
 main
fi

[ -f .env ] || cp .env.example .env

 codex/build-full-stack-web-application-nexspace-rma6dv
echo "📦 Installing dependencies..."
pnpm install

echo "🐳 Starting development infrastructure..."
docker compose -f docker-compose.dev.yml up -d

echo "🗄️ Preparing database..."

pnpm install
docker compose -f docker-compose.dev.yml up -d
 main
pnpm --filter api prisma:generate
pnpm --filter api db:push
pnpm --filter api db:seed

 codex/build-full-stack-web-application-nexspace-rma6dv
mkdir -p .logs

pkill -f "next dev" >/dev/null 2>&1 || true
pkill -f "tsx watch src/index.ts" >/dev/null 2>&1 || true

echo "🚀 Starting API + Web in background..."
nohup pnpm --filter api dev > .logs/api.log 2>&1 &
API_PID=$!
nohup pnpm --filter web dev > .logs/web.log 2>&1 &
WEB_PID=$!

sleep 2
if ! kill -0 "$API_PID" 2>/dev/null; then
  echo "❌ API process exited early. Check .logs/api.log"
  exit 1
fi
if ! kill -0 "$WEB_PID" 2>/dev/null; then
  echo "❌ Web process exited early. Check .logs/web.log"
  exit 1
fi

echo ""
echo "✅ NexSpace setup completed and services started"
echo "- API PID: ${API_PID}"
echo "- Web PID: ${WEB_PID}"
echo ""
echo "Links:"
echo "- Frontend:    ${WEB_URL}"
echo "- API:         ${API_URL}"
echo "- API Docs:    ${API_DOCS_URL}"
echo "- Mailhog:     ${MAILHOG_URL}"
echo "- Meilisearch: ${MEILI_URL}"
echo ""
echo "Logs:"
echo "- .logs/api.log"
echo "- .logs/web.log"
echo ""
echo "Stop:"
echo "- pkill -f 'next dev'"
echo "- pkill -f 'tsx watch src/index.ts'"
echo "- docker compose -f docker-compose.dev.yml down"

if [[ -t 1 ]]; then
  read -r -p "Press Enter to close..." _
fi

pnpm dev
 main
