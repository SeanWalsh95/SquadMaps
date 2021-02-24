var factionLoadouts = {};
var layersJson = [];

var raw = 'https://raw.githubusercontent.com/Squad-Wiki-Editorial/squad-wiki-pipeline-map-data/dev/completed_output/2.0/finished_2.0.json'
var converted = 'https://raw.githubusercontent.com/Squad-Wiki-Editorial/squad-wiki-pipeline-map-data/dev/completed_output/2.0/finished_2.0_converted.json'

$.getJSON(raw).then( (data)=>{
    factionLoadouts = new LoadoutContainer(data['Setups'])
    console.log(factionLoadouts)
    layersJson = data['Maps'].map( (layerData)=>{  return new SQLayer(layerData) } );
    console.log(layersJson)
    parseJsonData();
    generateContent();
});