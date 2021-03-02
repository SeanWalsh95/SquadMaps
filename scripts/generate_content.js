function scrollToId(id){
    const yOffset = -60; 
    const e = document.getElementById(id);
    const eTop = e.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top: eTop, behavior: 'smooth'})
}

function generateContent(){

    console.log(layerDict);

    document.querySelector('.map-section-links').innerHTML = ""
    document.querySelector('#maps_container').innerHTML = ""
    for( const [map, layers] of Object.entries(maps_dict) ){
        if(layers.length == 0 )
            continue

        var htmlMapID = `#${map.toLowerCase().replaceAll(/[' ]/g,'')}`;

        var mapHeader = document.createElement('a');
        mapHeader.className = "headers";
        mapHeader.textContent = mapNames[map];
        mapHeader.href = `javascript:scrollToId('${htmlMapID}')`;

        var headerContainer = document.querySelector('.map-section-links');
        headerContainer.appendChild(mapHeader);

        var mapContainer = document.getElementById('maps_container');
        
        var mapSection = document.createElement('section');
        mapSection.id = htmlMapID;
        
        var mapSectionTitle = document.createElement('h2');
        mapSectionTitle.textContent = mapNames[map];

        mapSection.appendChild(mapSectionTitle);
        
        for (const layerID of layers) {
            const layer = layerDict[layerID];
            var layerDiv =  document.createElement('div');
            layerDiv.className = 'map-layer-card';

            var cardTitle = document.createElement('div');
            cardTitle.className = 'map-card-title';
            
            var layerH3 = document.createElement('h3');
            layerH3.textContent = `${gmAbbv[layer.gamemode]} ${layer.version}`;
            cardTitle.appendChild(layerH3);

            layerDiv.appendChild(cardTitle);

            var map_a =  document.createElement('a');
            map_a.className = 'map-card';
            map_a.href = `javascript:loadLayer('${layer.classname}');`;

            var map_img =  document.createElement('img');
            map_img.className = 'map-img';
            map_img.src = layer.thumbnail;
            map_img.onerror = function(){this.src = 'img/maps/thumbnails/placeholder.jpg'};

            map_a.appendChild(map_img);
            layerDiv.appendChild(map_a);
            


            var flagsDiv = document.createElement('div');
            flagsDiv.className = 'map-card-flags';

            var leftDiv = document.createElement('div');
            leftDiv.className = 'map-card-flag-left';
            var teamOneFlag = document.createElement('img');
            teamOneFlag.className = 'map-card-flag';

            let teamOneFactions = Object.keys(layer.teamOne.factions)
            if ( teamOneFactions.length > 1){
                teamOneFlag.src = `img/icons/flag_undefined.png`;
            }else{
                let facInit =  facMap[teamOneFactions[0]];
                teamOneFlag.src = `img/icons/flag_${facInit}.png`;
            }

            leftDiv.appendChild(teamOneFlag);;
            

            var rightDiv = document.createElement('div');
            rightDiv.className = 'map-card-flag-right';
            var teamTwoFlag = document.createElement('img');
            teamTwoFlag.className = 'map-card-flag';

            let teamTwoeFactions = Object.keys(layer.teamTwo.factions)
            if ( teamTwoeFactions.length > 1){
                teamTwoFlag.src = `img/icons/flag_undefined.png`;
            }else{
                let facInit =  facMap[teamTwoeFactions[0]];
                teamTwoFlag.src = `img/icons/flag_${facInit}.png`;
            }

            rightDiv.appendChild(teamTwoFlag);

            flagsDiv.appendChild(leftDiv);
            flagsDiv.appendChild(rightDiv);

            layerDiv.appendChild(flagsDiv);
            
            mapSection.appendChild(layerDiv);
        }
        mapContainer.appendChild(mapSection);
    }

}


function filterLayers(){
    for (const map in maps_dict){maps_dict[map] = [];}
    for(const layer of layersJson) {
        for (const map in maps_dict) {
            let layerFactions = []
            layerFactions = layerFactions.concat( Object.keys(layer.teamOne.factions) )
            layerFactions = layerFactions.concat( Object.keys(layer.teamTwo.factions) )

            let initialsList = Array.from(document.querySelectorAll('.dropdown-selected > i')).map(e=>{return e.getAttribute('data-id')})
            let nameList = Array.from(document.querySelectorAll('.dropdown-selected')).map(e=>{return e.innerText})

            let factionFilter = nameList.join(', ')

            let hasFilter = layerFactions.some( (fac) => { return factionFilter.includes(fac) })

            if(layer.name.match(map) && hasFilter  ){
                layer.map = map
                maps_dict[map].push(layer.classname);
            }
        }
        layerDict[layer.classname] = layer;
    }

    generateContent()
}