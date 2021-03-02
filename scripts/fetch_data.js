var factionLoadouts = {};
var layersJson = [];

//const wikiURI = 'https://raw.githubusercontent.com/Squad-Wiki-Editorial/squad-wiki-pipeline-map-data/dev/completed_output/2.0'

const wikiURI = 'https://raw.githubusercontent.com/Squad-Wiki-Editorial/squad-wiki-pipeline-map-data/dev/completed_output/_Current%20Version'

$.getJSON(`${wikiURI}/finished.json`).then( (data)=>{
    factionLoadouts = new LoadoutContainer(data['Setups'])
    console.log(factionLoadouts)
    layersJson = data['Maps'].map( (layerData)=>{  return new SQLayer(layerData) } );
    console.log(layersJson)
    parseJsonData();
    generateContent();
});