import type {Build} from '../types';

const fextralife='https://cyberpunk2077.wiki.fextralife.com/Perks';

// Curated routes, not a copy of CDPR's planner. Perk requirements and labels
// use the Update 2.31 perk tree; CDPR lists no perk-tree change in its 2.31 notes.
// Individual routes remain community suggestions, not verified in-game saves.
export const builds:Build[] = [
 {id:'gunslinger',name:'DEADEYE // GUNSLINGER',tagline:'Pistolen · Revolver · Präzisionsgewehre',style:'Präzision / Stealth',expansion:'phantom-liberty',levelCap:60,attributes:{cool:20,reflexes:20,technical:20,body:18,intelligence:3},steps:[
  {id:'g2-1',attribute:'cool',level:4,kind:'perk',title:'Killer Instinct',description:'Einstieg in den Cool-Baum für gezielte Schüsse und leises Vorgehen. Der konkrete Bonus hängt vom gewählten Rang ab.',requirements:'Coolness 4',sourceUrl:fextralife},
  {id:'g2-2',attribute:'cool',level:8,kind:'perk',title:'Feline Footwork',description:'Verbessert Bewegung und Überlebensfähigkeit beim geduckten Vorgehen; passend für präzise Eröffnungen aus der Deckung.',requirements:'Coolness 4',sourceUrl:fextralife},
  {id:'g2-3',attribute:'cool',level:12,kind:'perk',title:'Focus',description:'Schaltet den Focus-Modus für präzises Zielen frei. Weitere Ränge und Synergien nach Waffenstil wählen.',requirements:'Coolness 9',sourceUrl:fextralife},
  {id:'g2-4',attribute:'cool',level:18,kind:'perk',title:'Deadeye',description:'Ziel ist der Deadeye-Modus für hohe Präzision und verbesserten Schaden mit Pistolen und Präzisionswaffen.',requirements:'Coolness 15; Focus',sourceUrl:fextralife},
  {id:'g2-5',attribute:'cool',level:22,kind:'perk',title:'Ninjutsu',description:'Ergänzt den Schleichpfad mit schnellerer Bewegung in geduckter Haltung.',requirements:'Coolness 15; Feline Footwork',sourceUrl:fextralife},
  {id:'g2-6',attribute:'reflexes',level:26,kind:'perk',title:'Dash',description:'Mehr Beweglichkeit beim Ausweichen und Positionieren. Für den Ausbau Richtung Air Dash einplanen.',requirements:'Reflexe 9',sourceUrl:fextralife},
  {id:'g2-7',attribute:'reflexes',level:32,kind:'perk',title:'Air Dash',description:'Erweitert Dash um Luftbewegung und schnelle Positionswechsel.',requirements:'Reflexe 15; Dash',sourceUrl:fextralife},
  {id:'g2-8',attribute:'technical',level:38,kind:'perk',title:'License to Chrome',description:'Cyberware-Kapazität und defensive Implantat-Synergien für den späteren Build ausbauen.',requirements:'Technik 15',sourceUrl:fextralife},
  {id:'g2-9',attribute:'cool',level:46,kind:'perk',title:'Nerves of Tungsten-Steel',description:'Später Cool-Meilenstein für einen Build mit Pistolen und Präzisionswaffen.',requirements:'Coolness 20; Deadeye',sourceUrl:fextralife},
  {id:'g2-10',attribute:'technical',level:55,kind:'perk',title:'Edgerunner',description:'Optionaler Endgame-Schwerpunkt: Cyberware-Kapazität über die normale Grenze hinaus nutzen, mit entsprechendem Gesundheitsrisiko.',requirements:'Technik 20',sourceUrl:fextralife},
  {id:'g2-11',level:60,kind:'mission',title:'Endgame-Abgleich',description:'Attribute, Perk-Ränge und Cyberware im Spiel mit dem aktuellen Patch abgleichen. Die Zielwerte dieses Builds setzen Phantom Liberty voraus.'}]},
 {id:'netrunner',name:'NETRUNNER // DAEMON',tagline:'Quickhacks · Smart Weapons · Kontrolle',style:'Hacking / Fernkampf',expansion:'base',levelCap:50,attributes:{cool:11,reflexes:9,technical:15,body:16,intelligence:20},steps:[
  {id:'n2-1',attribute:'intelligence',level:4,kind:'perk',title:'Optimization',description:'Früher Grundstein für effizientere Quickhack-Nutzung.',requirements:'Intelligenz 4',sourceUrl:fextralife},
  {id:'n2-2',attribute:'intelligence',level:9,kind:'perk',title:'Eye in the Sky',description:'Unterstützt das Markieren und Vorbereiten von Zielen über Kameras.',requirements:'Intelligenz 9',sourceUrl:fextralife},
  {id:'n2-3',attribute:'intelligence',level:14,kind:'perk',title:'Hack Queue',description:'Ermöglicht das Einreihen mehrerer Quickhacks auf ein Ziel.',requirements:'Intelligenz 9',sourceUrl:fextralife},
  {id:'n2-4',attribute:'intelligence',level:20,kind:'perk',title:'Overclock',description:'Schaltet Overclock frei: Quickhacks können bei knappem RAM zusätzliche Gesundheit beanspruchen.',requirements:'Intelligenz 15',sourceUrl:fextralife},
  {id:'n2-5',attribute:'intelligence',level:27,kind:'perk',title:'Queue Acceleration',description:'Quickhack-Warteschlangen ausbauen, um vorbereitete Angriffsketten schneller einzusetzen.',requirements:'Intelligenz 15; Hack Queue',sourceUrl:fextralife},
  {id:'n2-6',attribute:'intelligence',level:34,kind:'perk',title:'Smart Synergy',description:'Verknüpft Smart-Waffen mit dem Netrunner-Spielstil.',requirements:'Intelligenz 20',sourceUrl:fextralife},
  {id:'n2-7',attribute:'technical',level:40,kind:'perk',title:'License to Chrome',description:'Cyberware-Kapazität und passende Implantate für den späteren Build verbessern.',requirements:'Technik 15',sourceUrl:fextralife},
  {id:'n2-8',attribute:'intelligence',level:46,kind:'perk',title:'Queue Mastery',description:'Späte Intelligence-Synergien für aufeinander abgestimmte Quickhack-Folgen ergänzen.',requirements:'Intelligenz 20',sourceUrl:fextralife},
  {id:'n2-9',level:50,kind:'mission',title:'Quickhack-Loadout abstimmen',description:'Cyberdeck, Quickhack-Reihenfolge und RAM-Verbrauch auf die eigene Ausrüstung und den aktuellen Patch abstimmen.'}]},
 {id:'blade',name:'BLADE // PHANTOM',tagline:'Katana · Mobilität · Sandevistan',style:'Nahkampf / Reflexe',expansion:'phantom-liberty',levelCap:60,attributes:{cool:15,reflexes:20,technical:20,body:20,intelligence:6},steps:[
  {id:'b2-1',attribute:'reflexes',level:4,kind:'perk',title:'Slippery',description:'Grundlage für einen beweglichen Nahkampf-Build mit Fokus auf Ausweichen.',requirements:'Reflexe 4',sourceUrl:fextralife},
  {id:'b2-2',attribute:'reflexes',level:9,kind:'perk',title:'Dash',description:'Schnelleres Ausweichen und Herankommen; zentrale Bewegungsfähigkeit für den Build.',requirements:'Reflexe 9',sourceUrl:fextralife},
  {id:'b2-3',attribute:'reflexes',level:15,kind:'perk',title:'Lead and Steel',description:'Klingen-Route ausbauen und Nahkampf-Paraden mit dem Katana unterstützen.',requirements:'Reflexe 9',sourceUrl:fextralife},
  {id:'b2-4',attribute:'reflexes',level:20,kind:'perk',title:'Air Dash',description:'Dash in der Luft fortsetzen, um Gegner zu erreichen und Angriffen auszuweichen.',requirements:'Reflexe 15; Dash',sourceUrl:fextralife},
  {id:'b2-5',attribute:'reflexes',level:28,kind:'perk',title:'Finisher: Bladerunner',description:'Klingen-Finisher für geschwächte Gegner freischalten und ausbauen.',requirements:'Reflexe 15',sourceUrl:fextralife},
  {id:'b2-6',attribute:'body',level:36,kind:'perk',title:'Adrenaline Rush',description:'Konstitution für mehr Widerstandskraft und aggressives Vordringen nutzen.',requirements:'Konstitution 15',sourceUrl:fextralife},
  {id:'b2-7',attribute:'technical',level:44,kind:'perk',title:'License to Chrome',description:'Defensive Cyberware und Implantat-Kapazität für den Nahkampf ausbauen.',requirements:'Technik 15',sourceUrl:fextralife},
  {id:'b2-8',attribute:'technical',level:52,kind:'perk',title:'Edgerunner',description:'Optionaler Endgame-Ausbau für mehr Cyberware-Kapazität; Überlastung reduziert Gesundheit.',requirements:'Technik 20',sourceUrl:fextralife},
  {id:'b2-9',level:60,kind:'mission',title:'Phantom-Liberty-Endgame',description:'Relic-Fähigkeiten und Cyberware anhand der im Spiel verfügbaren Punkte abstimmen.'}]}
];
