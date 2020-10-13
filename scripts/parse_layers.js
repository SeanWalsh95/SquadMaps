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

var layer_dict = {};

const no_vic_object = { "teamTwo": {"vehicles": []}, "teamOne": {"vehicles": []} };

for (const layer of layersJson) {
    layer_dict[layer.layerClassname] = layer;
    var merged_layer = Object.assign({}, layer_dict[layer.layerClassname]);
    if(layer.layerClassname in vehicle_data){
        Object.assign(merged_layer.teamOne, layer_dict[layer.layerClassname].teamOne, vehicle_data[layer.layerClassname].teamOne);
        Object.assign(merged_layer.teamTwo, layer_dict[layer.layerClassname].teamTwo, vehicle_data[layer.layerClassname].teamTwo);
    }else{
        Object.assign(merged_layer.teamOne, layer_dict[layer.layerClassname].teamOne, no_vic_object.teamOne);
        Object.assign(merged_layer.teamTwo, layer_dict[layer.layerClassname].teamTwo, no_vic_object.teamTwo);
    }
    for (const map in maps_dict) {
        if(layer.map.match(map)){
            maps_dict[map].push(merged_layer);
        }
    }
}

function fixFac(factionStr){ return factionStr.split('_')[0]; }