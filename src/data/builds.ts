import type {Attribute, Build, BuildStep} from '../types';

const perks='https://cyberpunk2077.wiki.fextralife.com/Perks';
type Route={id:string;name:string;tagline:string;style:string;expansion:'base'|'phantom-liberty';levelCap:50|60;attributes:Record<Attribute,number>;milestones:Record<number,{attribute:Attribute;perk:string;description:string;requirements?:string;gear?:string}>;}

// Every character level has an explicit checklist row. These are community
// routes, not an exported CDPR planner save; milestone perk names are sourced
// to the community wiki and should be checked against the in-game tree.
const routes:Route[]=[
 {id:'gunslinger',name:'DEADEYE // GUNSLINGER',tagline:'Pistolen · Revolver · Präzisionsgewehre',style:'Präzision / Stealth',expansion:'phantom-liberty',levelCap:60,attributes:{cool:20,reflexes:20,technical:20,body:18,intelligence:3},milestones:{
  1:{attribute:'cool',perk:'Startverteilung',description:'Bei der Charaktererstellung 7 Punkte verteilen: Coolness +4, Reflexe +2, Technik +1.',gear:'Frühe Wahl: beliebige Pistole oder Revolver; Waffenverfügbarkeit und Seltenheit hängen vom Spielfortschritt ab.'},
  4:{attribute:'cool',perk:'Killer Instinct',description:'Coolness-Pfad für geducktes Vorgehen und gezielte Eröffnungen beginnen.',requirements:'Coolness 4'},
  6:{attribute:'cool',perk:'Feline Footwork',description:'Mehr Sicherheit beim geduckten Bewegen; nützlich für Stealth-Eröffnungen.',requirements:'Coolness 4'},
  9:{attribute:'cool',perk:'Focus',description:'Auf präzises Zielen mit Pistolen und Präzisionswaffen ausrichten.',requirements:'Coolness 9',gear:'Waffenoption: Overwatch (ikonisches Präzisionsgewehr; Panams Quest „Riders on the Storm“).'},
  15:{attribute:'cool',perk:'Deadeye',description:'Kernfähigkeit für präzise Schüsse freischalten und den Cool-Pfad weiter ausbauen.',requirements:'Coolness 15; Focus'},
  18:{attribute:'reflexes',perk:'Dash',description:'Mobilität zum Wechseln der Schussposition ergänzen.',requirements:'Reflexe 9'},
  21:{attribute:'cool',perk:'Ninjutsu',description:'Stealth-Bewegung ergänzen, falls du Kämpfe gern aus der Tarnung eröffnest.',requirements:'Coolness 15; Feline Footwork'},
  26:{attribute:'reflexes',perk:'Air Dash',description:'Luftbewegung für schnelle Positionswechsel freischalten.',requirements:'Reflexe 15; Dash'},
  35:{attribute:'technical',perk:'License to Chrome',description:'Cyberware-Kapazität und Implantat-Synergien ausbauen.',requirements:'Technik 15',gear:'Cyberware: zuerst defensive und bewegungsunterstützende Implantate passend zu deiner Kapazität wählen.'},
  42:{attribute:'cool',perk:'Nerves of Tungsten-Steel',description:'Cool-Meisterperk für den Pistolen-/Präzisionswaffenpfad anstreben.',requirements:'Coolness 20; Deadeye'},
  50:{attribute:'technical',perk:'Edgerunner',description:'Optional mehr Cyberware-Kapazität nutzen; die Gesundheitseinbuße beachten.',requirements:'Technik 20'},
  60:{attribute:'body',perk:'Endgame-Abgleich',description:'Restliche Punkte und Cyberware nach eigenem Spielstil setzen. Phantom-Liberty-Relic-Punkte separat im Relic-Baum verteilen.',gear:'Loadout-Idee: Präzisionswaffe + Pistole; Overwatch ist eine mögliche ikonische Präzisionswaffe, keine Pflicht.'}
 }},
 {id:'netrunner',name:'NETRUNNER // DAEMON',tagline:'Quickhacks · Smart Weapons · Kontrolle',style:'Hacking / Fernkampf',expansion:'base',levelCap:50,attributes:{cool:11,reflexes:9,technical:15,body:16,intelligence:20},milestones:{
  1:{attribute:'intelligence',perk:'Startverteilung',description:'Bei der Charaktererstellung 7 Punkte verteilen: Intelligenz +4, Technik +2, Konstitution +1.',gear:'Früh ein Cyberdeck ausrüsten und Quickhacks passend zur verfügbaren RAM-Kapazität verwenden.'},
  4:{attribute:'intelligence',perk:'Optimization',description:'Grundlage für effizientere Quickhack-Nutzung.',requirements:'Intelligenz 4'},
  9:{attribute:'intelligence',perk:'Eye in the Sky',description:'Kameras zum Aufklären und Vorbereiten von Zielen nutzen.',requirements:'Intelligenz 9'},
  12:{attribute:'intelligence',perk:'Hack Queue',description:'Mehrere Quickhacks auf ein Ziel vorbereiten.',requirements:'Intelligenz 9',gear:'Ausrüstung: Cyberdeck mit passenden Quickhack-Slots; konkrete Decks nach Verfügbarkeit beim Ripperdoc wählen.'},
  15:{attribute:'intelligence',perk:'Queue Acceleration',description:'Die Quickhack-Warteschlange für vorbereitete Angriffsketten ausbauen.',requirements:'Intelligenz 15; Hack Queue'},
  20:{attribute:'intelligence',perk:'Overclock',description:'Quickhacks bei Bedarf über Gesundheit statt nur RAM finanzieren.',requirements:'Intelligenz 15'},
  27:{attribute:'intelligence',perk:'Embedded Exploit',description:'Quickhack-Kombinationen gegen kontrollierte oder vorbereitete Gegner unterstützen.',requirements:'Intelligenz 15'},
  32:{attribute:'intelligence',perk:'Smart Synergy',description:'Smart-Waffen mit dem Netrunner-Spielstil verbinden.',requirements:'Intelligenz 20',gear:'Waffenoption: Smart-Waffen nutzen, wenn das aktuelle Cyberdeck und die eigene Spielweise davon profitieren.'},
  38:{attribute:'technical',perk:'License to Chrome',description:'Cyberware-Kapazität und defensive Implantate ergänzen.',requirements:'Technik 15'},
  45:{attribute:'intelligence',perk:'Queue Mastery',description:'Späte Quickhack-Warteschlangen-Synergien anstreben.',requirements:'Intelligenz 20'},
  50:{attribute:'body',perk:'Loadout abstimmen',description:'Verbleibende Punkte in Überleben oder Technik investieren; Quickhack-Reihenfolge im Spiel testen.',gear:'Endgame: Cyberdeck, Quickhacks und eine Smart-Waffe als optionale Ergänzung aufeinander abstimmen.'}
 }},
 {id:'blade',name:'BLADE // PHANTOM',tagline:'Katana · Mobilität · Sandevistan',style:'Nahkampf / Reflexe',expansion:'phantom-liberty',levelCap:60,attributes:{cool:15,reflexes:20,technical:20,body:20,intelligence:6},milestones:{
  1:{attribute:'reflexes',perk:'Startverteilung',description:'Bei der Charaktererstellung 7 Punkte verteilen: Reflexe +4, Konstitution +2, Technik +1.',gear:'Früh ein Katana verwenden; Cyberware und Betriebssystem nach Verfügbarkeit und gewünschtem Tempo wählen.'},
  4:{attribute:'reflexes',perk:'Slippery',description:'Grundlage für einen beweglichen Nahkampf-Build.',requirements:'Reflexe 4'},
  9:{attribute:'reflexes',perk:'Dash',description:'Schnelleres Ausweichen und Herankommen.',requirements:'Reflexe 9'},
  12:{attribute:'reflexes',perk:'Lead and Steel',description:'Klingen-Route und Nahkampf-Paraden ausbauen.',requirements:'Reflexe 9',gear:'Waffenoption: Katana; ein ikonisches Modell ist ein optionales Sammlungsziel, kein Leistungszwang.'},
  15:{attribute:'reflexes',perk:'Air Dash',description:'Dash in der Luft fortsetzen und Gegner schneller erreichen.',requirements:'Reflexe 15; Dash'},
  21:{attribute:'reflexes',perk:'Finisher: Bladerunner',description:'Klingen-Finisher für geschwächte Gegner freischalten und ausbauen.',requirements:'Reflexe 15'},
  28:{attribute:'body',perk:'Adrenaline Rush',description:'Konstitution für Widerstandskraft und aggressives Vordringen nutzen.',requirements:'Konstitution 15',gear:'Cyberware: defensive Implantate und Nahkampf-Synergien nach Kapazität priorisieren.'},
  35:{attribute:'technical',perk:'License to Chrome',description:'Cyberware-Kapazität und passende Implantate ausbauen.',requirements:'Technik 15'},
  44:{attribute:'technical',perk:'Edgerunner',description:'Optional mehr Cyberware-Kapazität nutzen; Gesundheitseinbuße beachten.',requirements:'Technik 20'},
  52:{attribute:'cool',perk:'Ninjutsu',description:'Optional Stealth-Bewegung ergänzen, wenn der Build auch leise Eröffnungen nutzt.',requirements:'Coolness 15'},
  60:{attribute:'body',perk:'Phantom-Liberty-Endgame',description:'Relic-Fähigkeiten und restliche Perks nach Spielstil abstimmen; Relic-Punkte sind separat.',gear:'Loadout-Idee: Katana plus Sandevistan für Zeitverlangsamung oder ein anderes Betriebssystem nach Vorliebe.'}
 }}
];

