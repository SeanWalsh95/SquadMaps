var teamOneFaction = null
var teamTwoFaction = null
var factionLoadouts = {};
var layersJson = [];

var currLayerID = null;
var map = null;
var layerDict = {};

var noMatch = [];

//const wikiURI = 'https://raw.githubusercontent.com/Squad-Wiki-Editorial/squad-wiki-pipeline-map-data/dev/completed_output/2.0'
const wikiURI = 'https://raw.githubusercontent.com/Squad-Wiki-Editorial/squad-wiki-pipeline-map-data/dev/completed_output/_Current%20Version'


const facMap = {
  "British Army": "GB",
  "Canadian Army": "CAF",
  "Insurgent Forces": "INS",
  "Irregular Militia Forces": "MIL",
  "Middle Eastern Alliance": "MEA",
  "Russian Ground Forces": "RUS",
  "United States Army": "USA"
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

const allianceMap = {
  "Russian Ground Forces": "redfor",
  "Insurgent Forces" : "independent",
  "Civilians": "independent",
  "Middle Eastern Alliance": "independent",
  "Irregular Militia Forces": "independent",
  "United States Army": "blufor",
  "British Army": "blufor",
  "Canadian Army": "blufor"
}