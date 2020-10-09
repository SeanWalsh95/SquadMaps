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

for (const layer of layersJson) {
    layer_dict[layer.layerClassname] = layer;
    var merged_layer = Object.assign({}, layer_dict[layer.layerClassname]);
    if(layer.layerClassname in vehicle_data){
        Object.assign(merged_layer.teamOne, layer_dict[layer.layerClassname].teamOne, vehicle_data[layer.layerClassname].teamOne);
        Object.assign(merged_layer.teamTwo, layer_dict[layer.layerClassname].teamTwo, vehicle_data[layer.layerClassname].teamTwo);
    }
    for (const map in maps_dict) {
        if(layer.map.match(map)){
            maps_dict[map].push(merged_layer);
        }
    }
}


for( const [map, layers] of Object.entries(maps_dict) ){

    var htmlMapID = "#"+map.toLowerCase().replaceAll(' ','_');

    var mapHeader = document.createElement('a');
    mapHeader.className = "headers";
    mapHeader.textContent = map;
    mapHeader.href = htmlMapID;

    var headerContainer = document.getElementsByClassName('headers_section')[0];
    headerContainer.appendChild(mapHeader);


    var body =  document.body;

    var mapContainer = document.getElementsByClassName('map_container')[0];
    
    var mapSection = document.createElement('section');
    mapSection.id = htmlMapID;
    
    var mapSectionTitle = document.createElement('h2');
    mapSectionTitle.textContent = map;

    mapSection.appendChild(mapSectionTitle);
    
    for (const layer of layers) {
        var layerDiv =  document.createElement('div');

        var map_a =  document.createElement('a');
        map_a.href = `img/maps/full_size/${layer.layerClassname}.jpg`;

        var map_img =  document.createElement('img');
        map_img.src = `img/maps/thumbnails/${layer.layerClassname}.jpg`;

        map_a.appendChild(map_img);
        layerDiv.appendChild(map_a);
        
        var layerH3 = document.createElement('h3');
        layerH3.textContent = `${layer.gamemode} ${layer.version}`;
        layerDiv.appendChild(layerH3);

        var vic_a =  document.createElement('a');
        vic_a.className = "vehicles";
        vic_a.href = `javascript:view_vehicles('${layer.layerClassname}');`;

        var vic_img =  document.createElement('img');
        vic_img.src = `img/icons/vehicles.png`;

        vic_a.appendChild(vic_img);
        layerDiv.appendChild(vic_a);

        mapSection.appendChild(layerDiv);
    }
    mapContainer.appendChild(mapSection);
}
