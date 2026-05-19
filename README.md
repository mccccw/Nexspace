# NexSpace

Vollständiges Monorepo-Grundgerüst für NexSpace (Web + API + DB + Realtime).

## Schnellstart
```bash
./start-nexspace.sh
```

Das Skript installiert pnpm (falls nötig), installiert Dependencies, startet Docker-Services, pusht Prisma-Schema, seedet Daten und startet Web/API im Dev-Modus.

## ZIP lokal erstellen (nicht in GitHub committen)
```bash
./export-zip.sh
# Standard-Ausgabe: /workspace/Nexspace.zip

# Oder eigener Pfad:
./export-zip.sh /workspace/my-nexspace-build.zip
```

