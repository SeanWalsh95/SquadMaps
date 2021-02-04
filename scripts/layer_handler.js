
var modal = document.getElementById("modal_background")

function openNewTab(uri){
	window.open(uri, "_blank");
}

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

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}

function loadLayer(layerID){
	currLayerID = layerID;
	loadLayerInfo(layerID);
	changeMap(layerDict[layerID]);
}

function loadLayerInfo(layerID)
{
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
	facOptions.teamOne.forEach(option => {tOneFacOpt.appendChild(option)})
	facOptions.teamTwo.forEach(option => {tTwoFacOpt.appendChild(option)})
	tOneFacOpt.addEventListener("change", getSelection)
	tTwoFacOpt.addEventListener("change", getSelection)
	
	let loadOptions = layer.genLoadoutOptionElements();
	
	let tOneLoadOpt = document.getElementById("team_1_load_options")
	let tTwoLoadOpt = document.getElementById("team_2_load_options")
	
	tOneLoadOpt.innerHTML = ""
	tTwoLoadOpt.innerHTML = ""
	loadOptions.teamOne.forEach(option => {tOneLoadOpt.appendChild(option)})
	loadOptions.teamTwo.forEach(option => {tTwoLoadOpt.appendChild(option)})
	tOneLoadOpt.addEventListener("change", getSelection)
	tTwoLoadOpt.addEventListener("change", getSelection)

	getSelection()
}

function getSelection(){
	
	const layer = layerDict[currLayerID];

	let tOneFacOpt = document.getElementById("team_1_fac_options")
	let tTwoFacOpt = document.getElementById("team_2_fac_options")
	
	let tOneLoadOpt = document.getElementById("team_1_load_options")
	let tTwoLoadOpt = document.getElementById("team_2_load_options")

	let t1FactionSelection = tOneFacOpt.options[tOneFacOpt.selectedIndex].value
	let t2FactionSelection = tTwoFacOpt.options[tTwoFacOpt.selectedIndex].value
	
	let t1LoadoutSelection = tOneLoadOpt.options[tOneLoadOpt.selectedIndex].value
	let t2LoadoutSelection = tTwoLoadOpt.options[tTwoLoadOpt.selectedIndex].value

	let teamOneFaction = layer.teamOne.factions[t1FactionSelection][t1LoadoutSelection] || null
	let teamTwoFaction = layer.teamTwo.factions[t2FactionSelection][t2LoadoutSelection] || null

	if(teamOneFaction && teamTwoFaction)
		loadLayerMeta(layer ,teamOneFaction, teamTwoFaction)
}

function loadLayerMeta(layer, teamOneFaction, teamTwoFaction){

	let t1List = document.getElementById("team_1_vehicles");
	let t2List = document.getElementById("team_2_vehicles");

	//document.getElementById("team_1_name").innerHTML = teamOneFaction.initials;
	//document.getElementById("team_2_name").innerHTML = teamTwoFaction.initials;

	document.getElementById("team_1_tickets").innerHTML = `${layer.teamOne.tickets}`;
	document.getElementById("team_2_tickets").innerHTML = `${layer.teamTwo.tickets}`;

	/*if (layer.commander)
		document.getElementById("value_commander").innerHTML = "Yes";
	else
		document.getElementById("value_commander").innerHTML = "No";*/

	document.getElementById("value_weather").innerHTML = layer.lighting;
	document.getElementById("value_number_of_flags").innerHTML = layer.flagCount ;


	document.getElementById("team_1_flag").src = teamOneFaction ? `img/icons/flag_${teamOneFaction.initials}.png` : `img/icons/flag_undefined.png`
	document.getElementById("team_2_flag").src = teamTwoFaction ? `img/icons/flag_${teamTwoFaction.initials}.png` : `img/icons/flag_undefined.png`
	
	if(teamOneFaction){
		document.querySelector('#team_1_vehicles').innerHTML = "";
		sortVehicleList(teamOneFaction.vehicles, 'name');
		teamOneFaction.vehicles.forEach(vehicle =>{ t1List.appendChild(vehicle.genListItemElement()); });
	}

	if(teamTwoFaction){
		document.querySelector('#team_2_vehicles').innerHTML = "";
		sortVehicleList(teamTwoFaction.vehicles, 'name');
		teamTwoFaction.vehicles.forEach(vehicle => { t2List.appendChild(vehicle.genListItemElement()); });
	}
	
	modal.style.display = "block";

}