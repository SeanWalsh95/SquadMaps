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


const allianceEnum = {
       REDFOR: "REDFOR",
      BLUEFOR: "BLUEFOR",
  INDEPENDENT: "INDEPENDENT"
}
Object.freeze(allianceEnum);

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

const facMap = {
  "British Army": factionEnum.GB,
  "Canadian Army": factionEnum.CAF,
  "Insurgent Forces": factionEnum.INS,
  "Irregular Militia Forces": factionEnum.MIL,
  "Middle Eastern Alliance": factionEnum.MEA,
  "Russian Ground Forces": factionEnum.RUS,
  "United States Army": factionEnum.USA
}

const gmAbbv = {
  "AAS": "AAS",
  "Destruction": "DES",
  "Insurgency": "INS",
  "Invasion": "INV",
  "RAAS": "RAAS",
  "Skirmish": "SKMSH",
  "TA": "TA",
  "TC": "TC",
  "Tanks": "Tanks"
}

const mapNames = {
  "albasrah": "Al Basrah",
  "belaya": "Belaya",
  "chora": "Chora",
  "fallujah": "Fallujah",
  "fools": "Fool's Road",
  "goosebay": "Goose Bay",
  "gorodok": "Gorodok",
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
for (const [search, display] of Object.entries(mapNames))
  maps_dict[search] = []
