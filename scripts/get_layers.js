var layersJson = [];
$.getJSON('https://raw.githubusercontent.com/Squad-Wiki-Editorial/squad-wiki-pipeline-map-data/master/completed_output/finished_1.0_converted.json').then( (data)=>{
    layersJson = data['Maps'].map( (layerData)=>{  return new SQLayer(layerData) } );
    parseJsonData();
    generateContent();
});