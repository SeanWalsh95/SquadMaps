

function fetchMapData(render=false){
  $.getJSON(`${wikiURI}/finished.json`).then( (data)=>{
    factionLoadouts = new LoadoutContainer(data['Setups'])
    layersJson = data['Maps'].map( (layerData)=>{  return new SQLayer(layerData) } );
    parseJsonData();
    if(render)
      generateContent();
  });
}

function parseJsonData(){
  for(const layer of layersJson) {
      if(layer.map && layer.map.id)
          maps_dict[layer.map.id].push(layer.classname);
      else
          noMatch.push(layer)
      layerDict[layer.classname] = layer;
  }
}

function ignoreCaseSearch(obj, search){
  return obj[Object.keys(obj).find(key => key.toLowerCase() === search.toLowerCase())] || null;
}

function optionsFromArray(arr){
  var optList = []
  if (!arr)
    return optList

  for(const item of arr){
    var optionElement = document.createElement("option");
    optionElement.value = item
    optionElement.innerHTML = item
    optList.push(optionElement)
  }
  return optList;
}

function testImages(){
  for (const [layerID, layer] of Object.entries(layerDict)){
    testUrl(layer.image)
  }  
}

function testUrl(url){
  try {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {};
    xhttp.open("HEAD", url, true);
    xhttp.send();
  } catch (error) {
    console.error(`No Image: ${url}`);
  }
}