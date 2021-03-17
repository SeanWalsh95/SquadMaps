var teamOneLoadout = null
var teamOneLoadout = null

var factionLoadouts = {};
var layersJson = [];

var currLayerID = null;
var map = null;
var layerDict = {};

var noMatch = [];

const gitWikiURI = 'https://raw.githubusercontent.com/Squad-Wiki-Editorial/squad-wiki-pipeline-map-data/dev/completed_output/_Current%20Version'
const cdnWikiURI = 'https://cdn.jsdelivr.net/gh/Squad-Wiki-Editorial/squad-wiki-pipeline-map-data@dev/completed_output/_Current%20Version'


const allianceEnum = Object.freeze({
       REDFOR: "REDFOR",
      BLUEFOR: "BLUEFOR",
  INDEPENDENT: "INDEPENDENT"
});

const factionEnum = Object.freeze({
   GB: {
     initials:"GB",
     name:"British Army",
     alliance: allianceEnum.BLUEFOR
  },
  CAF: {
    initials:"CAF",
    name:"Canadian Army",
    alliance: allianceEnum.BLUEFOR
  },
  CIV: {
    initials:"CIV",
    name:"Civilians",
    alliance: allianceEnum.BLUEFOR
  },
  INS: {
    initials:"INS",
    name:"Insurgent Forces",
    alliance: allianceEnum.INDEPENDENT
  },
  MIL: {
    initials:"MIL",
    name:"Irregular Militia Forces",
    alliance: allianceEnum.INDEPENDENT
  },
  MEA: {
    initials:"MEA",
    name:"Middle Eastern Alliance",
    alliance: allianceEnum.INDEPENDENT
  },
  RUS: {
    initials:"RUS",
    name:"Russian Ground Forces",
    alliance: allianceEnum.REDFOR
  },
  USA: {
    initials:"USA",
    name:"United States Army",
    alliance: allianceEnum.BLUEFOR
  }
});

const gamemodeEnum = Object.freeze({
  AAS: {
    value: "AAS",
    name : "Advance and Secure",
    abbr: "AAS"
  } ,
  Destruction: {
    value: "Destruction",
    name : "Destruction",
    abbr: "DES"
  },
  Insurgency: {
    value: "Insurgency",
    name : "Insurgency",
    abbr: "INS"
  },
  Invasion: {
    value: "Invasion",
    name : "Invasion",
    abbr: "INV"
  },
  RAAS: {
    value: "RAAS",
    name : "Advance and Secure (Random)",
    abbr: "RAAS"
  },
  Skirmish: {
    value: "Skirmish",
    name : "Skirmish",
    abbr: "SKMSH"
  },
  TA: {
    value: "TA",
    name : "Track Attack",
    abbr: "TA"
  },
  Tanks: {
    value: "Tanks",
    name : "Tanks",
    abbr: "Tanks"
  },
  TC: {
    value: "TC",
    name : "Territory Control",
    abbr: "TC"
  },
  Training:{
    value: "Training",
    name : "Training",
    abbr: "Training"
  },
  Tutorial:{
    value: "Tutorial",
    name : "Tutorial",
    abbr: "Tutorial"
  }
});


function enumMatch(enumType, search){
  for(const [enumKey, enumObj] of Object.entries(enumType)){
    if (search.toLowerCase() === enumKey.toLowerCase())
      return enumObj
  }

  console.log(`Search: ${search} not found in Enum`, enumType)
  return null
}

function facMatch(searchStr){
  for(const facEnum of Object.values(factionEnum)){
    if(facEnum.name.toLowerCase().match(searchStr.toLowerCase()))
      return facEnum
    if(facEnum.initials === searchStr)
      return facEnum
  }

  console.log(`No Faction found for: ${searchStr}`)
  return null
}


const mapNames = {
  "albasrah": "Al Basrah",
  "belaya": "Belaya",
  "chora": "Chora",
  "fallujah": "Fallujah",
  "fools": "Fool's Road",
  "goosebay": "Goose Bay",
  "gorodok": "Gorodok",
  /*"jensensrange": "Jensen's Range",*/
  "kamdesh": "Kamdesh",
  "kohat": "Kohat",
  "kokan": "Kokan",
  "lashkar": "Lashkar Valley",
  "logar": "Logar Vally",
  "manic": "Manic-5",
  "mestia": "Mestia",
  "mutaha": "Mutaha",
  "narva": "Narva",
  "skorpo": "Skorpo",
  "sumari": "Sumari",
  "tallil": "Tallil",
  "yehorivka": "Yehorivka"
}
var maps_dict = {}
for (const search of Object.keys(mapNames))
  maps_dict[search] = []
