import type {MapPoint,Category} from '../types';
export const categories:Record<Category,string>={mission:'Hauptmissionen',side:'Nebenmissionen',ncpd:'NCPD-Einsätze',cyberpsycho:'Cyberpsychos',ripperdoc:'Ripperdocs',weapons:'Waffenhändler',clothing:'Kleidungshändler','fast-travel':'Schnellreise',apartment:'Apartments',poi:'POIs'};
// DEMO-DATEN: Normalisierte, illustrative Positionen (0..100), KEINE echten Spielkoordinaten.
export const points:MapPoint[]=[
 {id:'p1',name:'Watson – Startgebiet',category:'poi',district:'Watson',x:28,y:24,description:'Illustrativer Marker für Watson.',expansion:'base',verified:false},
 {id:'p2',name:'Hauptmission – Beispiel',category:'mission',district:'City Center',x:52,y:47,description:'Beispielmarker. Nicht als echter Missionsort verwenden.',expansion:'base',verified:false},
 {id:'p3',name:'Nebenmission – Beispiel',category:'side',district:'Westbrook',x:74,y:30,description:'Beispielmarker ohne validierte Koordinaten.',expansion:'base',verified:false},
 {id:'p4',name:'NCPD – Beispiel',category:'ncpd',district:'Santo Domingo',x:70,y:70,description:'Beispielmarker ohne validierte Koordinaten.',expansion:'base',verified:false},
 {id:'p5',name:'Cyberpsycho – Beispiel',category:'cyberpsycho',district:'Pacifica',x:33,y:77,description:'Beispielmarker ohne validierte Koordinaten.',expansion:'base',verified:false},
 {id:'p6',name:'Ripperdoc – Beispiel',category:'ripperdoc',district:'Watson',x:40,y:32,description:'Beispielmarker ohne validierte Koordinaten.',expansion:'base',verified:false},
 {id:'p7',name:'Waffenhändler – Beispiel',category:'weapons',district:'Heywood',x:46,y:62,description:'Beispielmarker ohne validierte Koordinaten.',expansion:'base',verified:false},
 {id:'p8',name:'Kleidungshändler – Beispiel',category:'clothing',district:'Westbrook',x:81,y:42,description:'Beispielmarker ohne validierte Koordinaten.',expansion:'base',verified:false},
 {id:'p9',name:'Schnellreise – Beispiel',category:'fast-travel',district:'City Center',x:61,y:52,description:'Beispielmarker ohne validierte Koordinaten.',expansion:'base',verified:false},
 {id:'p10',name:'Apartment – Beispiel',category:'apartment',district:'Watson',x:30,y:42,description:'Beispielmarker ohne validierte Koordinaten.',expansion:'base',verified:false},
 {id:'p11',name:'Dogtown – Beispiel',category:'poi',district:'Dogtown',x:22,y:66,description:'Phantom Liberty: illustrative Lage, kein echter Kartenpunkt.',expansion:'phantom-liberty',verified:false}
];
