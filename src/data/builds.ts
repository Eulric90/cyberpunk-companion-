import type {Build} from '../types';
export const builds:Build[] = [
 {id:'gunslinger',name:'GUNSLINGER // GHOST',tagline:'Pistolen · Revolver · Präzisionsgewehre',style:'Präzision / Stealth',expansion:'base',attributes:{cool:20,reflexes:20,technical:20,body:18,intelligence:3},steps:[
 {id:'g1',level:2,kind:'perk',title:'Kühler Kopf: Pistolen-Spielweise',description:'Coolness-Perks für Pistolen und Präzisionsgewehre priorisieren; konkrete Perk-Voraussetzungen im Spiel prüfen.'},
 {id:'g2',level:10,kind:'attribute',attribute:'cool',points:1,title:'Coolness priorisieren',description:'Attributpunkte schrittweise in Coolness investieren, um die Pistolen-Perks freizuschalten.'},
 {id:'g3',level:15,kind:'perk',title:'Fokus und Deadeye',description:'Fokus bei Coolness 9, Deadeye bei Coolness 15 anstreben.'},
 {id:'g4',level:20,kind:'gear',itemId:'overwatch',title:'Overwatch besorgen',description:'Panams Questreihe fortsetzen; Overwatch als Stealth-Sniper-Option.'},
 {id:'g5',level:30,kind:'attribute',attribute:'technical',points:1,title:'Technik ausbauen',description:'Cyberware-Kapazität und technische Perks weiterentwickeln.'},
 {id:'g6',level:40,kind:'perk',title:'Edgerunner anstreben',description:'Technik 20 und die notwendigen Vorgänger-Perks einplanen.'},
 {id:'g7',level:50,kind:'gear',title:'Cyberware optimieren',description:'Implantate auf die verfügbare Kapazität und deinen Spielstil abstimmen.'},
 {id:'g8',level:60,kind:'mission',title:'Endgame-Build überprüfen',description:'Perks, Cyberware und Waffen anhand der tatsächlich verfügbaren Punkte finalisieren.'}]},
 {id:'netrunner',name:'NETRUNNER // DAEMON',tagline:'Quickhacks · Smart Weapons · Kontrolle',style:'Hacking / Fernkampf',expansion:'base',attributes:{cool:15,reflexes:15,technical:20,body:11,intelligence:20},steps:[
 {id:'n1',level:2,kind:'attribute',attribute:'intelligence',points:1,title:'Intelligenz priorisieren',description:'Quickhack-Fähigkeiten früh freischalten.'},
 {id:'n2',level:10,kind:'gear',title:'Cyberdeck aktualisieren',description:'Beim Ripperdoc nach einem geeigneten Cyberdeck schauen.'},
 {id:'n3',level:20,kind:'perk',title:'Overclock ausbauen',description:'Intelligenz 15 für Overclock anstreben.'},
 {id:'n4',level:35,kind:'attribute',attribute:'technical',points:1,title:'Technik für Cyberware',description:'Mehr Cyberware-Kapazität und Synergien aufbauen.'},
 {id:'n5',level:60,kind:'mission',title:'Finales Quickhack-Loadout',description:'Quickhack-Reihenfolge und RAM-Management optimieren.'}]},
 {id:'blade',name:'BLADE // PHANTOM',tagline:'Katana · Mobilität · Sandevistan',style:'Nahkampf / Reflexe',expansion:'phantom-liberty',attributes:{cool:15,reflexes:20,technical:20,body:20,intelligence:6},steps:[
 {id:'b1',level:2,kind:'attribute',attribute:'reflexes',points:1,title:'Reflexe priorisieren',description:'Beweglichkeit und Klingen-Perks freischalten.'},
 {id:'b2',level:15,kind:'perk',title:'Dash und Air Dash',description:'Reflexe 9 beziehungsweise 15 als Meilensteine.'},
 {id:'b3',level:25,kind:'gear',title:'Sandevistan auswählen',description:'Passendes Betriebssystem und Kühlung kombinieren.'},
 {id:'b4',level:40,kind:'attribute',attribute:'body',points:1,title:'Konstitution erhöhen',description:'Überlebensfähigkeit für den Nahkampf verbessern.'},
 {id:'b5',level:60,kind:'mission',title:'Phantom-Liberty-Endgame',description:'Relic-Perks und Endgame-Cyberware abstimmen.'}]}
];
