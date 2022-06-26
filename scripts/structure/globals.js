var teamOneLoadout = null
var teamTwoLoadout = null

var factionLoadouts = {};
var layersJson = [];

var currLayerID = null;
var map = null;
var layerDict = {};

var noMatch = [];

// const gitWikiDataURI = 'https://raw.githubusercontent.com/Squad-Wiki-Editorial/squad-wiki-pipeline-map-data/master/completed_output/_Current%20Version/finished.json'
const gitWikiDataURI = 'https://raw.githubusercontent.com/Shanomac99/SquadJSON/main/mapData/current/maps.json'
const cdnImageURI = 'https://squad-data.nyc3.cdn.digitaloceanspaces.com'

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
    AUS: {
      initials:"AUS",
      identifiers: ["AUS", "Australian"],
      name:"Australian Defence Force",
      alliance: allianceEnum.BLUEFOR
    },
    GB: {
      initials:"GB",
      identifiers: ["GB", "UK", "British"],
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
    },
    USMC: {
      initials:"USMC",
      identifiers: ["USMC"],
      name:"United States Marine Corps",
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
      value: "Track Attack",
      name : "Track Attack",
      abbr: "TA"
    },
    Tanks: {
      value: "Tanks",
      name : "Tanks",
      abbr: "Tanks"
    },
    TC: {
      value: "Territory Control",
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

const mapEnum = new SQEnum(
  "MAP",
  {
    anvil:{
      search: "anvil",
      displayname: "Anvil"
    },
    albasrah: {
      search: "albasrah",
      displayname:"Al Basrah"
    },
    belaya: {
      search: "belaya",
      displayname:"Belaya"
    },
    blackcoast: {
      search: "blackcoast",
      displayname:"Black Coast"
    },
    chora: {
      search: "chora",
      displayname:"Chora"
    },
    fallujah: {
      search: "fallujah",
      displayname:"Fallujah"
    },
    fools: {
      search: "fools",
      displayname:"Fool's Road"
    },
    goosebay: {
      search: "goosebay",
      displayname:"Goose Bay"
    },
    gorodok: {
      search: "gorodok",
      displayname:"Gorodok"
    },
    jensen: {
      search: "jensen",
      displayname:"Jensen's Range"
    },
    kamdesh: {
      search: "kamdesh",
      displayname:"Kamdesh"
    },
    kohat: {
      search: "kohat",
      displayname:"Kohat"
    },
    kokan: {
      search: "kokan",
      displayname:"Kokan"
    },
    lashkar: {
      search: "lashkar",
      displayname:"Lashkar Valley"
    },
    logar: {
      search: "logar",
      displayname:"Logar Vally"
    },
    manic: {
      search: "manic",
      displayname:"Manic-5"
    },
    mestia: {
      search: "mestia",
      displayname:"Mestia"
    },
    mutaha: {
      search: "mutaha",
      displayname:"Mutaha"
    },
    narva: {
      search: "narva",
      displayname:"Narva"
    },
    skorpo: {
      search: "skorpo",
      displayname:"Skorpo"
    },
    sumari: {
      search: "sumari",
      displayname:"Sumari Bala"
    },
    tallil: {
      search: "tallil",
      displayname:"Tallil"
    },
    yehorivka: {
      search: "yehorivka",
      displayname:"Yehorivka"
    }
});

var maps_dict = {}
for (const search of mapEnum.keys())
  maps_dict[search] = []
