# NIGHT CITY // COMPANION

Inoffizieller, deutschsprachiger Cyberpunk-2077-Companion für das Hauptspiel und **Phantom Liberty**. Die Anwendung nutzt React, TypeScript und Vite und ist für GitHub Pages vorbereitet. Die Night-City-Karte wird extern von MapGenie über ein iframe eingebunden. Das HUD ist eigenständig gestaltet. Das Projekt ist ein nicht kommerzielles, inoffizielles Community-Fanprojekt und wird nicht von CD PROJEKT RED betrieben, unterstützt oder genehmigt.

## Funktionen im MVP

- **Build Planner:** feste Community-Build-Vorlagen mit einem Eintrag pro Level (1–50 bzw. 1–60), Attributpunkt-Zuteilung, Perk-Empfehlung und Ausrüstungs-/Waffenhinweisen an passenden Meilensteinen; Fortschritt je Profil abhaken und nach aktuellem Level filtern.
- **Charakterprofile:** mehrere lokale Spielstände mit auswählbarem Build und Level.
- **Fortschrittstracker:** Build-Meilensteine und ikonische Gegenstände je Profil markieren.
- **Interaktive Karte:** MapGenies Night-City-Karte, eingebettet mit direktem Link als Fallback, falls der Anbieter iframes blockiert.
- **Arsenal:** buildgefilterte Waffen- und Cyberware-Empfehlungen mit Fundhinweisen, Quellenlinks und sichtbarem Prüfstatus.
- **Lokale Datensicherung:** automatische Speicherung im Browser sowie JSON-Export und -Import.
- **Responsive HUD-Oberfläche:** deutsche Texte und Neon-Farbgebung für Desktop und Mobilgeräte.

## Datenqualität und Spielstand

