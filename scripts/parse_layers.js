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

var maps_dict = {
    "Al Basrah":[],
    "Belaya":[],
    "Chora":[],
    "Fallujah":[],
    "Fool's Road":[],
    "Goose Bay": [],
    "Gorodok":[],
    "Kamdesh":[],
    "Kohat":[],
    "Kokan":[],
    "Lashkar Valley":[],
    "Logar":[],
    "Manic":[],
    "Mestia":[],
    "Mutaha":[],
    "Narva":[],
    "Nanisivik":[],
    "Skorpo":[],
    "Sumari":[],
    "Tallil":[],
    "Yehorivka":[]
};


allianceMap = {
    "Russian Ground Forces": "redfor",
    "Insurgent Forces" : "independent",
    "Civilians": "independent",
    "Middle Eastern Alliance": "independent",
    "Irregular Militia Forces": "independent",
    "United States Army": "blufor",
    "British Army": "blufor",
    "Canadian Army": "blufor"
}

class LoadoutContainer{
    constructor(jsonData){

        this.factions = {}
        this.alliances = {
                 blufor: {},
                 redfor: {},
            independent: {}
        }

        for (const facData of jsonData){
            let facObj = new FactionLoadout(facData)
            let lookup = `${facObj.faction}#${facObj.type}`
            this.factions[lookup] = facObj

            if(facObj.type in this.alliances[facObj.alliance])
                this.alliances[facObj.alliance][facObj.type].push(lookup)
            else
                this.alliances[facObj.alliance][facObj.type] = [lookup]
        }
    }
    
    getFactions(alliance, setups){
        alliance = alliance.toLowerCase()
        let loadouts = {}

        if ((!alliance in this.alliances)) 
            return loadouts

        for(const setup of setups){
            if(setup in this.alliances[alliance]){
                for(const facLookup of this.alliances[alliance][setup]){
                    let facLoadout = this.factions[facLookup]
                    if (facLoadout.faction in loadouts) {
                        loadouts[facLoadout.faction][facLoadout.type] = facLoadout
                    } else {
                        loadouts[facLoadout.faction] = {[facLoadout.type]: facLoadout }
                    }
                }
            }
        }

        if (!( Object.keys(loadouts).length > 0))
            console.log(`NO LOADOUTS FOR: ${setups} from ${alliance}`)

        return loadouts
    } 
}

class FactionLoadout{
    constructor(jsonData){
        this.faction = ignoreCaseSearch(jsonData,'faction')
        this.longName = ignoreCaseSearch(jsonData,'setup_Name')
        this.name = ignoreCaseSearch(jsonData,'shortname')
        this.type = ignoreCaseSearch(jsonData,'type')
        this.badge = ignoreCaseSearch(jsonData,'badge')
        this.vehicles = ignoreCaseSearch(jsonData,'vehicles')
        this.alliance = allianceMap[this.faction]
        this.initials = facMap[ignoreCaseSearch(jsonData,'faction')]

        if (this.vehicles){
            let vicLookup = {}
            for (const vicData of this.vehicles){
                let classname = ignoreCaseSearch(vicData,'rawType')
                if(classname in vicLookup)
                    vicLookup[classname].quantity++
                else
                    vicLookup[classname] = new SQVehicle(vicData)
            }
            this.vehicles = Object.values(vicLookup)
        }
    }

}

class SQLayer{
    constructor(jsonData){
        this.name = ignoreCaseSearch(jsonData,'name')

        this.classname = this.name
        this.classname = this.classname.toLowerCase().replaceAll(/ /g, '_').replaceAll(/[<>:'"\\\/\|\?\*]/g,'')

        this.lighting = jsonData.lighting

        this.teamOne = {}
        this.teamTwo = {}

        let teams = {"teamOne":ignoreCaseSearch(jsonData,'team1'),"teamTwo":ignoreCaseSearch(jsonData,'team2')}

        for (const [team, data] of Object.entries(teams)){
            this[team] = {
                alliances: ignoreCaseSearch(data,'allowedAlliances'),
                setups: ignoreCaseSearch(data,'factionSetups'),
                intel: ignoreCaseSearch(data,'intelOnEnemy'),
                actions: ignoreCaseSearch(data,'actions'),
                tickets: ignoreCaseSearch(data,'tickets')
            }

            if (this[team].alliances){
                let factions = {}
                for(const alliance of this[team].alliances){
                    factions = Object.assign(factions, factionLoadouts.getFactions(alliance, this[team].setups) )
                }
                this[team].factions = factions
            }else{

                let staticLoadout = new FactionLoadout(data)
                let teamVics = ignoreCaseSearch(data,'vehicles')
                if (teamVics)
                    teamVics = teamVics.map( (vicData)=> {return new SQVehicle(vicData)})
                this[team].factions = {[staticLoadout.faction]:{"STATIC":staticLoadout}}
                this[team].setups = ["STATIC"]
            }

        }

        this.flagCount = ignoreCaseSearch(jsonData,'CapturePoints')
        this.flags = this.classname in mapLayerFlagData ? mapLayerFlagData[this.classname] : ignoreCaseSearch(jsonData,'Flags');

        let mGame = this.name.match(/(?<gamemode>\w+)(?=(?:$|\s+[vV]))/);
        let mVersion = this.name.match(/(?<=[vV])(?<version>\d+)/) || ['1'];

        this.gamemode = ignoreCaseSearch(jsonData,'gamemode') || mGame[0]
        this.version =  ignoreCaseSearch(jsonData,'layerVersion') || mVersion[0];
        this.version = this.version.replace(/[vV]/,'')
    }

    genLoadoutOptionElements(){
        return {
            teamOne: optionsFromArray(this.teamOne.setups),
            teamTwo: optionsFromArray(this.teamTwo.setups)
        }
    }

    genFactionOptionElements(){ 
        var facOptions = {teamOne:[], teamTwo:[]}
      
        for(const faction of Object.keys(this.teamOne.factions)){
            var optionElement = document.createElement("option");
            optionElement.value = faction
            optionElement.innerHTML = facMap[faction]
            facOptions.teamOne.push(optionElement)
        }
        
        for(const faction of Object.keys(this.teamTwo.factions)){
            var optionElement = document.createElement("option");
            optionElement.value = faction
            optionElement.innerHTML = facMap[faction]
            facOptions.teamTwo.push(optionElement)
        }
        return facOptions
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