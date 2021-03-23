
var modal = document.getElementById("modal_background")

//sort by delay and name
function sortVehicleList(list){
	if(!list) return 0;
	list.sort(function(a, b) {
		var a_str = (""+a.delay).padStart(5, '0') + a.name;
		var b_str = (""+b.delay).padStart(5, '0') + b.name;

		if( a_str < b_str ){ return -1; }
		if( a_str > b_str ){ return 1; }
		return 0;
	})
}

function loadLayer(layerID){
	modal.style.display = "block";

	currLayerID = layerID;
	loadLayerInfo(layerID);
	changeMap(layerDict[layerID]);
}

function loadLayerInfo(){
	console.log( `${currLayerID}:`, layerDict[currLayerID]);

	const layer = layerDict[currLayerID];

	let body = document.getElementsByTagName("BODY")[0];
	body.style.overflow = "inherit";


	if( document.getElementById("layer_name") ){
		document.getElementById("layer_name").innerHTML = layer.name;
	}

	let facOptions = layer.genFactionOptionElements();

	let tOneFacOpt = document.getElementById("team_1_fac_options")
	let tTwoFacOpt = document.getElementById("team_2_fac_options")

	tOneFacOpt.innerHTML = ""
	tTwoFacOpt.innerHTML = ""
	facOptions[0].forEach(option => {tOneFacOpt.appendChild(option)})
	facOptions[1].forEach(option => {tTwoFacOpt.appendChild(option)})
	tOneFacOpt.addEventListener("change", getLoadoutSelection)
	tTwoFacOpt.addEventListener("change", getLoadoutSelection)
	
	let loadOptions = layer.genLoadoutOptionElements();
	
	let tOneLoadOpt = document.getElementById("team_1_load_options")
	let tTwoLoadOpt = document.getElementById("team_2_load_options")
	
	tOneLoadOpt.innerHTML = ""
	tTwoLoadOpt.innerHTML = ""
	loadOptions[0].forEach(option => {tOneLoadOpt.appendChild(option)})
	loadOptions[1].forEach(option => {tTwoLoadOpt.appendChild(option)})
	tOneLoadOpt.addEventListener("change", getLoadoutSelection)
	tTwoLoadOpt.addEventListener("change", getLoadoutSelection)
	
	getLoadoutSelection()
}

function getLoadoutSelection(){
	
	const layer = layerDict[currLayerID];

	let tOneFacOpt = document.getElementById("team_1_fac_options")
	let tTwoFacOpt = document.getElementById("team_2_fac_options")
	
	let tOneLoadOpt = document.getElementById("team_1_load_options")
	let tTwoLoadOpt = document.getElementById("team_2_load_options")

	let t1FactionSelection = tOneFacOpt.options[tOneFacOpt.selectedIndex].value
	let t2FactionSelection = tTwoFacOpt.options[tTwoFacOpt.selectedIndex].value
	
	let t1LoadoutSelection = tOneLoadOpt.options[tOneLoadOpt.selectedIndex].value
	let t2LoadoutSelection = tTwoLoadOpt.options[tTwoLoadOpt.selectedIndex].value

	console.log(`${t1FactionSelection}#${t1LoadoutSelection}`);
	console.log(`${t2FactionSelection}#${t2LoadoutSelection}`);

	teamOneLoadout = layer.teams[0].loadouts[`${t1FactionSelection}#${t1LoadoutSelection}`] || null
	teamTwoLoadout = layer.teams[1].loadouts[`${t2FactionSelection}#${t2LoadoutSelection}`] || null

	if(teamOneLoadout && teamTwoLoadout)
		loadLayerMeta(layer ,teamOneLoadout, teamTwoLoadout)
}

function loadLayerMeta(layer, teamOneLoadout, teamTwoLoadout){

	let t1List = document.getElementById("team_1_vehicles");
	let t2List = document.getElementById("team_2_vehicles");

	document.getElementById("team_1_tickets").innerHTML = `${layer.teams[0].tickets}`;
	document.getElementById("team_2_tickets").innerHTML = `${layer.teams[1].tickets}`;

	/*if (layer.commander)
		document.getElementById("value_commander").innerHTML = "Yes";
	else
		document.getElementById("value_commander").innerHTML = "No";*/

	document.getElementById("value_weather").innerHTML = layer.lighting;
	document.getElementById("value_number_of_flags").innerHTML = layer.flagCount ;

	document.getElementById("team_1_flag").src = teamOneLoadout ? `img/icons/flag_${teamOneLoadout.faction.initials}.png` : `img/icons/flag_undefined.png`
	document.getElementById("team_2_flag").src = teamTwoLoadout ? `img/icons/flag_${teamTwoLoadout.faction.initials}.png` : `img/icons/flag_undefined.png`
	
	if(teamOneLoadout){
		document.querySelector('#team_1_vehicles').innerHTML = "";
		sortVehicleList(teamOneLoadout.vehicles, 'name');
		teamOneLoadout.vehicles.forEach(vehicle =>{ t1List.appendChild(vehicle.genListItemElement()); });
	}

	if(teamTwoLoadout){
		document.querySelector('#team_2_vehicles').innerHTML = "";
		sortVehicleList(teamTwoLoadout.vehicles, 'name');
		teamTwoLoadout.vehicles.forEach(vehicle => { t2List.appendChild(vehicle.genListItemElement()); });
	}
	
	modal.style.display = "block";

}