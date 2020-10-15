function scrollToId(id){
    document.getElementById(id).scrollIntoView();
}


for( const [map, layers] of Object.entries(maps_dict) ){

    var htmlMapID = "#"+map.toLowerCase().replaceAll(' ','_');

    var mapHeader = document.createElement('a');
    mapHeader.className = "headers";
    mapHeader.textContent = map;
    mapHeader.href = `javascript:scrollToId('${htmlMapID}')`;

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
        layerDiv.className = 'map-layer-card';


        var cardTitle = document.createElement('div');
        cardTitle.className = 'map-card-title';
        
        var layerH3 = document.createElement('h3');
        layerH3.textContent = `${layer.gamemode} ${layer.version}`;
        cardTitle.appendChild(layerH3);

        layerDiv.appendChild(cardTitle);

        var map_a =  document.createElement('a');
        map_a.className = 'map';
        map_a.href = `javascript:loadLayer('${layer.layerClassname}');`;

        var map_img =  document.createElement('img');
        map_img.className = 'map-img';
        map_img.src = `img/maps/thumbnails/${layer.layerClassname}.jpg`;

        map_a.appendChild(map_img);
        layerDiv.appendChild(map_a);
        

        var flagsDiv = document.createElement('div');
        flagsDiv.className = 'flags';

        var a1 = document.createElement('a');
        a1.className = 'flag1';
        var teamOneFlag = document.createElement('img');
        teamOneFlag.className = 'flag-img';
        teamOneFlag.src = `img/icons/flag_${fixFac(layer.teamOne.faction)}.png`;
        a1.appendChild(teamOneFlag);;
        

        var a2 = document.createElement('a');
        a2.className = 'flag2';
        var teamTwoFlag = document.createElement('img');
        teamTwoFlag.className = 'flag-img';
        teamTwoFlag.src = `img/icons/flag_${fixFac(layer.teamTwo.faction)}.png`;
        a2.appendChild(teamTwoFlag);

        flagsDiv.appendChild(a1);
        flagsDiv.appendChild(a2);

        layerDiv.appendChild(flagsDiv);
        
        mapSection.appendChild(layerDiv);
    }
    mapContainer.appendChild(mapSection);
}