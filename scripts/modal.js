
var modal = document.getElementById("modal_background")

function open_map(uri){
	window.open(uri, "_blank");
}

//sort by delay and name
function sort_vehicles_list(list){
	list.sort(function(a, b) {
		var a_str = (a.delay ? a.delay : 0)+"".padStart(5, '0') + a.name;
		var b_str = (b.delay ? b.delay : 0)+"".padStart(5, '0') + b.name;

		if( a_str < b_str ){ return -1; }
		if( a_str > b_str ){ return 1; }
		return 0;
	})
}

function view_vehicles (map)
{
	console.log(layer_dict[map]);

	const layer = layer_dict[map];

	var body = document.getElementsByTagName("BODY")[0];
	body.style.overflow = "inherit";

	var team_1_ul = document.getElementById("team_1_vehicles");
	var team_2_ul = document.getElementById("team_2_vehicles");

	document.getElementById("layer_name").innerHTML = layer.layer.replaceAll('_',' ');

	document.getElementById("team_1_name").innerHTML = layer.teamOne.faction.split('_')[0];
	document.getElementById("team_2_name").innerHTML = layer.teamTwo.faction.split('_')[0];

	document.getElementById("team_1_tickets").innerHTML = `${layer.teamOne.tickets} Tickets`;
	document.getElementById("team_2_tickets").innerHTML = `${layer.teamTwo.tickets} Tickets`;
	
	document.getElementById("map_link").href = `javascript:open_map("img/maps/full_size/${map}.jpg")`;
	document.getElementById("map").style.backgroundImage = `url(img/maps/full_size/${map}.jpg)`;


	if (layer.commander)
		document.getElementById("value_commander").innerHTML = "Yes";
	else
		document.getElementById("value_commander").innerHTML = "No";

	document.getElementById("value_weather").innerHTML = layer.lighting;
	document.getElementById("value_number_of_flags").innerHTML = layer.flagCount ;


	document.getElementById("team_1_flag").src = `img/icons/flag_${fixFac(layer.teamOne.faction)}.png`
	document.getElementById("team_2_flag").src = `img/icons/flag_${fixFac(layer.teamTwo.faction)}.png`
	

	var verbose_words = ['Truck','Logistics','Technical','Open Top','Transport'];

	sort_vehicles_list(layer.teamOne.vehicles, 'name');
	layer.teamOne.vehicles.forEach(vehicle =>
	{
		
		var li = document.createElement("li");

		var vehicle_amount = document.createElement("p");
		vehicle_amount.innerHTML = vehicle.quantity;

		var vehicle_name = document.createElement("h6");
		var short_name = vehicle.name;
		for(word of verbose_words){ short_name = short_name.replace(word, ''); }
		vehicle_name.innerHTML = short_name.trim();

		var delay = "";
		if(vehicle.delay){ delay =  "Delayed " + vehicle.delay / 60 + " mins"; }

		var vehicle_delay = document.createElement("small");
		vehicle_delay.innerHTML = delay;

		var vehicle_img = document.createElement("img");
		
		if(vehicle.name in vehicle_icon_dict){
			vehicle_img.src = `img/icons/map_${vehicle_icon_dict[vehicle.name]}.png`;
		}

		li.appendChild(vehicle_amount);
		li.appendChild(vehicle_img);
		li.appendChild(vehicle_name);
		if(vehicle.delay){ 
			li.appendChild(document.createElement('br'));
			li.appendChild(vehicle_delay);
		}
		team_1_ul.appendChild(li);
	});

	sort_vehicles_list(layer.teamTwo.vehicles, 'name');
	layer.teamTwo.vehicles.forEach(vehicle =>
	{
		var li = document.createElement("li");

		var vehicle_amount = document.createElement("p");
		vehicle_amount.innerHTML = vehicle.quantity;

		var vehicle_name = document.createElement("h6");
		var short_name = vehicle.name;
		for(word of verbose_words){ short_name = short_name.replace(word, ''); }
		vehicle_name.innerHTML = short_name.trim();

		var delay = "";
		if(vehicle.delay){ delay =  "Delayed " + vehicle.delay / 60 + " mins"; }

		var vehicle_delay = document.createElement("small");
		vehicle_delay.innerHTML = delay;

		var vehicle_img = document.createElement("img");
		
		if(vehicle.name in vehicle_icon_dict){
			vehicle_img.src = `img/icons/map_${vehicle_icon_dict[vehicle.name]}.png`;
		}

		li.appendChild(vehicle_amount);
		li.appendChild(vehicle_img);
		li.appendChild(vehicle_name);
		if(vehicle.delay){ 
			li.appendChild(document.createElement('br'));
			li.appendChild(vehicle_delay);
		}
		
		team_2_ul.appendChild(li);
	});

	modal.style.display = "block";
}