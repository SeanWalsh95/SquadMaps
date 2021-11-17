class SquadMap {

  constructor(layerData){

    this.fitBounds = null;

		this.bounds = [[-200,-200],[200,200]];
    this.matchFaction = /^(CAF|GB|INS|MEA|MIL|RUS|USA)/;
    this.iconSize = [34,17];

    this.id = layerData.classname;    
    this.map = layerData.map;
    this.flagDict = this.id in layerMeta ? layerMeta[this.id].flags : null;
    this.tOne = layerData.teams[0];
    this.tTwo = layerData.teams[1];
    this.gamemode = layerData.gamemode.value;
  }

  getImageOverlay(){
    return L.imageOverlay(`img/maps/raw/${this.map.id}.jpg`, this.bounds); 
  }

  createMarkers(altOpacity=0.8){
    var markers = new L.FeatureGroup();
    for (const [name, latlng] of Object.entries(this.flagDict)){
      
      let flagImg = 'Neutral';
      let main = name.match(this.matchFaction);

      if(main)
        flagImg = main[1]
      else if(this.gamemode === "Invasion")
        flagImg = parseInt(this.tOne.tickets) > parseInt(this.tTwo.tickets) ? teamOneLoadout.faction.initials : teamTwoLoadout.faction.initials;

      let flagOpacity = flagImg==='Neutral' ? altOpacity : 1.0;

      let m = L.marker([latlng[0], latlng[1]], {
        icon: new L.icon({
          iconUrl: `img/icons/flag_${flagImg}.png`,
          iconSize: this.iconSize
        }),
        title: name,
        opacity: flagOpacity
      })
      markers.addLayer(m);
    }
    return markers;
  }

  createLine(options){
    return L.polyline(Object.values(this.flagDict), options);
  }

}

function changeMap(layer){

	if (map !== null) {
		map.remove();
	}
	map = L.map('map', {zoomSnap: 0.1, crs: L.CRS.Simple, attributionControl: false});

	let tmpPointList = {};

  if(layer.classname in layerMeta){

    layerDriver = new SquadMap(layer);

		layerDriver.getImageOverlay().addTo(map);
		map.fitBounds(layerDriver.bounds);
    
    var markerGroup = layerDriver.createMarkers();
    markerGroup.addTo(map);    

    var layer_border = layerMeta[layer.classname].border
    if(layer_border.length){
      let polyPoints = [];

      let a = layerDriver.bounds[0];
      let b = layerDriver.bounds[1];
      let outerBounds = [ a, [a[0],b[1]], b, [b[0],a[1]] ];

      //add inner polygon to group for fitBounds sizing 
      markerGroup.addLayer(L.polygon(layer_border, {opacity:0.0, fillOpacity:0.0}));

      console.log(outerBounds)
      polyPoints.push(outerBounds);
      polyPoints.push(layer_border);
      let mapBorder = L.polygon(polyPoints, {color:"white", opacity:0.2, fillColor:"black", fillOpacity:0.7});
      mapBorder.addTo(map);
    }

    if(!['RAAS'].includes(layer.gamemode.value)){
      layerDriver.createLine({color:'#FFFFFF', weight: 5, opacity:0.85}).addTo(map);
      layerDriver.createLine({color:'#585858', weight: 3, opacity:0.85}).addTo(map);
      map.fitBounds(markerGroup.getBounds(), {padding:[25,25]});
    }

    map.on('resize', function(e) {
      if(markerGroup !== null && !['RAAS'].includes(layer.gamemode.value))
        map.fitBounds(markerGroup.getBounds(), {padding:[25,25]});
      else
        map.fitWorld({reset: true});
    });

    map.on('click', function(e) {
      //console.log(e.latlng.lat + ", " + e.latlng.lng);
      tmpPointList[`FLAG_${Object.keys(tmpPointList).length}`] = [e.latlng.lat, e.latlng.lng];
      console.log(`"${layer.classname}":${JSON.stringify(tmpPointList, null, 2)}`);
    });

  }else{
		let bounds = [[-200,-200],[200,200]];
    L.imageOverlay(layer.image, bounds).addTo(map);
    
    if (layer.classname in mapLayerBounds){
      map.fitBounds(mapLayerBounds[layer.classname]);
      console.log('set defined bounds')
    }
    else{
		  map.fitBounds(bounds);
    }
  }
}


function getCurrBounds(){
  
  if(currLayerID !== null){
    bounds = map.getBounds();
    console.log(`"${currLayerID}":[[${bounds._northEast.lat}, ${bounds._northEast.lng}],[${bounds._southWest.lat}, ${bounds._southWest.lng}]]`);

  }


}