Die Build-Vorlagen sind für Cyberpunk 2077 Update 2.31 mit Phantom Liberty modelliert und bleiben kuratierte Community-Vorschläge, kein offizieller CDPR-Plan. Die offiziellen [Patchnotes zu 2.31](https://www.cyberpunk.net/de/news/51818/patch-2-31) führen keine Änderungen am Perk-System auf; daher werden die vorhandenen 2.x-Perk-Bäume zugrunde gelegt. Das ist eine Schlussfolgerung aus der Patchnotiz, keine separate CDPR-Kompatibilitätszusage. Der [offizielle CDPR Build-Planer](https://www.cyberpunk.net/de/build-planner) ist die Referenz für Aufbau und Level-/Attributumfang. Perk-Namen und -Voraussetzungen sind zusätzlich mit der bereitgestellten [Fextralife-Perk-Wiki](https://cyberpunk2077.wiki.fextralife.com/Perks) verknüpft; als Community-Wiki kann sie hinter dem aktuellen Stand zurückliegen. Die Fahrpläne sind deshalb nicht als verifizierte Spielstände auszugeben. Vor einer Kennzeichnung als verifiziert müssen Perk-Namen, Voraussetzungen und Level-Routen gegen die aktuelle Spielversion geprüft werden. Waffen- und Cyberware-Einträge sind **Empfehlungen aus verlinkten CDPR- bzw. Community-Build-Guides**. Sie sind aktuell durchgehend nicht im Spiel verifiziert; die UI zeigt diesen Status pro Eintrag. Community-Guides können veraltet sein. Ein „verpassbar“-Hinweis wird deshalb als Quellenhinweis angezeigt und nicht als bestätigte Patch-2.31-Aussage ausgegeben.

Spielprofile werden ausschließlich clientseitig unter `nc-companion-profiles-v1` im LocalStorage des Browsers gespeichert. Sie werden nicht automatisch synchronisiert. Der JSON-Export verwendet `schemaVersion: 1`.

## Rechtliches und Quellen visueller Ressourcen

Dieses nicht kommerzielle Fanprojekt ist inoffiziell und steht in keiner Verbindung zu CD PROJEKT RED. Cyberpunk 2077, Phantom Liberty sowie zugehörige Marken und Werke gehören ihren jeweiligen Rechteinhabern. Alle Rechte an verwendeten Grafiken und sonstigen Werken verbleiben bei den jeweiligen Urhebern bzw. Rechteinhabern; Quellenangaben übertragen keine Rechte und stellen keine Unterstützung durch die Rechteinhaber dar.

In der aktuellen Version sind folgende visuelle Ressourcen eingebunden:

| Ressource | Verwendung und Quelle |
| --- | --- |
| Offizielle Cyberpunk-2077-Grafiken, Logos, Screenshots und Karten | Derzeit nicht eingebunden. |
| Night-City-Karte | Externes iframe von [MapGenie](https://mapgenie.io/cyberpunk-2077/maps/night-city); Kartenmaterial und Rechte verbleiben bei MapGenie bzw. den jeweiligen Rechteinhabern. Beim Laden wird MapGenie direkt kontaktiert. |
| HUD, Hintergründe und Layout | Projektspezifisches CSS in `src/style.css`. |
| UI-Symbole | Lucide React / Lucide, [lucide.dev](https://lucide.dev/) (ISC-Lizenz; [Lizenztext](https://github.com/lucide-icons/lucide/blob/main/LICENSE)). |
| Schriftarten | Barlow Condensed und IBM Plex Mono über [Google Fonts](https://fonts.google.com/); Urheber- und Lizenzangaben siehe jeweilige Schriftfamilien. |

Wenn weitere Grafiken hinzukommen, werden Werk, Urheber/Rechteinhaber, Quelle und Lizenz- oder Nutzungshinweis in dieser Liste und in der Ansicht **Über / Rechtliches** ergänzt. Die tatsächliche Nutzung erfolgt vorbehaltlich der jeweils geltenden Rechte und Richtlinien.

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
        ├── items.ts              # Ikonische Waffen und Cyberware mit Quellen
        ├── loadoutStages.ts      # Waffen-/Cyberware-Fahrplan in Levelstufen
        └── points.ts             # Kartenkategorien und Testmarker
```

## Architektur und Datenmodelle

Die Anwendung ist eine statische Single-Page-App. `main.tsx` verbindet UI, Daten und Trackerzustände. Daten liegen als typisierte, getrennte Module unter `src/data/`; React hält die aktuelle Auswahl und speichert Profiländerungen über `storage.ts` im Browser. Die Night-City-Karte wird als externes iframe eingebunden; ein Link öffnet MapGenie direkt, falls der Anbieter das Einbetten blockiert. Das iframe lädt Inhalte direkt vom Drittanbieter. Es gibt keinen eigenen Kartenserver und keine Konten- oder Cloud-Synchronisierung. Build-Vorlagen sind redaktionell festgelegt: Attribute und Perk-Reihenfolge lassen sich in der Oberfläche nicht verändern. Nach der Auswahl öffnet sich eine Detailansicht mit HUD-Attributübersicht, Level-/Relic-Status, Fortschrittsanzeige und einer chronologischen Checkliste mit genau einem Eintrag pro Charakterlevel. Level 1 dokumentiert die sieben Punkte der Charaktererstellung; jedes folgende Level weist einen Attributpunkt zu. Die Perkempfehlungen nennen Kernperks an Meilensteinen und schlagen an Zwischenstufen den nächsten Rang bzw. eine Synergie im zugehörigen Baum vor. Waffen- und Ausrüstungshinweise stehen an relevanten Meilensteinen. Diese Routen sind Community-Empfehlungen, keine verifizierten Builds oder garantierten Freischaltungen. Jeder `BuildStep` enthält Level, Attribut, Beschreibung und optional Voraussetzung sowie Quellenlink.

Die zentralen Typen aus `src/types.ts`:

- `Build`: ID, Name, Erweiterungszuordnung, Level-Cap, feste Zielattribute und geordnete Fahrplan-Schritte.
- `BuildStep`: stabile ID, Ziellevel, Art, Beschreibung, optionale Attributvoraussetzung und Quellenlink. Checkbox-IDs sind versioniert, damit alte Beispieldaten nicht versehentlich neue Perks als erledigt markieren.
- `SaveProfile`: ID, Name, Build-ID, Level und Listen erledigter Meilensteine, gesammelter Items und besuchter Kartenpunkte (für ältere lokale Profile).
- `MapPoint`: ID, Kategorie, Stadtbezirk, schematische Koordinaten, Erweiterungszuordnung, Prüfstatus und optionale Item-IDs.
- `Item`: ID, Typ, Quelle, Beschreibung, Erweiterungszuordnung, optionale Build-Zuordnung und Empfehlungsklasse, Quellenlink, Verpassbarkeitshinweis und Prüfstatus.
- `LoadoutStage`: Build, Levelbereich, Erweiterungsumfang sowie Waffen-, Cyberware- und Spielstil-Empfehlungen für den fortlaufenden Aufbau. Die UI trennt diesen Levelpfad von optionalen ikonischen Sammelzielen.

Die Ausrüstungsstufen orientieren sich an CDPRs offiziellen Schwellen für Loot und Händler: Waffen-Tier 1 ab Level 1, Tier 2 ab 9, Tier 3 ab 17, Tier 4 ab 25, Tier 5 ab 33 und Tier 5++ ab 51 (Phantom Liberty); Cyberware-Tier 1 ab Level 1, Tier 2 ab 10, Tier 3 ab 20, Tier 4 ab 30 und Tier 5 ab 40. Das sind Verfügbarkeits-Schwellen, keine Garantie, dass jeder Gegenstand sofort bei jedem Händler erscheint. Die konkrete Waffenwahl und Cyberware-Slots bleiben Community-Empfehlungen und sind nicht einzeln im Patch-2.31-Spielstand verifiziert. Quelle: [CDPR Support – Item Tiers in Loot and Vendors](https://support.cdprojektred.com/en/cyberpunk/pc/gameplay/issue/2593/item-tiers-in-loot-and-vendors).

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
3. Die vollständigen Levelrouten, Perk-Voraussetzungen und Ausrüstungsempfehlungen im Spiel gegen Update 2.31 prüfen und erst danach einzelne Daten als verifiziert kennzeichnen.
4. Vollständigere Missionen-, NCPD-, Händler-, Cyberpsycho- und Item-Datenbank mit Herkunftsnachweisen erstellen.
5. Datenvalidierung und Tests für Voraussetzungen, Punktbudgets, Referenzen und Importmigration ergänzen.
6. Bei größerem Datenumfang LocalStorage auf IndexedDB migrieren; optional eine bewusst aktivierbare Synchronisierung entwerfen.
7. Tastaturbedienbarkeit, Kartenlegende und mobile Kartensteuerung weiter prüfen.

## Hinweis

Nicht kommerzielles, inoffizielles Community-Fanprojekt ohne Verbindung zu CD PROJEKT RED. Cyberpunk 2077 und Phantom Liberty sind Marken ihrer jeweiligen Rechteinhaber. Alle Rechte an verwendeten Grafiken verbleiben bei den jeweiligen Urhebern und Rechteinhabern. Die im MVP enthaltenen Spiel- und Kartendaten sind teilweise Beispiele und werden nicht als verifizierte Informationen ausgegeben.
