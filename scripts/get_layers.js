var factionLoadouts = {};
var layersJson = [];

$.getJSON('https://raw.githubusercontent.com/Squad-Wiki-Editorial/squad-wiki-pipeline-map-data/dev/completed_output/2.0/finished_2.0.json').then( (data)=>{
    factionLoadouts = new LoadoutContainer(data['Setups'])
    console.log(factionLoadouts)
    layersJson = data['Maps'].map( (layerData)=>{  return new SQLayer(layerData) } );
    console.log(layersJson)
    parseJsonData();
    generateContent();
});