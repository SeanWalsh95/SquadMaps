var teamOneLoadout = null
var teamTwoLoadout = null

var factionLoadouts = {};
var layersJson = [];

var currLayerID = null;
var map = null;
var layerDict = {};

var noMatch = [];

const gitWikiURI = 'https://raw.githubusercontent.com/Squad-Wiki-Editorial/squad-wiki-pipeline-map-data/dev/completed_output/_Current%20Version'
const cdnWikiURI = 'https://cdn.jsdelivr.net/gh/Squad-Wiki-Editorial/squad-wiki-pipeline-map-data@dev/completed_output/_Current%20Version'

class SQEnum{

  constructor(type, values){

    this.__TYPE = type
    Object.assign(this, values);

    Object.freeze(this);
  }

  values(){
    return Object.values(this).filter(obj=> typeof obj === 'object')
  }

  keys(){
    return Object.keys(this).filter(k => k !== "__TYPE")
  }

  entries(){
    let entries_list = []
    for(const key of this.keys()){
      entries_list.push([key, this[key]])
    }
    return entries_list
  }

  keyMatch(search){
    for(const [key, obj] of Object.entries(this)){
      if (search.toLowerCase() === key.toLowerCase())
        return obj
    }
    throw new Error(`"${search}" not found in Enum ${this.__TYPE}`)
  }

  conditionMatch(condition, search){
    let matches = this.values().filter(condition)

    if (matches.length === 1) return matches[0]
    
    throw new Error(`"${search}" not found via conditionMatch for Enum ${this.__TYPE}`)
  }

}

const allianceEnum = new SQEnum(
  "ALLIANCE",
  {
       REDFOR: "REDFOR",
      BLUEFOR: "BLUEFOR",
  INDEPENDENT: "INDEPENDENT"
});

const factionEnum = new SQEnum(
  "FACTION",
  {
    GB: {
      initials:"GB",
      identifiers: ["GB", "UK"],
      name:"British Army",
      alliance: allianceEnum.BLUEFOR
    },
    CAF: {
      initials:"CAF",
      identifiers: ["CAF"],
      name:"Canadian Army",
      alliance: allianceEnum.BLUEFOR
    },
    CIV: {
      initials:"CIV",
      identifiers: ["CIV","Civilian"],
      name:"Civilians",
      alliance: allianceEnum.BLUEFOR
    },
    INS: {
      initials:"INS",
      identifiers: ["INS", "Insurgent"],
      name:"Insurgent Forces",
      alliance: allianceEnum.INDEPENDENT
    },
    MIL: {
      initials:"MIL",
      identifiers: ["MIL", "Militia"],
      name:"Irregular Militia Forces",
      alliance: allianceEnum.INDEPENDENT
    },
    MEA: {
      initials:"MEA",
      identifiers: ["MEA"],
      name:"Middle Eastern Alliance",
      alliance: allianceEnum.INDEPENDENT
    },
    RUS: {
      initials:"RUS",
      identifiers: ["RUS","RU"],
      name:"Russian Ground Forces",
      alliance: allianceEnum.REDFOR
    },
    USA: {
      initials:"USA",
      identifiers: ["USA", "US"],
      name:"United States Army",
      alliance: allianceEnum.BLUEFOR
    }
});

const gamemodeEnum = new SQEnum(
  "GAMEMODE",
  {
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
    },
    Seed:{
      value: "Seed",
      name: "Seed",
      abbr: "Seed"
    }
});


const mapNames = {
  "anvil": "Anvil",
  "albasrah": "Al Basrah",
  "belaya": "Belaya",
  "chora": "Chora",
  "fallujah": "Fallujah",
  "fools": "Fool's Road",
  "goosebay": "Goose Bay",
  "gorodok": "Gorodok",
  "jensen": "Jensen's Range",
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
  "sumari": "Sumari Bala",
  "tallil": "Tallil",
  "yehorivka": "Yehorivka"
}
var maps_dict = {}
for (const search of Object.keys(mapNames))
  maps_dict[search] = []
