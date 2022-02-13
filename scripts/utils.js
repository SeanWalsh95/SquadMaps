

function fetchMapData(render=false){
  $.getJSON(`${gitWikiDataURI}`).then( (data)=>{
    factionLoadouts = new LoadoutContainer(data['Setups'])
    layersJson = []
    for (const [layerIndex, layerData] of data['Maps'].entries()){
      layerObj = null;
      try{
        layersJson.push(new SQLayer(layerIndex, layerData));
      }catch (err){
        console.log(`Error Parsing Layer "${ignoreCaseSearch(layerData,'rawName')}"\n`, err);
      }
    }
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

function openNewTab(uri){
	window.open(uri, "_blank");
}

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
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