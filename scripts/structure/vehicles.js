/**
 * Vehicle related data and classes
 * 
 * ideal vehicles data structure:
 * 
 * vehicle_types = ["trackedifv", "jeep", "tank", "jeep_turret", ...]
 * 
 * vehicle_dict = {
 *      "identifier": {
 *          "name": string
 *          "type": "vehicle_type"
 *          "ticket_cost": int
 *          "respawn_timer": int
 *          "crewman_requirement": int
 *          "passenger_capacity": int
 *          "logistics": {
 *              "pool": int,
 *              "ammo": boolean,
 *              "build": boolean,
 *          },
 *          "wiki_link": url
 *      },
 *    ...
 *  }
 */


const vehicleWikiDict = {
  "BP_2A6":"Leopard_2A6M",
  "BP_LAV6": "LAV_6.0",
  "BP_US_Tril":"M939_Truck",
  "BP_Ural_4320": "URAL_4320"

}

const vehicleVerboseWords = [
['Truck',''],
['Logistics','Logi.'],
['Technical','Tec.'],
['Open Top',''],
['Transport',''],
['(Up-Armoured)','UA'],
['Armored','UA'],
['M2 HB', 'M2'],
['M1126 CROWS','M1126'],
['CAN',''],
['RWS',''],
['Shielded', 'Shld.'],
['ZU-23-2', 'AA'],
['Ural-', ''],
['Leopard', '']
];

class SQVehicle {
  constructor(jsonData){
      this.name = ignoreCaseSearch(jsonData,'type');
      this.classname =  ignoreCaseSearch(jsonData,'rawType');

      if (this.classname.includes('Cage'))
        this.name = `${this.name} Cage`

      this.quantity = parseInt(ignoreCaseSearch(jsonData,'count')) || 1;
      this.delay = ignoreCaseSearch(jsonData,'delay') || 0;
      this.icon = ignoreCaseSearch(jsonData,'icon');
      if (this.icon)
        this.icon = this.icon.replace('map_','')
}

  shortName(){
    var shortName = this.name;
    for(const [word, replacement] of vehicleVerboseWords){ shortName = shortName.replace(word, replacement); }
    return shortName.trim();
  }

  genListItemElement(){
    var listItem = document.createElement("li");

    var countParagraph = document.createElement("p");
    countParagraph.textContent = this.quantity;
    listItem.appendChild(countParagraph);

    var img = document.createElement("img");
    var vicIcon = this.icon || "jeep_transport";
    img.src = `img/icons/map_${vicIcon}.png`;

    listItem.appendChild(img);

    var vicNameHeader = document.createElement("a");
    vicNameHeader.textContent = this.shortName();        
    vicNameHeader.href = `javascript:openInNewTab('https://squad.gamepedia.com/${this.name.split(' ')[0]}');`;
    listItem.appendChild(vicNameHeader);

    if(this.delay){
      var delay =  `Delayed ${this.delay} mins`;
      var vicDelaySmall = document.createElement("small");
      vicDelaySmall.textContent = delay;
      listItem.appendChild(document.createElement('br'));
      listItem.appendChild(vicDelaySmall);
    }

    return listItem;
  }
}
