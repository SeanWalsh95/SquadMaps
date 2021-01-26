/**
 * This file is intended to only hold static data
 * 
 * 
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

const vehicleVerboseWords = ['Truck','Logistics','Technical','Open Top','Transport'];

const vehicleIconDict = {
	"BMP-1": "trackedifv",
	"BMP-1 ZU23": "trackedifv",
	"BMP-2": "trackedifv",
	"BRDM-2": "jeep_turret",
	"BRDM-2 Spandrel": "jeep_antitank",
	"BTR-80": "apc",
	"BTR-82A": "ifv",
	"FV4034": "tank",
	"FV432": "trackedapc",
	"FV432 RWS": "trackedapc",
	"FV510": "trackedifv",
	"FV510 (Up-Armoured)": "trackedifv",
	"Kamaz 5350 Truck Logistics": "truck_logistics",
	"Kamaz 5350 Truck Transport": "truck_transport",
	"LAV 6.0": "ifv",
	"LAV III C6 RWS": "apc",
	"LAV III M2 RWS": "apc",
	"LUV-A1": "jeep_logistics",
	"Leopard 2A6M": "tank",
	"Leopard 2A6M Caged": "tank",
	"M-ATV": "jeep",
	"M-ATV CROWS": "jeep_turret",
	"M-ATV CROWS M240": "jeep_turret",
	"M-ATV M240": "jeep",
	"M-ATV TOW": "jeep_antitank",
	"M1126": "apc",
	"M1126 M240": "apc",
	"M1A2": "tank",
	"M2A3": "trackedifv",
	"M939 Truck Logistics": "truck_logistics",
	"M939 Truck Transport": "truck_transport",
	"MAN HX Truck Logistics": "truck_logistics",
	"MAN HX Truck Transport": "truck_transport",
	"MSVS Truck Logistics": "truck_logistics",
	"MSVS Truck Transport": "truck_transport",
	"MT-LB": "trackedapc",
	"MT-LBM 6MA": "trackedapc",
	"MT-LBM 6MB": "trackedifv",
	"MT-LBM ZU23": "antiair",
	"Mi-17": "transporthelo",
	"Mi-8": "transporthelo",
	"Minsk 400": "motorcycle",
	"Simir Kord": "jeep_transport",
	"Simir Kornet": "jeep_antitank",
	"Simir Logistics": "jeep_logistics",
	"Simir MG3": "jeep",
	"T-62": "tank",
	"T-72": "tank",
	"T-72S": "tank",
	"TAPV": "jeep_turret",
	"Technical Armored DShK-M": "jeep",
	"Technical Armored SPG-9": "jeep_antitank",
	"Technical DShK-M": "jeep",
	"Technical Logistics INS": "jeep_logistics",
	"Technical Logistics MIL": "jeep_logistics",
	"Technical Rocket Artillery": "jeep_artillery",
	"Technical SPG": "jeep_antitank",
	"Technical Shielded DShK-M": "jeep",
	"Technical Transport INS": "jeep_transport",
	"Technical Transport MIL": "jeep_transport",
	"Tigr-M Kord Open Top": "jeep",
	"Tigr-M Kord RWS": "jeep_turret",
	"UH-60M": "transporthelo",
	"URAL 4320 Truck Logistics": "truck_logistics",
	"URAL 4320 Truck Transport": "truck_transport",
	"Ural 375-D Truck Logistics": "truck_logistics",
	"Ural 375-D Truck Transport": "truck_transport",
	"Ural 375-D Truck ZU23": "truck_antiair"
};