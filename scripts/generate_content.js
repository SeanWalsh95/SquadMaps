function scrollToId(id){
    document.getElementById(id).scrollIntoView();
}

function generateContent(){
    for( const [map, layers] of Object.entries(maps_dict) ){

        var htmlMapID = "#"+map.toLowerCase().replaceAll(' ','_');

        var mapHeader = document.createElement('a');
        mapHeader.className = "headers";
        mapHeader.textContent = map;
        mapHeader.href = `javascript:scrollToId('${htmlMapID}')`;

        var headerContainer = document.getElementsByClassName('map-section-links')[0];
        headerContainer.appendChild(mapHeader);

        var body =  document.body;

        var mapContainer = document.getElementById('maps_container');
        
        var mapSection = document.createElement('section');
        mapSection.id = htmlMapID;
        
        var mapSectionTitle = document.createElement('h2');
        mapSectionTitle.textContent = map;

        mapSection.appendChild(mapSectionTitle);
        
        for (const layerID of layers) {
            const layer = layerDict[layerID];
            var layerDiv =  document.createElement('div');
            layerDiv.className = 'map-layer-card';

            var cardTitle = document.createElement('div');
            cardTitle.className = 'map-card-title';
            
            var layerH3 = document.createElement('h3');
            layerH3.textContent = `${layer.gamemode} V${layer.version}`;
            cardTitle.appendChild(layerH3);

            layerDiv.appendChild(cardTitle);

            var map_a =  document.createElement('a');
            map_a.className = 'map-card';
            map_a.href = `javascript:loadLayer('${layer.classname}');`;

            var map_img =  document.createElement('img');
            map_img.className = 'map-img';
            map_img.src = `img/maps/thumbnails/${layer.classname}.jpg`;
            map_img.onerror = function(){this.src = 'img/maps/thumbnails/placeholder.jpg'};

            map_a.appendChild(map_img);
            layerDiv.appendChild(map_a);
            

            var flagsDiv = document.createElement('div');
            flagsDiv.className = 'map-card-flags';

            var leftDiv = document.createElement('div');
            leftDiv.className = 'map-card-flag-left';
            var teamOneFlag = document.createElement('img');
            teamOneFlag.className = 'map-card-flag';
            teamOneFlag.src = `img/icons/flag_${layer.teamOne.faction}.png`;
            leftDiv.appendChild(teamOneFlag);;
            

            var rightDiv = document.createElement('div');
            rightDiv.className = 'map-card-flag-right';
            var teamTwoFlag = document.createElement('img');
            teamTwoFlag.className = 'map-card-flag';
            teamTwoFlag.src = `img/icons/flag_${layer.teamTwo.faction}.png`;
            rightDiv.appendChild(teamTwoFlag);

            flagsDiv.appendChild(leftDiv);
            flagsDiv.appendChild(rightDiv);

            layerDiv.appendChild(flagsDiv);
            
            mapSection.appendChild(layerDiv);
        }
        mapContainer.appendChild(mapSection);
    }
}