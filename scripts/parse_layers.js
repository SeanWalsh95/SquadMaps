class SQVehicle {
    constructor(vicData){
        this.name = vicData.name;
        this.quantity = vicData.quantity;
        if(vicData.delay)
            this.delay = vicData.delay;
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
		if(this.name in vehicleIconDict){
			img.src = `img/icons/map_${vehicleIconDict[this.name]}.png`;
		}
		listItem.appendChild(img);

		var vicNameHeader = document.createElement("h6");
		vicNameHeader.textContent = this.shortName();
		listItem.appendChild(vicNameHeader);

		if(this.delay){
			var delay =  "Delayed " + this.delay / 60 + " mins";
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

const emptyVicObject = { "teamTwo": {"vehicles": []}, "teamOne": {"vehicles": []} };

for(const layerId in layerVehicleData){
    var t1List = [];
    for(const vic of layerVehicleData[layerId].teamOne.vehicles){ t1List.push(new SQVehicle(vic)); }
    layerVehicleData[layerId].teamOne.vehicles = t1List;
    
    var t2List = [];
    for(const vic of layerVehicleData[layerId].teamTwo.vehicles){ t2List.push(new SQVehicle(vic)); }
    layerVehicleData[layerId].teamTwo.vehicles = t2List;
}

function fixFac(factionStr){ return factionStr.split('_')[0]; }

function parseJsonData(){
    for(const layer of layersJson) {
        var merged_layer = {};
        
        Object.assign(merged_layer, layer);
        
        if(layer.layerClassname in mapLayerFlagData)
            Object.assign(merged_layer, {"flags":mapLayerFlagData[layer.layerClassname]});

        if(layer.layerClassname in layerVehicleData){
            Object.assign(merged_layer.teamOne, layer.teamOne, layerVehicleData[layer.layerClassname].teamOne);
            Object.assign(merged_layer.teamTwo, layer.teamTwo, layerVehicleData[layer.layerClassname].teamTwo);
        }else{
            Object.assign(merged_layer.teamOne, layer.teamOne, emptyVicObject.teamOne);
            Object.assign(merged_layer.teamTwo, layer.teamTwo, emptyVicObject.teamTwo);
        }
        for (const map in maps_dict) {
            if(layer.map.match(map)){
                maps_dict[map].push(layer.layerClassname);
            }
        }
        layerDict[layer.layerClassname] = merged_layer;
    }
    }