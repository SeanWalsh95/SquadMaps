const facMap = {
    "British Army": "GB",
    "Canadian Army": "CAF",
    "Insurgents": "INS",
    "Irregular Militia": "MIL",
    "Middle Eastern Alliance": "MEA",
    "Russian Ground Forces": "RUS",
    "US Army": "USA"
}

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
        this.flags = jsonData.Flags
    }
}

class SQVehicle {
    constructor(vicData){
        this.name = vicData.Name;
        this.quantity = vicData.Count;
        this.displayName = vicData.DisplayName
        if(vicData.Delay)
            this.delay = vicData.Delay;
        else
            this.delay = 0;
}

    shortName(){
		var shortName = this.name;
		for(const word of vehicleVerboseWords){ shortName = shortName.replace(word, ''); }
        return shortName.trim();
    }

    genListItemElement(){
		var listItem = document.createElement("li");

		var countParagraph = document.createElement("p");
		countParagraph.textContent = this.quantity;
		listItem.appendChild(countParagraph);

		var img = document.createElement("img");		
		if(this.displayName in vehicleIconDict){
			img.src = `img/icons/map_${vehicleIconDict[this.displayName]}.png`;
		}
		listItem.appendChild(img);

		var vicNameHeader = document.createElement("a");
        vicNameHeader.textContent = this.shortName();        
        vicNameHeader.href = `javascript:openInNewTab('https://squad.gamepedia.com/${this.name}');`;
		listItem.appendChild(vicNameHeader);

		if(this.delay){
			var delay =  `Delayed ${this.delay} mins`;
			var vicDelaySmall = document.createElement("small");
			vicDelaySmall.textContent = delay;
			listItem.appendChild(document.createElement('br'));
			listItem.appendChild(vicDelaySmall);
		}
        return listItem;
    }
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

var currLayerID = null;
var map = null;
var layerDict = {};

function parseJsonData(){
    for(const layer of layersJson) {
        var merged_layer = {};
       
        Object.assign(merged_layer, layer);
        
        if(layer.classname in mapLayerFlagData)
            Object.assign(merged_layer, {"flags":mapLayerFlagData[layer.classname]});

        for (const map in maps_dict) {
            if(layer.name.match(map)){
                let match = layer.name.match(/(\w+) [vV](\d+)/);
                merged_layer.map = map
                merged_layer.gamemode = match[1]
                merged_layer.version = match[2]
                maps_dict[map].push(layer.classname);
            }
        }
        layerDict[layer.classname] = merged_layer;
    }
    }