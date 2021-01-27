const facMap = {
               "British Army": "GB",
              "Canadian Army": "CAF",
                 "Insurgents": "INS",
          "Irregular Militia": "MIL",
    "Middle Eastern Alliance": "MEA",
      "Russian Ground Forces": "RUS",
                    "US Army": "USA"
}

const gmAbbv = {
            "AAS": "AAS",
    "Destruction": "DES",
     "Insurgency": "INS",
       "Invasion": "INV",
           "RAAS": "RAAS",
       "Skirmish": "SKI",
             "TA": "TA",
             "TC": "TC"
}

var maps_dict = {
    "Al Basrah":[],
    "Belaya":[],
    "Chora":[],
    "Fallujah":[],
    "Fool's Road":[],
    "Gorodok":[],
    "Jensen's Range":[],
    "Kamdesh":[],
    "Kohat":[],
    "Kokan":[],
    "Lashkar Valley":[],
    "Logar":[],
    "Manic-5":[],
    "Mestia":[],
    "Mutaha":[],
    "Narva":[],
    "Nanisivik":[],
    "Skorpo":[],
    "Sumari":[],
    "Tallil":[],
    "Yehorivka":[]
};


function ignoreCaseSearch(obj, search){
    return obj[Object.keys(obj).find(key => key.toLowerCase() === search.toLowerCase())];
}

class SQLayer{
    constructor(jsonData){
        this.name = ignoreCaseSearch(jsonData,'name')
        this.classname = jsonData.rawName || this.name
        this.classname = this.classname.toLowerCase().replaceAll(/ /g, '_').replaceAll(/[<>:'"\\\/\|\?\*]/g,'')

        this.lighting = jsonData.lighting

        let teams = {"teamOne":ignoreCaseSearch(jsonData,'team1'),"teamTwo":ignoreCaseSearch(jsonData,'team2')}

        for (const [team, data] of Object.entries(teams)){
            this[team] = {
                name: ignoreCaseSearch(data,'teamSetupName'),
                intel: ignoreCaseSearch(data,'intelOnEnemy'),
                actions: ignoreCaseSearch(data,'actions'),
                faction: facMap[ ignoreCaseSearch(data,'faction')],
                tickets: ignoreCaseSearch(data,'tickets'),
                vehicles: ignoreCaseSearch(data,'vehicles').map( (vicData)=> {return new SQVehicle(vicData)} )
            }
        }

        this.flagCount = ignoreCaseSearch(jsonData,'CapturePoints')
        this.flags = this.classname in mapLayerFlagData ? mapLayerFlagData[this.classname] : ignoreCaseSearch(jsonData,'Flags');

        let m = this.name.match(/(?<gamemode>\w+) [vV](?<version>\d+)/);
        this.gamemode = ignoreCaseSearch(jsonData,'gamemode') || m.groups.gamemode
        this.version =  ignoreCaseSearch(jsonData,'layerVersion') || `v${m.groups.version}` 

    }
}


var currLayerID = null;
var map = null;
var layerDict = {};

function parseJsonData(){
    for(const layer of layersJson) {
        for (const map in maps_dict) {
            if(layer.name.match(map)){
                layer.map = map
                maps_dict[map].push(layer.classname);
            }
        }
        layerDict[layer.classname] = layer;
    }
}