function makeSteps(route:Route):BuildStep[]{
 const base={cool:3,reflexes:3,technical:3,body:3,intelligence:3};
 const targets=route.attributes;
 const allocations:Attribute[]=[];
 // Seven character-creation points at level 1, with a maximum +6 in one stat.
 const initial=Object.entries(targets).map(([key,value])=>({key:key as Attribute,need:value-3})).sort((a,b)=>b.need-a.need);
 for(let i=0;i<7;i++){const entry=initial.find(x=>base[x.key]<targets[x.key]&&base[x.key]-3<6)!;base[entry.key]++;allocations.push(entry.key)}
 // One attribute point for each later character level, weighted toward the target build.
 for(let level=2;level<=route.levelCap;level++){
  const chosen=(Object.keys(targets) as Attribute[]).filter(a=>base[a]<targets[a]).sort((a,b)=>((targets[b]-base[b])/(targets[b]-3))-((targets[a]-base[a])/(targets[a]-3)))[0];
  if(!chosen)break;base[chosen]++;allocations.push(chosen);
 }
 const milestoneLevels=Object.keys(route.milestones).map(Number).sort((a,b)=>a-b);
 return Array.from({length:route.levelCap},(_,index)=>{
  const level=index+1;let m=route.milestones[level];
  if(!m){const previous=milestoneLevels.filter(n=>n<=level).at(-1)!;m=route.milestones[previous]}
  const attribute=allocations[level-1]??m.attribute;
  const exact=route.milestones[level];
  const title=exact?.perk??`Perkpunkt · ${m.perk} weiterführen`;
  const detail=exact?.description??`Empfehlung für Level ${level}: den zuletzt freigeschalteten Kernperk weiter ausbauen oder den nächsten Rang im ${m.attribute==='cool'?'Coolness':m.attribute==='reflexes'?'Reflexe':m.attribute==='technical'?'Technik':m.attribute==='body'?'Konstitution':'Intelligenz'}-Baum wählen. Verfügbare Voraussetzungen und Perk-Ränge im Spiel prüfen.`;
  const gear=exact?.gear;
  const allocationText=level===1?`Startverteilung: ${allocations.slice(0,7).map(a=>a==='cool'?'Coolness':a==='reflexes'?'Reflexe':a==='technical'?'Technik':a==='body'?'Konstitution':'Intelligenz').join(', ')}.`:`Attributpunkt: ${attribute==='cool'?'Coolness':attribute==='reflexes'?'Reflexe':attribute==='technical'?'Technik':attribute==='body'?'Konstitution':'Intelligenz'}.`;
  return {id:`${route.id}-l${level}`,level,kind:exact?.gear?'gear':'perk',title,description:`${allocationText} ${detail}${gear?` Ausrüstung: ${gear}`:''}`,attribute,points:level===1?7:1,requirements:exact?.requirements,sourceUrl:exact?.requirements?perks:undefined};
 });
}

export const builds:Build[]=routes.map(({milestones,...route})=>({...route,steps:makeSteps({...route,milestones})}));
