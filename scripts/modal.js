
var vehicle_icon_dict = {
	"BMP-1": "map_trackedifv",
	"BMP-1 ZU23": "map_trackedifv",
	"BMP-2": "map_trackedifv",
	"BRDM-2": "map_jeep_turret",
	"BRDM-2 Spandrel": "map_jeep_antitank",
	"BTR-80": "map_apc",
	"BTR-82A": "map_ifv",
	"FV4034": "map_tank",
	"FV432": "map_trackedapc",
	"FV432 RWS": "map_trackedapc",
	"FV510": "map_trackedifv",
	"FV510 (Up-Armoured)": "map_trackedifv",
	"Kamaz 5350 Truck Logistics": "map_truck_logistics",
	"Kamaz 5350 Truck Transport": "map_truck_transport",
	"LAV 6.0": "map_ifv",
	"LAV III C6 RWS": "map_apc",
	"LAV III M2 RWS": "map_apc",
	"LUV-A1": "map_jeep_logistics",
	"Leopard 2A6M": "map_tank",
	"Leopard 2A6M Caged": "map_tank",
	"M-ATV": "map_jeep",
	"M-ATV CROWS": "map_jeep_turret",
	"M-ATV CROWS M240": "map_jeep_turret",
	"M-ATV M240": "map_jeep",
	"M-ATV TOW": "map_jeep_antitank",
	"M1126": "map_apc",
	"M1126 M240": "map_apc",
	"M1A2": "map_tank",
	"M2A3": "map_trackedifv",
	"M939 Truck Logistics": "map_truck_logistics",
	"M939 Truck Transport": "map_truck_transport",
	"MAN HX Truck Logistics": "map_truck_logistics",
	"MAN HX Truck Transport": "map_truck_transport",
	"MSVS Truck Logistics": "map_truck_logistics",
	"MSVS Truck Transport": "map_truck_transport",
	"MT-LB": "map_trackedapc",
	"MT-LBM 6MA": "map_trackedapc",
	"MT-LBM 6MB": "map_trackedifv",
	"MT-LBM ZU23": "map_antiair",
	"Mi-17": "map_transporthelo",
	"Mi-8": "map_transporthelo",
	"Minsk 400": "map_motorcycle",
	"Simir Kord": "map_jeep_transport",
	"Simir Kornet": "map_jeep_antitank",
	"Simir Logistics": "map_jeep_logistics",
	"Simir MG3": "map_jeep",
	"T-62": "map_tank",
	"T-72": "map_tank",
	"T-72S": "map_tank",
	"TAPV": "map_jeep_turret",
	"Technical Armored DShK-M": "map_jeep",
	"Technical Armored SPG-9": "map_jeep_antitank",
	"Technical DShK-M": "map_jeep",
	"Technical Logistics INS": "map_jeep_logistics",
	"Technical Logistics MIL": "map_jeep_logistics",
	"Technical Rocket Artillery": "map_jeep_artillery",
	"Technical SPG": "map_jeep_antitank",
	"Technical Shielded DShK-M": "map_jeep",
	"Technical Transport INS": "map_jeep_transport",
	"Technical Transport MIL": "map_jeep_transport",
	"Tigr-M Kord Open Top": "map_jeep",
	"Tigr-M Kord RWS": "map_jeep_turret",
	"UH-60M": "map_transporthelo",
	"URAL 4320 Truck Logistics": "map_truck_logistics",
	"URAL 4320 Truck Transport": "map_truck_transport",
	"Ural 375-D Truck Logistics": "map_truck_logistics",
	"Ural 375-D Truck Transport": "map_truck_transport",
	"Ural 375-D Truck ZU23": "map_truck_antiair"
};

var modal = document.getElementById("modal_background")


function view_vehicles (map)
{

	var temp = Object.assign({}, layer_dict[map]);
	Object.assign(temp.teamOne, layer_dict[map].teamOne, vehicle_data[map].teamOne);
	Object.assign(temp.teamTwo, layer_dict[map].teamTwo, vehicle_data[map].teamTwo);
	console.log(temp);

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

