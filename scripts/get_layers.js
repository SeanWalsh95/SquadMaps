
//disable async to ensure global loads first
$.ajaxSetup({
    async: false
});

var layersJson = [];
$.getJSON('https://raw.githubusercontent.com/Thomas-Smyth/SquadJS/master/core/squad-layers/layers.json', function(data) {
    layersJson = data;
});

//enable asynce after global loads
$.ajaxSetup({
    async: true
});