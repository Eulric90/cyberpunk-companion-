# NIGHT CITY // COMPANION

Inoffizieller, deutschsprachiger Cyberpunk-2077-Companion für das Hauptspiel und **Phantom Liberty**. Die Anwendung nutzt React, TypeScript, Vite und Leaflet und ist für GitHub Pages vorbereitet. Das HUD ist eigenständig gestaltet und enthält keine übernommenen Spielgrafiken oder Logos.

## Funktionen im MVP

- **Build Planner:** Beispiel-Builds mit Attributzielen und abhakbaren Meilensteinen; Fortschritt nach Level filterbar.
- **Charakterprofile:** mehrere lokale Spielstände mit auswählbarem Build und Level.
- **Fortschrittstracker:** Meilensteine, Kartenpunkte und ikonische Gegenstände je Profil markieren.
- **Interaktive Karte:** Leaflet mit Kategorien, Suche und Hauptspiel-/Phantom-Liberty-Filter.
- **Iconic Arsenal:** kleine durchsuchbare Auswahl ikonischer Waffen und Cyberware.
- **Lokale Datensicherung:** automatische Speicherung im Browser sowie JSON-Export und -Import.
- **Responsive HUD-Oberfläche:** deutsche Texte und Neon-Farbgebung für Desktop und Mobilgeräte.

## Datenqualität und Spielstand

Die enthaltenen Builds, Kartenmarker und Gegenstände sind **Beispieldaten des MVP**. Die Karte ist schematisch, ihre Koordinaten sind nicht verifiziert und sie eignet sich nicht zur Navigation. Ein `verified`-Feld im Datenmodell dokumentiert den Prüfstatus; Beispieldaten dürfen nicht als bestätigte Spielinformationen verstanden werden. Hinweise wie „verpassbar“ müssen für den jeweils aktuellen Patch überprüft werden.

Spielprofile werden ausschließlich clientseitig unter `nc-companion-profiles-v1` im LocalStorage des Browsers gespeichert. Sie werden nicht automatisch synchronisiert. Der JSON-Export verwendet `schemaVersion: 1`.

## Projektstruktur

```text
.
├── .github/workflows/deploy.yml  # Build und GitHub-Pages-Deployment
├── index.html                    # Vite-Einstiegspunkt
├── package.json                  # Skripte und Abhängigkeiten
├── package-lock.json             # Reproduzierbare npm-Auflösung
├── vite.config.ts                # React-Plugin und relative Asset-Pfade
└── src/
    ├── main.tsx                  # React-App, Navigation und UI-Module
    ├── style.css                 # HUD, Neon-Design und responsive Layouts
    ├── types.ts                  # gemeinsame Datenverträge
    ├── storage.ts                # LocalStorage, Backup-Export/-Import
    └── data/
        ├── builds.ts             # Beispiel-Builds und Meilensteine
        ├── items.ts              # Beispielhafte ikonische Gegenstände
        └── points.ts             # Kartenkategorien und Testmarker
```

## Architektur und Datenmodelle

Die Anwendung ist eine statische Single-Page-App. `main.tsx` verbindet UI, Daten und Trackerzustände. Daten liegen als typisierte, getrennte Module unter `src/data/`; React hält die aktuelle Auswahl und speichert Profiländerungen über `storage.ts` im Browser. Leaflet rendert die schematische Karte und ihre Filterebenen. Es gibt keinen Server und keine Konten- oder Cloud-Synchronisierung.

Die zentralen Typen aus `src/types.ts`:

- `Build`: ID, Name, Erweiterungszuordnung, Zielattribute und Liste der Meilensteine.
- `BuildStep`: stabile ID, Level, Art (Attribut, Perk, Ausrüstung oder Mission), Beschreibung und optionale Verknüpfungen.
- `SaveProfile`: ID, Name, Build-ID, Level und Listen erledigter Meilensteine, gesammelter Items und besuchter Kartenpunkte.
- `MapPoint`: ID, Kategorie, Stadtbezirk, schematische Koordinaten, Erweiterungszuordnung, Prüfstatus und optionale Item-IDs.
- `Item`: ID, Typ, Quelle, Beschreibung, Erweiterungszuordnung, Verpassbarkeitshinweis und Prüfstatus.

IDs verbinden Profile mit Build-, Karten- und Itemdaten. Der Backup-Import prüft `schemaVersion: 1` und grundlegende Profilfelder.

## Lokal entwickeln

Voraussetzung: Node.js 22 oder neuer und npm.

```bash
npm ci
npm run dev
```

Build und lokale Produktionsvorschau:

```bash
npm run build
npm run preview
```

`npm run build` führt zuerst den TypeScript-Projektbuild (`tsc -b`) und danach den Vite-Produktionsbuild aus.

## GitHub Pages

Der Workflow `.github/workflows/deploy.yml` wird bei Pushes auf `main` sowie manuell gestartet. Er richtet Pages-Metadaten ein, installiert aus `package-lock.json` mit `npm ci`, baut `dist/` und veröffentlicht das Build-Artefakt über GitHub Pages Actions. Beim ersten Einrichten muss unter **Settings → Pages → Build and deployment** einmalig die Quelle **GitHub Actions** ausgewählt werden. Die Vite-Basis `./` unterstützt Hosting unter einem Repository-Unterpfad.

Die Projektadresse folgt dem Muster `https://<username>.github.io/<repository>/`.

## Nächste Entwicklungsschritte

1. Eigene oder rechtlich nutzbare Kartenbasis ergänzen und reale Koordinaten einzeln verifizieren.
2. Patchbezogene Build-Regeln, Attribut- und Perk-Voraussetzungen mit belegbaren Quellen modellieren.
3. Vollständigere Missionen-, NCPD-, Händler-, Cyberpsycho- und Item-Datenbank mit Herkunftsnachweisen erstellen.
4. Datenvalidierung und Tests für Voraussetzungen, Punktbudgets, Referenzen und Importmigration ergänzen.
5. Bei größerem Datenumfang LocalStorage auf IndexedDB migrieren; optional eine bewusst aktivierbare Synchronisierung entwerfen.
6. Tastaturbedienbarkeit, Kartenlegende und mobile Kartensteuerung weiter prüfen.

## Hinweis

Fanprojekt ohne Verbindung zu CD PROJEKT RED. Cyberpunk 2077 und Phantom Liberty sind Marken ihrer jeweiligen Rechteinhaber. Vor dem Einbinden offizieller Karten, Logos oder anderer Spielassets sind Nutzungsrechte zu klären.
