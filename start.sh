#!/usr/bin/env bash
echo "=========================================="
echo "     NEXSPACE ULTRA - Pterodactyl"
echo "=========================================="

echo "→ Dependencies..."
npm install --legacy-peer-deps --silent
cd apps/web && npm install --legacy-peer-deps --silent && cd ../..

echo "→ Starte auf Port 25566..."

# API
cd apps/api && npm run dev -- --port 25566 --host 0.0.0.0 > ../../.logs/api.log 2>&1 &

# Web
cd /home/container/apps/web && npm run dev -- --port 25566 --hostname 0.0.0.0 > /home/container/.logs/web.log 2>&1 &

sleep 15
echo "✅ Sollte jetzt erreichbar sein: http://147.93.185.104:25566"

tail -n 10 /home/container/.logs/web.log

wait