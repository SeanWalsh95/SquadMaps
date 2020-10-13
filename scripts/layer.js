
var searchParams = new URLSearchParams(document.location.search);

if(searchParams.has('map')){
    var map = searchParams.get('map');
    view_vehicles(map);
}