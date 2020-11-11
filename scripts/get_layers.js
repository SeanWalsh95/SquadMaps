var layersJson = [];
$.getJSON('https://raw.githubusercontent.com/Thomas-Smyth/SquadJS/master/core/squad-layers/layers.json').then(function(data) {
    layersJson = data;
    parseJsonData();
    generateContent();
});