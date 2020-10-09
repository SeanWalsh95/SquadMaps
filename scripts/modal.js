
var modal = document.getElementById("modal_background")


function view_vehicles (map)
{
	console.log(layer_dict[map]);

	const layer = layer_dict[map];

	var body = document.getElementsByTagName("BODY")[0];
	body.style.overflow = "inherit";

	var team_1_ul = document.getElementById("team_1_vehicles");
	var team_2_ul = document.getElementById("team_2_vehicles");

	document.getElementById("layer_name").innerHTML = layer.layer;

	document.getElementById("team_1_name").innerHTML = layer.teamOne.faction;
	document.getElementById("team_2_name").innerHTML = layer.teamTwo.faction;

	document.getElementById("team_1_tickets").innerHTML = `${layer.teamOne.tickets} Tickets`;
	document.getElementById("team_2_tickets").innerHTML = `${layer.teamTwo.tickets} Tickets`;

	document.getElementById("map").style.backgroundImage = "url(img/maps/full_size/" + map + ".jpg)";
	if (layer.commander)
		document.getElementById("value_commander").innerHTML = "Yes";
	else
		document.getElementById("value_commander").innerHTML = "No";

	document.getElementById("value_weather").innerHTML = layer.lighting;
	document.getElementById("value_number_of_flags").innerHTML = layer.flagCount ;


	switch (layer.teamOne.faction)
	{
		case "CAF": document.getElementById("team_1_flag").src = "img/icons/flag_CAF.png"; break;
		case "GB": document.getElementById("team_1_flag").src = "img/icons/flag_GB.png"; break;
		case "INS": document.getElementById("team_1_flag").src = "img/icons/flag_INS.png"; break;
		case "MIL": document.getElementById("team_1_flag").src = "img/icons/flag_MIL.png"; break;
		case "RUS": document.getElementById("team_1_flag").src = "img/icons/flag_RUS.png"; break;
		case "USA": document.getElementById("team_1_flag").src = "img/icons/flag_USA.png"; break;
		case "MEA": document.getElementById("team_1_flag").src = "img/icons/flag_MEA.png"; break;
		default:
			console.log("Could not read team name: " + layer.teamOne.faction);
			document.getElementById("team_1_flag").src = "img/icons/flag_USA.png";
			break;
	}

	switch (layer.teamTwo.faction)
	{
		case "CAF": document.getElementById("team_2_flag").src = "img/icons/flag_CAF.png"; break;
		case "GB": document.getElementById("team_2_flag").src = "img/icons/flag_GB.png"; break;
		case "INS": document.getElementById("team_2_flag").src = "img/icons/flag_INS.png"; break;
		case "MIL": document.getElementById("team_2_flag").src = "img/icons/flag_MIL.png"; break;
		case "RUS": document.getElementById("team_2_flag").src = "img/icons/flag_RUS.png"; break;
		case "USA": document.getElementById("team_2_flag").src = "img/icons/flag_USA.png"; break;
		case "MEA": document.getElementById("team_2_flag").src = "img/icons/flag_MEA.png"; break;
		default:
			console.log("Could not read team name: " + layer.teamTwo.faction);
			document.getElementById("team_1_flag").src = "img/icons/flag_USA.png";
			break;
	}


	var verbose_words = ['Truck','Logistics','Technical','Open Top','Transport'];

	vehicle_data[map].teamOne.vehicles.forEach(vehicle =>
	{
		
		var li = document.createElement("li");

		var vehicle_amount = document.createElement("p");
		vehicle_amount.innerHTML = vehicle.quantity;

		var vehicle_name = document.createElement("h6");
		var short_name = vehicle.name;
		for(word of verbose_words){ short_name = short_name.replace(word, ''); }
		vehicle_name.innerHTML = short_name.trim();

		var delay = "";
		if(vehicle.delay){ delay = vehicle.delay / 60 + " mins"; }

		var vehicle_delay = document.createElement("small");
		vehicle_delay.innerHTML = delay;

		var vehicle_img = document.createElement("img");
		
		if(vehicle.name in vehicle_icon_dict){
			vehicle_img.src = `img/icons/${vehicle_icon_dict[vehicle.name]}.png`;
		}

		li.appendChild(vehicle_amount);
		li.appendChild(vehicle_img);
		li.appendChild(vehicle_name);
		li.appendChild(vehicle_delay);
		team_1_ul.appendChild(li);
	});

	vehicle_data[map].teamTwo.vehicles.forEach(vehicle =>
	{
		var li = document.createElement("li");

		var vehicle_amount = document.createElement("p");
		vehicle_amount.innerHTML = vehicle.quantity;

		var vehicle_name = document.createElement("h6");
		var short_name = vehicle.name;
		for(word of verbose_words){ short_name = short_name.replace(word, ''); }
		vehicle_name.innerHTML = short_name.trim();

		var delay = "";
		if(vehicle.delay){ delay = vehicle.delay / 60 + " mins"; }

		var vehicle_delay = document.createElement("small");
		vehicle_delay.innerHTML = delay;

		var vehicle_img = document.createElement("img");
		
		if(vehicle.name in vehicle_icon_dict){
			vehicle_img.src = `img/icons/${vehicle_icon_dict[vehicle.name]}.png`;
		}

		li.appendChild(vehicle_amount);
		li.appendChild(vehicle_img);
		li.appendChild(vehicle_name);
		li.appendChild(vehicle_delay);
		team_2_ul.appendChild(li);
	});

	modal.style.display = "block";
}

window.onclick = function (event)
{
	if (event.target == modal)
	{
		var body = document.getElementsByTagName("BODY")[0];
		body.style.overflow = "auto";

		modal.style.display = "none";

		var team_1_ul = document.getElementById("team_1_vehicles");
		var team_2_ul = document.getElementById("team_2_vehicles");

		team_1_ul.innerHTML = "";
		team_2_ul.innerHTML = "";
	}
}

