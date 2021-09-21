function scrollToId(id){
    const yOffset = -60; 
    const e = document.getElementById(id);
    const eTop = e.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top: eTop, behavior: 'smooth'})
}

function generateContent(){
    document.querySelector('.map-section-links').innerHTML = ""
    document.querySelector('#maps_container').innerHTML = ""
    for( const [map, layers] of Object.entries(maps_dict) ){
        if(layers.length == 0 )
            continue

        var htmlMapID = `#${map.toLowerCase().replaceAll(/[' ]/g,'')}`;

        var mapHeader = document.createElement('a');
        mapHeader.className = "headers";
        mapHeader.textContent = mapEnum[map].displayname;
        mapHeader.href = `javascript:scrollToId('${htmlMapID}')`;

        var headerContainer = document.querySelector('.map-section-links');
        headerContainer.appendChild(mapHeader);

        var mapContainer = document.getElementById('maps_container');
        
        var mapSection = document.createElement('section');
        mapSection.id = htmlMapID;
        
        var mapSectionTitle = document.createElement('h2');
        mapSectionTitle.textContent = mapEnum[map].displayname;

        mapSection.appendChild(mapSectionTitle);
        
        for (const layerID of layers) {
            const layer = layerDict[layerID];
            var layerDiv =  document.createElement('div');
            layerDiv.className = 'map-layer-card';

            var cardTitle = document.createElement('div');
            cardTitle.className = 'map-card-title';
            
            var layerH3 = document.createElement('h3');
            layerH3.textContent = `${layer.gamemode.abbr} ${layer.version}`;
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

            let teamOneLoadouts = Object.keys(layer.teams[0].loadouts)
            if ( teamOneLoadouts.length > 1){
                teamOneFlag.src = `img/icons/flag_undefined.png`;
            }else{
                let facInit = layer.teams[0].loadouts[teamOneLoadouts[0]].faction.initials;
                teamOneFlag.src = `img/icons/flag_${facInit}.png`;
            }

            leftDiv.appendChild(teamOneFlag);;
            

            var rightDiv = document.createElement('div');
            rightDiv.className = 'map-card-flag-right';
            var teamTwoFlag = document.createElement('img');
            teamTwoFlag.className = 'map-card-flag';
            
            let teamTwoLoadouts = Object.keys(layer.teams[1].loadouts)
            if ( teamTwoLoadouts.length > 1){
                teamTwoFlag.src = `img/icons/flag_undefined.png`;
            }else{
                let facInit = layer.teams[1].loadouts[teamTwoLoadouts[0]].faction.initials;
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
            try{
                let layerFactions = []
                layerFactions = layerFactions.concat( Object.values(layer.teams[0].loadouts).map(l => l.faction.name) )
                layerFactions = layerFactions.concat( Object.values(layer.teams[1].loadouts).map(l => l.faction.name) )

                let gameList = Array.from(document.querySelectorAll(`.gamemode-filter > a > span > .dropdown-selected > i`)).map(e=>{return e.getAttribute('data-id')})
                let nameList = Array.from(document.querySelectorAll(`.faction-filter > a > span > .dropdown-selected`)).map(e=>{return e.innerText})

                let hasFacFilter = layerFactions.some( (fac) => { return nameList.includes(fac) })
                if (!layer.gamemode.abbr) continue;
                let hasGameFilter = gameList.includes(layer.gamemode.abbr)

                let search = document.querySelector('#layersearch').value
                let searchMatch = true;
                if (search)
                    searchMatch = JSON.stringify(layer).toLocaleLowerCase().match(search.toLowerCase())

                if(layer.classname.match(map) && hasFacFilter && hasGameFilter && searchMatch){
                    maps_dict[map].push(layer.classname);
                }
            } catch (e) {
                console.log(`Filter Error: Layer${layer.classname}`,e)
            }
        }
    }

    generateContent()
}