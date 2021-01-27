const facMap = {
               "British Army": "GB",
              "Canadian Army": "CAF",
                 "Insurgents": "INS",
          "Irregular Militia": "MIL",
    "Middle Eastern Alliance": "MEA",
      "Russian Ground Forces": "RUS",
                    "US Army": "USA"
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

class SQLayer{
    constructor(jsonData){
        this.classname = jsonData.Name.toLowerCase().replaceAll(/ /g, '_').replaceAll(/[<>:'"\\\/\|\?\*]/g,'')
        this.name = jsonData.Name
        this.teamOne = {
            faction: facMap[jsonData.Team1.Faction],
            tickets: jsonData.Team1.Tickets,
            vehicles: jsonData.Team1.Vehicles.map( (vicData)=> {return new SQVehicle(vicData)} )
        } 
        this.teamTwo = {
            faction: facMap[jsonData.Team2.Faction],
            tickets: jsonData.Team2.Tickets,
            vehicles: jsonData.Team2.Vehicles.map( (vicData)=> {return new SQVehicle(vicData)} )
        } 
        this.flagCount = jsonData.CapturePoints
        this.flags = this.classname in mapLayerFlagData ? mapLayerFlagData[this.classname] : jsonData.Flags;

        let m = this.name.match(/(?<gamemode>\w+) [vV](?<version>\d+)/);
        this.gamemode = m.groups.gamemode
        this.version = m.groups.version

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