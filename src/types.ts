export type Attribute = 'cool'|'reflexes'|'technical'|'body'|'intelligence';
export type BuildStep = { id:string; level:number; kind:'attribute'|'perk'|'gear'|'mission'; title:string; description:string; attribute?:Attribute; points?:number; itemId?:string; optional?:boolean; requirements?:string; sourceUrl?:string };
export type Build = {id:string; name:string; tagline:string; style:string; expansion:'base'|'phantom-liberty'; levelCap:50|60; attributes:Record<Attribute,number>; steps:BuildStep[]};
export type Category = 'mission'|'side'|'ncpd'|'cyberpsycho'|'ripperdoc'|'weapons'|'clothing'|'fast-travel'|'apartment'|'poi';
export type MapPoint = {id:string; name:string; category:Category; district:string; x:number; y:number; description:string; expansion:'base'|'phantom-liberty'; verified:boolean; itemIds?:string[]};
export type Item = {id:string; name:string; kind:'weapon'|'cyberware'|'other'; subtype:string; expansion:'base'|'phantom-liberty'; source:string; description:string; missable?:boolean; pointId?:string; verified:boolean; buildIds?:string[]; recommendation?:'core'|'alternative'; sourceUrl?:string};
export type SaveProfile = {id:string; name:string; buildId:string; level:number; completedStepIds:string[]; collectedItemIds:string[]; visitedPointIds:string[]};
