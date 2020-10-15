
var modal = document.getElementById("modal_background")

function openNewTab(uri){
	window.open(uri, "_blank");
}

//sort by delay and name
function sortVehicleList(list){
	list.sort(function(a, b) {
		var a_str = (""+a.delay).padStart(5, '0') + a.name;
		var b_str = (""+b.delay).padStart(5, '0') + b.name;

		if( a_str < b_str ){ return -1; }
		if( a_str > b_str ){ return 1; }
		return 0;
	})
}

function loadLayer(map)
{
	console.log( `${map}:`, layerDict[map]);

	const layer = layerDict[map];

	var body = document.getElementsByTagName("BODY")[0];
	body.style.overflow = "inherit";

	var t1List = document.getElementById("team_1_vehicles");
	var t2List = document.getElementById("team_2_vehicles");

	if( document.getElementById("layer_name") ){
		document.getElementById("layer_name").innerHTML = layer.layer.replaceAll('_',' ');
	}

	document.getElementById("team_1_name").innerHTML = fixFac(layer.teamOne.faction);
	document.getElementById("team_2_name").innerHTML = fixFac(layer.teamTwo.faction);

	document.getElementById("team_1_tickets").innerHTML = `${layer.teamOne.tickets} Tickets`;
	document.getElementById("team_2_tickets").innerHTML = `${layer.teamTwo.tickets} Tickets`;
	
	document.getElementById("map_link").href = `javascript:openNewTab("img/maps/full_size/${map}.jpg")`;
	document.getElementById("map").style.backgroundImage = `url(img/maps/full_size/${map}.jpg)`;


	if (layer.commander)
		document.getElementById("value_commander").innerHTML = "Yes";
	else
		document.getElementById("value_commander").innerHTML = "No";

	document.getElementById("value_weather").innerHTML = layer.lighting;
	document.getElementById("value_number_of_flags").innerHTML = layer.flagCount ;


	document.getElementById("team_1_flag").src = `img/icons/flag_${fixFac(layer.teamOne.faction)}.png`
	document.getElementById("team_2_flag").src = `img/icons/flag_${fixFac(layer.teamTwo.faction)}.png`
	

	document.querySelector('#team_1_vehicles').innerHTML = "";
	sortVehicleList(layer.teamOne.vehicles, 'name');
	layer.teamOne.vehicles.forEach(vehicle =>{ t1List.appendChild(vehicle.genListItemElement()); });

	document.querySelector('#team_2_vehicles').innerHTML = "";
	sortVehicleList(layer.teamTwo.vehicles, 'name');
	layer.teamTwo.vehicles.forEach(vehicle => { t2List.appendChild(vehicle.genListItemElement()); });

	modal.style.display = "block";
}