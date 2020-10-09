/**
 * ideal vehicles data structure
 * 
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
 *          }
 *      },
 *    ...
 *  }
 */


var vehicle_icon_dict = {
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

var vehicle_data = {
    "Albasrah_AAS_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "2"
                },
                {
                    "name": "M-ATV M240",
                    "quantity": "1"
                },
                {
                    "name": "M1126",
                    "quantity": "2"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "UH-60M",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "M-ATV TOW",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "M2A3",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-1",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "Mi-17",
                    "quantity": "1"
                },
                {
                    "name": "Simir Kord",
                    "quantity": "1"
                },
                {
                    "name": "Simir Logistics",
                    "quantity": "1"
                },
                {
                    "name": "Simir MG3",
                    "quantity": "2"
                },
                {
                    "name": "URAL 4320 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 1200,
                    "name": "Simir Kornet",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Simir Logistics",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "T-62",
                    "quantity": "1"
                }
            ]
        }
    },
    "Albasrah_AAS_v2": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "4"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "1"
                },
                {
                    "name": "UH-60M",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-1 ZU23",
                    "quantity": "1"
                },
                {
                    "name": "Minsk 400",
                    "quantity": "4"
                },
                {
                    "name": "Technical Armored DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical Armored SPG-9",
                    "quantity": "1"
                },
                {
                    "name": "Technical Logistics INS",
                    "quantity": "4"
                },
                {
                    "name": "Technical Rocket Artillery",
                    "quantity": "1"
                },
                {
                    "name": "Technical Shielded DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Ural 375-D Truck ZU23",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Technical Transport INS",
                    "quantity": "1"
                }
            ]
        }
    },
    "Albasrah_Insurgency_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "FV432",
                    "quantity": "2"
                },
                {
                    "name": "FV510",
                    "quantity": "1"
                },
                {
                    "name": "FV510 (Up-Armoured)",
                    "quantity": "2"
                },
                {
                    "name": "MAN HX Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "MAN HX Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "UH-60M",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "Minsk 400",
                    "quantity": "10"
                },
                {
                    "name": "Technical Armored DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical Armored SPG-9",
                    "quantity": "1"
                },
                {
                    "name": "Technical Logistics INS",
                    "quantity": "5"
                },
                {
                    "name": "Technical Shielded DShK-M",
                    "quantity": "2"
                },
                {
                    "name": "Technical SPG",
                    "quantity": "2"
                },
                {
                    "name": "Ural 375-D Truck ZU23",
                    "quantity": "1"
                }
            ]
        }
    },
    "Albasrah_Invasion_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "FV432",
                    "quantity": "1"
                },
                {
                    "name": "FV432 RWS",
                    "quantity": "2"
                },
                {
                    "name": "FV510 (Up-Armoured)",
                    "quantity": "3"
                },
                {
                    "name": "MAN HX Truck Logistics",
                    "quantity": "4"
                },
                {
                    "delay": 360,
                    "name": "MAN HX Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "UH-60M",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-1",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "Minsk 400",
                    "quantity": "6"
                },
                {
                    "name": "Technical Armored DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical Armored SPG-9",
                    "quantity": "1"
                },
                {
                    "name": "Technical DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical Logistics INS",
                    "quantity": "5"
                },
                {
                    "name": "Technical SPG",
                    "quantity": "1"
                },
                {
                    "name": "Ural 375-D Truck ZU23",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Minsk 400",
                    "quantity": "2"
                }
            ]
        }
    },
    "Albasrah_Invasion_v2": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "FV4034",
                    "quantity": "1"
                },
                {
                    "name": "FV432",
                    "quantity": "1"
                },
                {
                    "name": "FV432 RWS",
                    "quantity": "1"
                },
                {
                    "name": "FV510",
                    "quantity": "1"
                },
                {
                    "name": "FV510 (Up-Armoured)",
                    "quantity": "3"
                },
                {
                    "name": "MAN HX Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "MAN HX Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "UH-60M",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-1",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "Minsk 400",
                    "quantity": "8"
                },
                {
                    "name": "T-62",
                    "quantity": "1"
                },
                {
                    "name": "Technical Armored DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical Armored SPG-9",
                    "quantity": "2"
                },
                {
                    "name": "Technical DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical Logistics INS",
                    "quantity": "4"
                },
                {
                    "name": "Technical SPG",
                    "quantity": "1"
                },
                {
                    "name": "Technical Transport INS",
                    "quantity": "1"
                },
                {
                    "name": "Ural 375-D Truck ZU23",
                    "quantity": "1"
                }
            ]
        }
    },
    "Albasrah_RAAS_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "BMP-1 ZU23",
                    "quantity": "1"
                },
                {
                    "name": "Minsk 400",
                    "quantity": "2"
                },
                {
                    "name": "Technical DShK-M",
                    "quantity": "3"
                },
                {
                    "name": "Technical Logistics MIL",
                    "quantity": "2"
                },
                {
                    "name": "Technical SPG",
                    "quantity": "1"
                },
                {
                    "name": "Ural 375-D Truck Logistics",
                    "quantity": "2"
                },
                {
                    "name": "Ural 375-D Truck ZU23",
                    "quantity": "1"
                },
                {
                    "delay": 1800,
                    "name": "BRDM-2 Spandrel",
                    "quantity": "1"
                },
                {
                    "delay": 1800,
                    "name": "T-62",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Technical Transport MIL",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-1 ZU23",
                    "quantity": "1"
                },
                {
                    "name": "Minsk 400",
                    "quantity": "4"
                },
                {
                    "name": "Technical Armored DShK-M",
                    "quantity": "2"
                },
                {
                    "name": "Technical Armored SPG-9",
                    "quantity": "1"
                },
                {
                    "name": "Technical DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical Logistics INS",
                    "quantity": "4"
                },
                {
                    "name": "Ural 375-D Truck ZU23",
                    "quantity": "1"
                },
                {
                    "delay": 1800,
                    "name": "BRDM-2 Spandrel",
                    "quantity": "1"
                },
                {
                    "delay": 1800,
                    "name": "T-62",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Technical Transport INS",
                    "quantity": "1"
                }
            ]
        }
    },
    "Albasrah_Skirmish_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "MAN HX Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "MAN HX Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "URAL 4320 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "URAL 4320 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "Albasrah_Skirmish_v2": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "Minsk 400",
                    "quantity": "2"
                },
                {
                    "name": "Technical Logistics MIL",
                    "quantity": "2"
                },
                {
                    "name": "Technical Transport MIL",
                    "quantity": "2"
                },
                {
                    "name": "Ural 375-D Truck ZU23",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "Minsk 400",
                    "quantity": "2"
                },
                {
                    "name": "Technical Logistics INS",
                    "quantity": "2"
                },
                {
                    "name": "Technical Transport INS",
                    "quantity": "2"
                },
                {
                    "name": "Ural 375-D Truck ZU23",
                    "quantity": "1"
                }
            ]
        }
    },
    "Albasrah_TA_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M2A3",
                    "quantity": "2"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "M2A3",
                    "quantity": "2"
                }
            ]
        }
    },
    "Albasrah_TC_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "FV432",
                    "quantity": "1"
                },
                {
                    "name": "FV432 RWS",
                    "quantity": "1"
                },
                {
                    "name": "FV510 (Up-Armoured)",
                    "quantity": "2"
                },
                {
                    "name": "MAN HX Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "MAN HX Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 600,
                    "name": "UH-60M",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-1",
                    "quantity": "1"
                },
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "Simir Kord",
                    "quantity": "1"
                },
                {
                    "name": "Simir Kornet",
                    "quantity": "1"
                },
                {
                    "name": "Simir Logistics",
                    "quantity": "1"
                },
                {
                    "name": "Simir MG3",
                    "quantity": "2"
                },
                {
                    "name": "URAL 4320 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 600,
                    "name": "Mi-17",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Simir Logistics",
                    "quantity": "1"
                }
            ]
        }
    },
    "Albasrah_TC_v2": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "2"
                },
                {
                    "name": "M1126",
                    "quantity": "2"
                },
                {
                    "name": "M2A3",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "UH-60M",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-1",
                    "quantity": "1"
                },
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "Mi-17",
                    "quantity": "1"
                },
                {
                    "name": "MT-LBM 6MA",
                    "quantity": "1"
                },
                {
                    "name": "Simir Kord",
                    "quantity": "1"
                },
                {
                    "name": "Simir Kornet",
                    "quantity": "1"
                },
                {
                    "name": "Simir MG3",
                    "quantity": "1"
                },
                {
                    "name": "URAL 4320 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "Simir Logistics",
                    "quantity": "1"
                }
            ]
        }
    },
    "Belaya_AAS_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "1"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "MT-LBM 6MA",
                    "quantity": "1"
                },
                {
                    "name": "Tigr-M Kord Open Top",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-1",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "MT-LBM ZU23",
                    "quantity": "1"
                },
                {
                    "name": "Technical Logistics MIL",
                    "quantity": "1"
                },
                {
                    "name": "Technical Shielded DShK-M",
                    "quantity": "2"
                },
                {
                    "name": "Technical SPG",
                    "quantity": "1"
                },
                {
                    "name": "Ural 375-D Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "Technical Transport MIL",
                    "quantity": "1"
                }
            ]
        }
    },
    "Belaya_AAS_v2": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "FV432",
                    "quantity": "2"
                },
                {
                    "name": "FV432 RWS",
                    "quantity": "1"
                },
                {
                    "name": "MAN HX Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "MAN HX Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 600,
                    "name": "UH-60M",
                    "quantity": "2"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BTR-80",
                    "quantity": "1"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "MT-LBM 6MA",
                    "quantity": "1"
                },
                {
                    "name": "Tigr-M Kord RWS",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 600,
                    "name": "Mi-8",
                    "quantity": "2"
                }
            ]
        }
    },
    "Belaya_Invasion_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "BTR-80",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "2"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Tigr-M Kord Open Top",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 1800,
                    "name": "Mi-8",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BRDM-2",
                    "quantity": "2"
                },
                {
                    "name": "MT-LBM ZU23",
                    "quantity": "1"
                },
                {
                    "name": "Technical DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical Logistics MIL",
                    "quantity": "1"
                },
                {
                    "name": "Technical Shielded DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical SPG",
                    "quantity": "2"
                },
                {
                    "name": "Ural 375-D Truck Logistics",
                    "quantity": "4"
                },
                {
                    "delay": 360,
                    "name": "Technical Transport MIL",
                    "quantity": "1"
                }
            ]
        }
    },
    "Belaya_Invasion_v2": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "1"
                },
                {
                    "name": "M1126",
                    "quantity": "1"
                },
                {
                    "name": "M2A3",
                    "quantity": "2"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 1200,
                    "name": "M1A2",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "UH-60M",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "2"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "4"
                },
                {
                    "name": "Tigr-M Kord RWS",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Mi-8",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "T-72",
                    "quantity": "1"
                }
            ]
        }
    },
    "Belaya_Invasion_v3": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "FV432",
                    "quantity": "1"
                },
                {
                    "name": "FV432 RWS",
                    "quantity": "1"
                },
                {
                    "name": "FV510 (Up-Armoured)",
                    "quantity": "2"
                },
                {
                    "name": "MAN HX Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 1200,
                    "name": "FV4034",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "MAN HX Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "UH-60M",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "BTR-80",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "2"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "4"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Mi-8",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "T-72",
                    "quantity": "1"
                }
            ]
        }
    },
    "Belaya_RAAS_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "1"
                },
                {
                    "name": "M1126",
                    "quantity": "2"
                },
                {
                    "name": "M2A3",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 1200,
                    "name": "M1A2",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "UH-60M",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "2"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Tigr-M Kord Open Top",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Mi-8",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "T-72",
                    "quantity": "1"
                }
            ]
        }
    },
    "Belaya_RAAS_v2": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "3"
                },
                {
                    "name": "M-ATV CROWS",
                    "quantity": "1"
                },
                {
                    "name": "M-ATV M240",
                    "quantity": "1"
                },
                {
                    "name": "M-ATV TOW",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 600,
                    "name": "UH-60M",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-1 ZU23",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "MT-LBM ZU23",
                    "quantity": "1"
                },
                {
                    "name": "Technical Logistics MIL",
                    "quantity": "2"
                },
                {
                    "name": "Technical Shielded DShK-M",
                    "quantity": "2"
                },
                {
                    "name": "Technical SPG",
                    "quantity": "1"
                },
                {
                    "name": "Ural 375-D Truck Logistics",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "Technical Transport MIL",
                    "quantity": "2"
                }
            ]
        }
    },
    "Belaya_RAAS_v3": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "FV432",
                    "quantity": "2"
                },
                {
                    "name": "FV432 RWS",
                    "quantity": "1"
                },
                {
                    "name": "FV510 (Up-Armoured)",
                    "quantity": "1"
                },
                {
                    "name": "MAN HX Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 1200,
                    "name": "FV4034",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "MAN HX Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 600,
                    "name": "UH-60M",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-1",
                    "quantity": "1"
                },
                {
                    "name": "Minsk 400",
                    "quantity": "3"
                },
                {
                    "name": "Technical DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical Logistics MIL",
                    "quantity": "1"
                },
                {
                    "name": "Technical Shielded DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical SPG",
                    "quantity": "2"
                },
                {
                    "name": "Ural 375-D Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 1200,
                    "name": "T-62",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Technical Transport MIL",
                    "quantity": "1"
                }
            ]
        }
    },
    "Belaya_Skirmish_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Tigr-M Kord Open Top",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "Technical DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Ural 375-D Truck Logistics",
                    "quantity": "3"
                }
            ]
        }
    },
    "Belaya_TC_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "1"
                },
                {
                    "name": "M1126",
                    "quantity": "2"
                },
                {
                    "name": "M2A3",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 1200,
                    "name": "M1A2",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "UH-60M",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "2"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Tigr-M Kord Open Top",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Mi-8",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "T-72",
                    "quantity": "1"
                }
            ]
        }
    },
    "CAF_Albasrah_Invasion_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "LAV 6.0",
                    "quantity": "3"
                },
                {
                    "name": "LAV III C6 RWS",
                    "quantity": "1"
                },
                {
                    "name": "Leopard 2A6M Caged",
                    "quantity": "1"
                },
                {
                    "name": "MSVS Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "TAPV",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "MSVS Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "UH-60M",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-1",
                    "quantity": "2"
                },
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "Minsk 400",
                    "quantity": "8"
                },
                {
                    "name": "T-62",
                    "quantity": "1"
                },
                {
                    "name": "Technical Armored DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical Armored SPG-9",
                    "quantity": "3"
                },
                {
                    "name": "Technical DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical Logistics INS",
                    "quantity": "4"
                },
                {
                    "name": "Technical SPG",
                    "quantity": "2"
                },
                {
                    "name": "Technical Transport INS",
                    "quantity": "1"
                }
            ]
        }
    },
    "CAF_Albasrah_Invasion_v2": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "LAV 6.0",
                    "quantity": "3"
                },
                {
                    "name": "LAV III C6 RWS",
                    "quantity": "1"
                },
                {
                    "name": "Leopard 2A6M",
                    "quantity": "1"
                },
                {
                    "name": "MSVS Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "TAPV",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "LAV III C6 RWS",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "MSVS Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 600,
                    "name": "UH-60M",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2",
                    "quantity": "2"
                },
                {
                    "name": "Simir Kord",
                    "quantity": "2"
                },
                {
                    "name": "Simir Kornet",
                    "quantity": "1"
                },
                {
                    "name": "Simir Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Simir MG3",
                    "quantity": "1"
                },
                {
                    "name": "T-72S",
                    "quantity": "1"
                },
                {
                    "name": "URAL 4320 Truck Logistics",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "URAL 4320 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "CAF_Belaya_AAS_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "MSVS Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "TAPV",
                    "quantity": "3"
                },
                {
                    "name": "UH-60M",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "MSVS Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Mi-8",
                    "quantity": "1"
                },
                {
                    "name": "Tigr-M Kord RWS",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "CAF_Belaya_RAAS_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "LAV 6.0",
                    "quantity": "2"
                },
                {
                    "name": "MSVS Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "TAPV",
                    "quantity": "2"
                },
                {
                    "name": "UH-60M",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "Leopard 2A6M",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "MSVS Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BTR-82A",
                    "quantity": "3"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Mi-8",
                    "quantity": "1"
                },
                {
                    "name": "Tigr-M Kord RWS",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "T-72",
                    "quantity": "1"
                }
            ]
        }
    },
    "CAF_Belaya_RAAS_v2": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "MSVS Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "TAPV",
                    "quantity": "3"
                },
                {
                    "name": "UH-60M",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "MSVS Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Mi-8",
                    "quantity": "1"
                },
                {
                    "name": "Tigr-M Kord Open Top",
                    "quantity": "2"
                },
                {
                    "name": "Tigr-M Kord RWS",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "CAF_Chora_AAS_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "LAV 6.0",
                    "quantity": "1"
                },
                {
                    "name": "MSVS Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "TAPV",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "MSVS Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BTR-82A",
                    "quantity": "2"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Tigr-M Kord RWS",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "CAF_Chora_RASS_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "LAV 6.0",
                    "quantity": "1"
                },
                {
                    "name": "MSVS Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "TAPV",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "MSVS Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-1",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "MT-LBM 6MA",
                    "quantity": "1"
                },
                {
                    "name": "Simir Kord",
                    "quantity": "1"
                },
                {
                    "name": "URAL 4320 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "URAL 4320 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "CAF_Fallujah_Invasion_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "LAV 6.0",
                    "quantity": "3"
                },
                {
                    "name": "LAV III C6 RWS",
                    "quantity": "1"
                },
                {
                    "name": "Leopard 2A6M",
                    "quantity": "1"
                },
                {
                    "name": "Leopard 2A6M Caged",
                    "quantity": "1"
                },
                {
                    "name": "MSVS Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "TAPV",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "MSVS Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-1",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "Minsk 400",
                    "quantity": "4"
                },
                {
                    "name": "T-62",
                    "quantity": "2"
                },
                {
                    "name": "Technical Armored DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical Armored SPG-9",
                    "quantity": "1"
                },
                {
                    "name": "Technical Logistics INS",
                    "quantity": "4"
                },
                {
                    "name": "Technical Shielded DShK-M",
                    "quantity": "2"
                },
                {
                    "name": "Technical SPG",
                    "quantity": "1"
                }
            ]
        }
    },
    "CAF_Fallujah_RAAS_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "LAV 6.0",
                    "quantity": "2"
                },
                {
                    "name": "LAV III C6 RWS",
                    "quantity": "1"
                },
                {
                    "name": "MSVS Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "TAPV",
                    "quantity": "2"
                },
                {
                    "delay": 600,
                    "name": "Leopard 2A6M",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "MSVS Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-1",
                    "quantity": "1"
                },
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2",
                    "quantity": "2"
                },
                {
                    "name": "Simir Kord",
                    "quantity": "2"
                },
                {
                    "name": "Simir Logistics",
                    "quantity": "1"
                },
                {
                    "name": "Simir MG3",
                    "quantity": "1"
                },
                {
                    "name": "URAL 4320 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 600,
                    "name": "T-72S",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "URAL 4320 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "CAF_Fools_Road_RAAS_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "LAV III C6 RWS",
                    "quantity": "2"
                },
                {
                    "name": "MSVS Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "MSVS Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Tigr-M Kord Open Top",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "CAF_Gorodok_AAS_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "LAV 6.0",
                    "quantity": "2"
                },
                {
                    "name": "MSVS Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "TAPV",
                    "quantity": "1"
                },
                {
                    "name": "UH-60M",
                    "quantity": "1"
                },
                {
                    "delay": 600,
                    "name": "Leopard 2A6M",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "MSVS Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BTR-82A",
                    "quantity": "3"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Mi-8",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 600,
                    "name": "T-72",
                    "quantity": "1"
                }
            ]
        }
    },
    "CAF_Gorodok_Invasion_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "LAV 6.0",
                    "quantity": "3"
                },
                {
                    "name": "MSVS Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "TAPV",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "LAV III C6 RWS",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "Leopard 2A6M",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "UH-60M",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-1",
                    "quantity": "2"
                },
                {
                    "name": "BMP-1 ZU23",
                    "quantity": "1"
                },
                {
                    "name": "Technical Logistics MIL",
                    "quantity": "1"
                },
                {
                    "name": "Technical Rocket Artillery",
                    "quantity": "2"
                },
                {
                    "name": "Technical Shielded DShK-M",
                    "quantity": "2"
                },
                {
                    "name": "Technical SPG",
                    "quantity": "2"
                },
                {
                    "name": "Ural 375-D Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 1200,
                    "name": "T-62",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Ural 375-D Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "CAF_Gorodok_RAAS_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "LAV 6.0",
                    "quantity": "2"
                },
                {
                    "name": "Leopard 2A6M",
                    "quantity": "1"
                },
                {
                    "name": "MSVS Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "TAPV",
                    "quantity": "2"
                },
                {
                    "name": "UH-60M",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "MSVS Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BTR-80",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "3"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Mi-8",
                    "quantity": "2"
                },
                {
                    "name": "T-72",
                    "quantity": "1"
                },
                {
                    "name": "Tigr-M Kord RWS",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "CAF_Gorodok_RAAS_v2": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "LAV 6.0",
                    "quantity": "3"
                },
                {
                    "name": "MSVS Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "TAPV",
                    "quantity": "2"
                },
                {
                    "delay": 1200,
                    "name": "Leopard 2A6M Caged",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "MSVS Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "M-ATV CROWS",
                    "quantity": "2"
                },
                {
                    "name": "M1126",
                    "quantity": "2"
                },
                {
                    "name": "M2A3",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 1200,
                    "name": "M1A2",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "CAF_Gorodok_TC_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "LAV 6.0",
                    "quantity": "2"
                },
                {
                    "name": "MSVS Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "TAPV",
                    "quantity": "2"
                },
                {
                    "name": "UH-60M",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "MSVS Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "BTR-80",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "3"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Mi-8",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "CAF_Kamdesh_Invasion_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "LAV 6.0",
                    "quantity": "2"
                },
                {
                    "name": "LAV III C6 RWS",
                    "quantity": "2"
                },
                {
                    "name": "MSVS Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "TAPV",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "MSVS Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-1 ZU23",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "Minsk 400",
                    "quantity": "4"
                },
                {
                    "name": "MT-LB",
                    "quantity": "1"
                },
                {
                    "name": "Technical Armored DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical Armored SPG-9",
                    "quantity": "1"
                },
                {
                    "name": "Technical Logistics INS",
                    "quantity": "3"
                },
                {
                    "name": "Technical Shielded DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Ural 375-D Truck Logistics",
                    "quantity": "2"
                },
                {
                    "delay": 600,
                    "name": "T-62",
                    "quantity": "1"
                }
            ]
        }
    },
    "CAF_Kamdesh_RAAS_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "LAV 6.0",
                    "quantity": "3"
                },
                {
                    "name": "MSVS Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "TAPV",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "MSVS Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "2"
                },
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "1"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Tigr-M Kord Open Top",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "CAF_Kamdesh_TC_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "LAV 6.0",
                    "quantity": "2"
                },
                {
                    "name": "MSVS Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "TAPV",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "MSVS Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "3"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "CAF_Kohat_Invasion_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "LAV 6.0",
                    "quantity": "3"
                },
                {
                    "name": "MSVS Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "TAPV",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "LAV III C6 RWS",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "UH-60M",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-1",
                    "quantity": "1"
                },
                {
                    "name": "Minsk 400",
                    "quantity": "14"
                },
                {
                    "name": "Technical Armored DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical Logistics INS",
                    "quantity": "3"
                },
                {
                    "name": "Technical Rocket Artillery",
                    "quantity": "2"
                },
                {
                    "name": "Technical SPG",
                    "quantity": "3"
                },
                {
                    "delay": 600,
                    "name": "T-62",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Technical Logistics INS",
                    "quantity": "1"
                }
            ]
        }
    },
    "CAF_Kokan_Valley_RASS_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "LAV 6.0",
                    "quantity": "1"
                },
                {
                    "name": "LAV III C6 RWS",
                    "quantity": "1"
                },
                {
                    "name": "MSVS Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "MSVS Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-1",
                    "quantity": "1"
                },
                {
                    "name": "Simir Kord",
                    "quantity": "1"
                },
                {
                    "name": "Simir MG3",
                    "quantity": "1"
                },
                {
                    "name": "URAL 4320 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "URAL 4320 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "CAF_Lashkar_Valley_Invasion_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "LAV 6.0",
                    "quantity": "2"
                },
                {
                    "name": "LAV III C6 RWS",
                    "quantity": "1"
                },
                {
                    "name": "MSVS Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "TAPV",
                    "quantity": "1"
                },
                {
                    "name": "UH-60M",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "MSVS Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "Minsk 400",
                    "quantity": "6"
                },
                {
                    "name": "MT-LB",
                    "quantity": "1"
                },
                {
                    "name": "Technical Armored SPG-9",
                    "quantity": "1"
                },
                {
                    "name": "Technical Logistics INS",
                    "quantity": "9"
                },
                {
                    "name": "Technical Rocket Artillery",
                    "quantity": "2"
                },
                {
                    "name": "Technical Shielded DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Ural 375-D Truck Logistics",
                    "quantity": "1"
                },
                {
                    "name": "Ural 375-D Truck ZU23",
                    "quantity": "1"
                },
                {
                    "delay": 600,
                    "name": "BMP-1",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Minsk 400",
                    "quantity": "3"
                }
            ]
        }
    },
    "CAF_Lashkar_Valley_RAAS_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "LAV 6.0",
                    "quantity": "2"
                },
                {
                    "name": "MSVS Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "TAPV",
                    "quantity": "2"
                },
                {
                    "name": "UH-60M",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "MSVS Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BTR-82A",
                    "quantity": "3"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Mi-8",
                    "quantity": "2"
                },
                {
                    "name": "Tigr-M Kord Open Top",
                    "quantity": "1"
                },
                {
                    "name": "Tigr-M Kord RWS",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "CAF_Lashkar_Valley_TC_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "LAV 6.0",
                    "quantity": "1"
                },
                {
                    "name": "LAV III C6 RWS",
                    "quantity": "2"
                },
                {
                    "name": "MSVS Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "LAV III C6 RWS",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "Leopard 2A6M",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "UH-60M",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "Minsk 400",
                    "quantity": "5"
                },
                {
                    "name": "Technical Armored DShK-M",
                    "quantity": "2"
                },
                {
                    "name": "Technical Armored SPG-9",
                    "quantity": "2"
                },
                {
                    "name": "Technical Logistics INS",
                    "quantity": "2"
                },
                {
                    "name": "Technical Rocket Artillery",
                    "quantity": "2"
                },
                {
                    "name": "Ural 375-D Truck Logistics",
                    "quantity": "2"
                },
                {
                    "delay": 1200,
                    "name": "BMP-1",
                    "quantity": "1"
                },
                {
                    "delay": 300,
                    "name": "T-62",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "Technical Transport INS",
                    "quantity": "1"
                }
            ]
        }
    },
    "CAF_LogarValley_RAAS_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "MSVS Truck Transport",
                    "quantity": "4"
                },
                {
                    "delay": 1800,
                    "name": "MSVS Truck Logistics",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "MSVS Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "Simir Kord",
                    "quantity": "1"
                },
                {
                    "name": "Simir MG3",
                    "quantity": "1"
                },
                {
                    "name": "URAL 4320 Truck Transport",
                    "quantity": "3"
                },
                {
                    "delay": 1800,
                    "name": "URAL 4320 Truck Logistics",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "URAL 4320 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "CAF_Manic_AAS_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "LAV 6.0",
                    "quantity": "2"
                },
                {
                    "name": "MSVS Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "TAPV",
                    "quantity": "2"
                },
                {
                    "name": "UH-60M",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "Leopard 2A6M",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "MSVS Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "3"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Mi-8",
                    "quantity": "1"
                },
                {
                    "name": "Tigr-M Kord RWS",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "T-72",
                    "quantity": "1"
                }
            ]
        }
    },
    "CAF_Manic_AAS_v2": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "MSVS Truck Logistics",
                    "quantity": "1"
                },
                {
                    "name": "MSVS Truck Transport",
                    "quantity": "2"
                },
                {
                    "name": "TAPV",
                    "quantity": "2"
                },
                {
                    "name": "UH-60M",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "MSVS Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "1"
                },
                {
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "2"
                },
                {
                    "name": "Mi-8",
                    "quantity": "3"
                },
                {
                    "name": "Tigr-M Kord RWS",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "CAF_Manic_Invasion_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "LAV 6.0",
                    "quantity": "2"
                },
                {
                    "name": "LAV III C6 RWS",
                    "quantity": "2"
                },
                {
                    "name": "MSVS Truck Logistics",
                    "quantity": "2"
                },
                {
                    "name": "TAPV",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "MSVS Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "UH-60M",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-1",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "BTR-80",
                    "quantity": "1"
                },
                {
                    "name": "Technical Logistics MIL",
                    "quantity": "3"
                },
                {
                    "name": "Technical Rocket Artillery",
                    "quantity": "1"
                },
                {
                    "name": "Technical Shielded DShK-M",
                    "quantity": "3"
                },
                {
                    "name": "Technical SPG",
                    "quantity": "2"
                },
                {
                    "name": "Ural 375-D Truck Logistics",
                    "quantity": "2"
                },
                {
                    "delay": 1200,
                    "name": "T-62",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Ural 375-D Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "CAF_Manic_Invasion_v2": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "LUV-A1",
                    "quantity": "2"
                },
                {
                    "name": "MSVS Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "TAPV",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "LAV 6.0",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "MSVS Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "1"
                },
                {
                    "name": "M-ATV CROWS",
                    "quantity": "1"
                },
                {
                    "name": "M2A3",
                    "quantity": "3"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 600,
                    "name": "UH-60M",
                    "quantity": "1"
                }
            ]
        }
    },
    "CAF_Manic_RAAS_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "LAV 6.0",
                    "quantity": "2"
                },
                {
                    "name": "MSVS Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "TAPV",
                    "quantity": "2"
                },
                {
                    "name": "UH-60M",
                    "quantity": "2"
                },
                {
                    "delay": 1200,
                    "name": "Leopard 2A6M",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "MSVS Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BTR-82A",
                    "quantity": "3"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Mi-8",
                    "quantity": "2"
                },
                {
                    "name": "Tigr-M Kord RWS",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "T-72",
                    "quantity": "1"
                }
            ]
        }
    },
    "CAF_Manic_RAAS_v2": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "LAV 6.0",
                    "quantity": "2"
                },
                {
                    "name": "LAV III C6 RWS",
                    "quantity": "1"
                },
                {
                    "name": "MSVS Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "TAPV",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "MSVS Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "UH-60M",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-1",
                    "quantity": "2"
                },
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "Technical Logistics MIL",
                    "quantity": "2"
                },
                {
                    "name": "Technical Shielded DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical SPG",
                    "quantity": "2"
                },
                {
                    "name": "Technical Transport MIL",
                    "quantity": "1"
                },
                {
                    "name": "Ural 375-D Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 1200,
                    "name": "T-62",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Ural 375-D Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "CAF_Manic_RAAS_v3": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "Leopard 2A6M",
                    "quantity": "2"
                },
                {
                    "name": "Leopard 2A6M Caged",
                    "quantity": "1"
                },
                {
                    "name": "MSVS Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "TAPV",
                    "quantity": "2"
                },
                {
                    "name": "UH-60M",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "MSVS Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Mi-8",
                    "quantity": "1"
                },
                {
                    "name": "T-72",
                    "quantity": "3"
                },
                {
                    "name": "Tigr-M Kord RWS",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "CAF_Manic_RAAS_v4": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "MSVS Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "TAPV",
                    "quantity": "2"
                },
                {
                    "name": "UH-60M",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "MSVS Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Mi-8",
                    "quantity": "3"
                },
                {
                    "name": "Tigr-M Kord RWS",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "CAF_Manic_Skirmish_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "MSVS Truck Logistics",
                    "quantity": "3"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "Ural 375-D Truck Logistics",
                    "quantity": "3"
                }
            ]
        }
    },
    "CAF_Manic_Skirmish_v2": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "MSVS Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "TAPV",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "M-ATV CROWS",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                }
            ]
        }
    },
    "CAF_Manic_TC_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "LAV 6.0",
                    "quantity": "2"
                },
                {
                    "name": "MSVS Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "TAPV",
                    "quantity": "1"
                },
                {
                    "name": "UH-60M",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "MSVS Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "3"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Mi-8",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "CAF_Mestia_RAAS_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "LAV III C6 RWS",
                    "quantity": "1"
                },
                {
                    "name": "MSVS Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "TAPV",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "MSVS Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                },
                {
                    "name": "Tigr-M Kord Open Top",
                    "quantity": "1"
                },
                {
                    "name": "Tigr-M Kord RWS",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "CAF_Mutaha_AAS_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "LAV 6.0",
                    "quantity": "3"
                },
                {
                    "name": "MSVS Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "TAPV",
                    "quantity": "2"
                },
                {
                    "delay": 1200,
                    "name": "Leopard 2A6M",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "MSVS Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 600,
                    "name": "UH-60M",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "2"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Tigr-M Kord RWS",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 600,
                    "name": "Mi-8",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "T-72",
                    "quantity": "1"
                }
            ]
        }
    },
    "CAF_Mutaha_RAAS_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "LAV 6.0",
                    "quantity": "3"
                },
                {
                    "name": "MSVS Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "TAPV",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "MSVS Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "UH-60M",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "2"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Tigr-M Kord RWS",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Mi-8",
                    "quantity": "1"
                }
            ]
        }
    },
    "CAF_Mutaha_RAAS_v2": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "LAV 6.0",
                    "quantity": "2"
                },
                {
                    "name": "MSVS Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "TAPV",
                    "quantity": "2"
                },
                {
                    "delay": 1800,
                    "name": "Leopard 2A6M",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "MSVS Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 900,
                    "name": "UH-60M",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-1",
                    "quantity": "1"
                },
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "Simir Kord",
                    "quantity": "1"
                },
                {
                    "name": "URAL 4320 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 900,
                    "name": "Mi-17",
                    "quantity": "1"
                },
                {
                    "delay": 1800,
                    "name": "T-72S",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "URAL 4320 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "CAF_Nanisivik_AAS_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "LAV 6.0",
                    "quantity": "2"
                },
                {
                    "name": "MSVS Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "TAPV",
                    "quantity": "2"
                },
                {
                    "name": "UH-60M",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "Leopard 2A6M",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "MSVS Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BTR-80",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "3"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Mi-8",
                    "quantity": "1"
                },
                {
                    "name": "Tigr-M Kord RWS",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "T-72",
                    "quantity": "1"
                }
            ]
        }
    },
    "CAF_Nanisivik_Invasion_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "LAV 6.0",
                    "quantity": "2"
                },
                {
                    "name": "LUV-A1",
                    "quantity": "4"
                },
                {
                    "name": "MSVS Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "TAPV",
                    "quantity": "2"
                },
                {
                    "delay": 1200,
                    "name": "Leopard 2A6M",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "MSVS Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "UH-60M",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "2"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Tigr-M Kord RWS",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Mi-8",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "T-72",
                    "quantity": "1"
                }
            ]
        }
    },
    "CAF_Nanisivik_RAAS_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "LAV 6.0",
                    "quantity": "2"
                },
                {
                    "name": "LAV III M2 RWS",
                    "quantity": "1"
                },
                {
                    "name": "MSVS Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "TAPV",
                    "quantity": "1"
                },
                {
                    "name": "UH-60M",
                    "quantity": "1"
                },
                {
                    "delay": 600,
                    "name": "Leopard 2A6M",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "MSVS Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BTR-80",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "3"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Mi-8",
                    "quantity": "1"
                },
                {
                    "name": "Tigr-M Kord RWS",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 600,
                    "name": "T-72",
                    "quantity": "1"
                }
            ]
        }
    },
    "CAF_Narva_RAAS_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "LAV 6.0",
                    "quantity": "2"
                },
                {
                    "name": "MSVS Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "TAPV",
                    "quantity": "2"
                },
                {
                    "delay": 1800,
                    "name": "Leopard 2A6M Caged",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "MSVS Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "3"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Tigr-M Kord Open Top",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 1800,
                    "name": "T-72",
                    "quantity": "1"
                }
            ]
        }
    },
    "CAF_Skorpo_RAAS_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "LAV 6.0",
                    "quantity": "2"
                },
                {
                    "name": "MSVS Truck Logistics",
                    "quantity": "2"
                },
                {
                    "name": "TAPV",
                    "quantity": "1"
                },
                {
                    "name": "UH-60M",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "MSVS Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BTR-82A",
                    "quantity": "3"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "2"
                },
                {
                    "name": "Mi-8",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "CAF_Sumari_Bala_AAS_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "LAV III C6 RWS",
                    "quantity": "1"
                },
                {
                    "name": "MSVS Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "MSVS Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "Simir Kord",
                    "quantity": "3"
                },
                {
                    "name": "Simir Logistics",
                    "quantity": "4"
                },
                {
                    "delay": 360,
                    "name": "URAL 4320 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "CAF_Tallil_Outskirts_RAAS_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "LAV 6.0",
                    "quantity": "3"
                },
                {
                    "name": "LAV III M2 RWS",
                    "quantity": "1"
                },
                {
                    "name": "MSVS Truck Logistics",
                    "quantity": "2"
                },
                {
                    "name": "TAPV",
                    "quantity": "1"
                },
                {
                    "name": "UH-60M",
                    "quantity": "2"
                },
                {
                    "delay": 1200,
                    "name": "Leopard 2A6M",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "MSVS Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BTR-80",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "4"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "2"
                },
                {
                    "name": "Mi-8",
                    "quantity": "2"
                },
                {
                    "name": "Tigr-M Kord RWS",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "T-72",
                    "quantity": "2"
                }
            ]
        }
    },
    "CAF_Tallil_Outskirts_RASS_v2": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "Leopard 2A6M",
                    "quantity": "2"
                },
                {
                    "name": "Leopard 2A6M Caged",
                    "quantity": "1"
                },
                {
                    "name": "MSVS Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "TAPV",
                    "quantity": "1"
                },
                {
                    "name": "UH-60M",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "MSVS Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "Mi-17",
                    "quantity": "2"
                },
                {
                    "name": "Simir Kord",
                    "quantity": "1"
                },
                {
                    "name": "T-62",
                    "quantity": "1"
                },
                {
                    "name": "T-72S",
                    "quantity": "2"
                },
                {
                    "name": "URAL 4320 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "URAL 4320 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "CAF_Yehorivka_Invasion_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "LAV 6.0",
                    "quantity": "2"
                },
                {
                    "name": "LAV III C6 RWS",
                    "quantity": "1"
                },
                {
                    "name": "Leopard 2A6M",
                    "quantity": "1"
                },
                {
                    "name": "MSVS Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "TAPV",
                    "quantity": "2"
                },
                {
                    "name": "UH-60M",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "MSVS Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-1",
                    "quantity": "2"
                },
                {
                    "name": "BMP-1 ZU23",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2 Spandrel",
                    "quantity": "1"
                },
                {
                    "name": "T-62",
                    "quantity": "1"
                },
                {
                    "name": "Ural 375-D Truck Logistics",
                    "quantity": "4"
                },
                {
                    "delay": 360,
                    "name": "Ural 375-D Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "CAF_Yehorivka_RAAS_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "LAV 6.0",
                    "quantity": "2"
                },
                {
                    "name": "MSVS Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "TAPV",
                    "quantity": "2"
                },
                {
                    "name": "UH-60M",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "LAV III C6 RWS",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "Leopard 2A6M",
                    "quantity": "2"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BTR-82A",
                    "quantity": "3"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Mi-8",
                    "quantity": "2"
                },
                {
                    "name": "Tigr-M Kord RWS",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "T-72",
                    "quantity": "2"
                }
            ]
        }
    },
    "CAF_Yehorivka_TC_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "LAV 6.0",
                    "quantity": "2"
                },
                {
                    "name": "MSVS Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "TAPV",
                    "quantity": "2"
                },
                {
                    "name": "UH-60M",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "MSVS Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BTR-80",
                    "quantity": "2"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "3"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "Chora_AAS_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "2"
                },
                {
                    "name": "M-ATV M240",
                    "quantity": "1"
                },
                {
                    "name": "M1126",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "MT-LBM 6MA",
                    "quantity": "1"
                },
                {
                    "name": "Simir Kord",
                    "quantity": "1"
                },
                {
                    "name": "Simir Kornet",
                    "quantity": "1"
                },
                {
                    "name": "Simir MG3",
                    "quantity": "1"
                },
                {
                    "name": "URAL 4320 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "URAL 4320 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "Chora_AAS_v2": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "3"
                },
                {
                    "name": "M1126",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BTR-80",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "1"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Tigr-M Kord Open Top",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "Chora_Insurgency_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "1"
                },
                {
                    "name": "M1126",
                    "quantity": "1"
                },
                {
                    "name": "M1126 M240",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "Minsk 400",
                    "quantity": "6"
                },
                {
                    "name": "Technical Armored DShK-M",
                    "quantity": "2"
                },
                {
                    "name": "Technical Armored SPG-9",
                    "quantity": "1"
                },
                {
                    "name": "Technical DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical Logistics INS",
                    "quantity": "4"
                },
                {
                    "name": "Technical Shielded DShK-M",
                    "quantity": "2"
                },
                {
                    "name": "Technical SPG",
                    "quantity": "2"
                }
            ]
        }
    },
    "Chora_Invasion_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "2"
                },
                {
                    "name": "M1126",
                    "quantity": "2"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "Minsk 400",
                    "quantity": "4"
                },
                {
                    "name": "MT-LB",
                    "quantity": "1"
                },
                {
                    "name": "Technical Armored DShK-M",
                    "quantity": "2"
                },
                {
                    "name": "Technical DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical Logistics INS",
                    "quantity": "3"
                },
                {
                    "name": "Technical Shielded DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical SPG",
                    "quantity": "1"
                },
                {
                    "name": "Technical Transport INS",
                    "quantity": "1"
                },
                {
                    "name": "Ural 375-D Truck ZU23",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "Technical Armored DShK-M",
                    "quantity": "1"
                }
            ]
        }
    },
    "Chora_Invasion_v2": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "2"
                },
                {
                    "name": "M1126",
                    "quantity": "2"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "Minsk 400",
                    "quantity": "4"
                },
                {
                    "name": "MT-LB",
                    "quantity": "1"
                },
                {
                    "name": "Technical Armored DShK-M",
                    "quantity": "2"
                },
                {
                    "name": "Technical DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical Logistics INS",
                    "quantity": "3"
                },
                {
                    "name": "Technical Shielded DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical SPG",
                    "quantity": "1"
                },
                {
                    "name": "Technical Transport INS",
                    "quantity": "1"
                },
                {
                    "name": "Ural 375-D Truck ZU23",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "Technical Armored DShK-M",
                    "quantity": "1"
                }
            ]
        }
    },
    "Chora_RAAS_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "3"
                },
                {
                    "name": "M-ATV CROWS",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Tigr-M Kord Open Top",
                    "quantity": "2"
                },
                {
                    "name": "Tigr-M Kord RWS",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "Chora_RAAS_v2": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "FV432",
                    "quantity": "1"
                },
                {
                    "name": "FV432 RWS",
                    "quantity": "1"
                },
                {
                    "name": "MAN HX Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "MAN HX Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "MT-LBM 6MA",
                    "quantity": "1"
                },
                {
                    "name": "Simir MG3",
                    "quantity": "2"
                },
                {
                    "name": "URAL 4320 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "URAL 4320 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "Chora_Skirmish_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Tigr-M Kord Open Top",
                    "quantity": "1"
                }
            ]
        }
    },
    "Chora_TC_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "1"
                },
                {
                    "name": "M-ATV M240",
                    "quantity": "1"
                },
                {
                    "name": "M1126",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-1",
                    "quantity": "1"
                },
                {
                    "name": "Simir Kord",
                    "quantity": "1"
                },
                {
                    "name": "Simir MG3",
                    "quantity": "1"
                },
                {
                    "name": "URAL 4320 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "URAL 4320 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "Fallujah_AAS_v2": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "1"
                },
                {
                    "name": "M1126",
                    "quantity": "1"
                },
                {
                    "name": "M1126 M240",
                    "quantity": "1"
                },
                {
                    "name": "M2A3",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 1200,
                    "name": "M1A2",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "MT-LB",
                    "quantity": "1"
                },
                {
                    "name": "MT-LBM 6MA",
                    "quantity": "1"
                },
                {
                    "name": "Simir Kord",
                    "quantity": "3"
                },
                {
                    "name": "Simir Logistics",
                    "quantity": "2"
                },
                {
                    "name": "Simir MG3",
                    "quantity": "1"
                },
                {
                    "name": "URAL 4320 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 1200,
                    "name": "T-72S",
                    "quantity": "1"
                },
                {
                    "delay": 600,
                    "name": "URAL 4320 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "Fallujah_Insurgency_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "2"
                },
                {
                    "name": "M1126",
                    "quantity": "1"
                },
                {
                    "name": "M1A2",
                    "quantity": "1"
                },
                {
                    "name": "M2A3",
                    "quantity": "2"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "4"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-1",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "Minsk 400",
                    "quantity": "4"
                },
                {
                    "name": "T-62",
                    "quantity": "1"
                },
                {
                    "name": "Technical Armored DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical Armored SPG-9",
                    "quantity": "1"
                },
                {
                    "name": "Technical Logistics INS",
                    "quantity": "4"
                },
                {
                    "name": "Technical Shielded DShK-M",
                    "quantity": "2"
                },
                {
                    "name": "Technical SPG",
                    "quantity": "1"
                }
            ]
        }
    },
    "Fallujah_Invasion_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "1"
                },
                {
                    "name": "M-ATV CROWS M240",
                    "quantity": "1"
                },
                {
                    "name": "M1A2",
                    "quantity": "2"
                },
                {
                    "name": "M2A3",
                    "quantity": "2"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Logistics",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "Minsk 400",
                    "quantity": "8"
                },
                {
                    "name": "T-62",
                    "quantity": "1"
                },
                {
                    "name": "Technical Armored DShK-M",
                    "quantity": "2"
                },
                {
                    "name": "Technical Armored SPG-9",
                    "quantity": "1"
                },
                {
                    "name": "Technical Logistics INS",
                    "quantity": "3"
                },
                {
                    "name": "Technical Shielded DShK-M",
                    "quantity": "2"
                },
                {
                    "name": "Technical SPG",
                    "quantity": "1"
                }
            ]
        }
    },
    "Fallujah_Invasion_v2": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "BMP-1",
                    "quantity": "1"
                },
                {
                    "name": "MT-LB",
                    "quantity": "1"
                },
                {
                    "name": "MT-LBM 6MA",
                    "quantity": "1"
                },
                {
                    "name": "Simir Kord",
                    "quantity": "1"
                },
                {
                    "name": "Simir Kornet",
                    "quantity": "1"
                },
                {
                    "name": "Simir Logistics",
                    "quantity": "2"
                },
                {
                    "name": "Simir MG3",
                    "quantity": "2"
                },
                {
                    "name": "T-62",
                    "quantity": "1"
                },
                {
                    "name": "URAL 4320 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "URAL 4320 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "Minsk 400",
                    "quantity": "10"
                },
                {
                    "name": "T-62",
                    "quantity": "2"
                },
                {
                    "name": "Technical Armored DShK-M",
                    "quantity": "2"
                },
                {
                    "name": "Technical Armored SPG-9",
                    "quantity": "1"
                },
                {
                    "name": "Technical Logistics INS",
                    "quantity": "3"
                },
                {
                    "name": "Technical Rocket Artillery",
                    "quantity": "2"
                },
                {
                    "name": "Technical Shielded DShK-M",
                    "quantity": "2"
                },
                {
                    "name": "Technical SPG",
                    "quantity": "1"
                }
            ]
        }
    },
    "Fallujah_Invasion_v3": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "1"
                },
                {
                    "name": "M-ATV CROWS M240",
                    "quantity": "1"
                },
                {
                    "name": "M1A2",
                    "quantity": "2"
                },
                {
                    "name": "M2A3",
                    "quantity": "2"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Logistics",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "Minsk 400",
                    "quantity": "9"
                },
                {
                    "name": "T-62",
                    "quantity": "1"
                },
                {
                    "name": "Technical Armored DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical Armored SPG-9",
                    "quantity": "1"
                },
                {
                    "name": "Technical Logistics INS",
                    "quantity": "4"
                },
                {
                    "name": "Technical Rocket Artillery",
                    "quantity": "1"
                },
                {
                    "name": "Technical Shielded DShK-M",
                    "quantity": "2"
                },
                {
                    "name": "Technical SPG",
                    "quantity": "1"
                }
            ]
        }
    },
    "Fallujah_RAAS_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "1"
                },
                {
                    "name": "M-ATV M240",
                    "quantity": "1"
                },
                {
                    "name": "M1126",
                    "quantity": "1"
                },
                {
                    "name": "M2A3",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-1",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "Simir Kord",
                    "quantity": "1"
                },
                {
                    "name": "Simir Kornet",
                    "quantity": "1"
                },
                {
                    "name": "Simir Logistics",
                    "quantity": "1"
                },
                {
                    "name": "Simir MG3",
                    "quantity": "1"
                },
                {
                    "name": "URAL 4320 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "URAL 4320 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "Fallujah_RAAS_v2": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "FV432",
                    "quantity": "2"
                },
                {
                    "name": "FV510 (Up-Armoured)",
                    "quantity": "2"
                },
                {
                    "name": "MAN HX Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 600,
                    "name": "FV4034",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "MAN HX Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2",
                    "quantity": "2"
                },
                {
                    "name": "Simir Kord",
                    "quantity": "2"
                },
                {
                    "name": "Simir Logistics",
                    "quantity": "1"
                },
                {
                    "name": "Simir MG3",
                    "quantity": "1"
                },
                {
                    "name": "URAL 4320 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 600,
                    "name": "T-72S",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "URAL 4320 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "Fallujah_RAAS_v3": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "2"
                },
                {
                    "name": "M2A3",
                    "quantity": "2"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 600,
                    "name": "M1A2",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "2"
                },
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "Simir Kord",
                    "quantity": "1"
                },
                {
                    "name": "Simir Kornet",
                    "quantity": "1"
                },
                {
                    "name": "Simir Logistics",
                    "quantity": "1"
                },
                {
                    "name": "Simir MG3",
                    "quantity": "1"
                },
                {
                    "name": "URAL 4320 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 600,
                    "name": "T-72S",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "URAL 4320 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "Fallujah_Skirmish_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV M240",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "Simir MG3",
                    "quantity": "1"
                },
                {
                    "name": "URAL 4320 Truck Logistics",
                    "quantity": "1"
                }
            ]
        }
    },
    "Fallujah_Skirmish_v2": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV M240",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "Minsk 400",
                    "quantity": "6"
                },
                {
                    "name": "Technical Logistics INS",
                    "quantity": "3"
                },
                {
                    "name": "Technical Shielded DShK-M",
                    "quantity": "1"
                }
            ]
        }
    },
    "Fallujah_TC_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "1"
                },
                {
                    "name": "M-ATV M240",
                    "quantity": "1"
                },
                {
                    "name": "M1126",
                    "quantity": "1"
                },
                {
                    "name": "M2A3",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "Simir Kord",
                    "quantity": "1"
                },
                {
                    "name": "Simir Kornet",
                    "quantity": "1"
                },
                {
                    "name": "Simir Logistics",
                    "quantity": "1"
                },
                {
                    "name": "Simir MG3",
                    "quantity": "1"
                },
                {
                    "name": "URAL 4320 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "URAL 4320 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "Fallujah_TC_v2": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "1"
                },
                {
                    "name": "M-ATV M240",
                    "quantity": "1"
                },
                {
                    "name": "M1126",
                    "quantity": "1"
                },
                {
                    "name": "M2A3",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "Simir Kord",
                    "quantity": "1"
                },
                {
                    "name": "Simir Kornet",
                    "quantity": "1"
                },
                {
                    "name": "Simir Logistics",
                    "quantity": "1"
                },
                {
                    "name": "Simir MG3",
                    "quantity": "1"
                },
                {
                    "name": "URAL 4320 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "URAL 4320 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "Fools_Road_AAS_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "3"
                },
                {
                    "name": "M-ATV CROWS",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Tigr-M Kord Open Top",
                    "quantity": "2"
                },
                {
                    "name": "Tigr-M Kord RWS",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "Fools_Road_AAS_v2": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "1"
                },
                {
                    "name": "M1126",
                    "quantity": "3"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BTR-80",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "2"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Tigr-M Kord RWS",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "Fools_Road_Destruction_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "BTR-80",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "2"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "T-72",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2 Spandrel",
                    "quantity": "1"
                },
                {
                    "name": "MT-LBM ZU23",
                    "quantity": "1"
                },
                {
                    "name": "Technical DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical Logistics MIL",
                    "quantity": "3"
                },
                {
                    "name": "Technical Rocket Artillery",
                    "quantity": "1"
                },
                {
                    "name": "Technical Shielded DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical SPG",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "Technical Transport MIL",
                    "quantity": "1"
                }
            ]
        }
    },
    "Fools_Road_Invasion_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "FV432",
                    "quantity": "1"
                },
                {
                    "name": "FV432 RWS",
                    "quantity": "1"
                },
                {
                    "name": "FV510",
                    "quantity": "2"
                },
                {
                    "name": "MAN HX Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "MAN HX Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-1",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "Technical DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical Logistics MIL",
                    "quantity": "3"
                },
                {
                    "name": "Technical SPG",
                    "quantity": "1"
                },
                {
                    "name": "Ural 375-D Truck Logistics",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "Minsk 400",
                    "quantity": "4"
                },
                {
                    "delay": 360,
                    "name": "Technical Transport MIL",
                    "quantity": "1"
                }
            ]
        }
    },
    "Fools_Road_RAAS_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "FV432",
                    "quantity": "2"
                },
                {
                    "name": "FV432 RWS",
                    "quantity": "2"
                },
                {
                    "name": "MAN HX Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "MAN HX Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "BTR-80",
                    "quantity": "1"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Tigr-M Kord Open Top",
                    "quantity": "1"
                },
                {
                    "name": "Tigr-M Kord RWS",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "Fools_Road_RAAS_v2": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "FV432",
                    "quantity": "2"
                },
                {
                    "name": "FV432 RWS",
                    "quantity": "2"
                },
                {
                    "name": "MAN HX Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "MAN HX Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Tigr-M Kord Open Top",
                    "quantity": "1"
                },
                {
                    "name": "Tigr-M Kord RWS",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "Fools_Road_RAAS_v3": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "FV432",
                    "quantity": "2"
                },
                {
                    "name": "FV432 RWS",
                    "quantity": "1"
                },
                {
                    "name": "FV510 (Up-Armoured)",
                    "quantity": "1"
                },
                {
                    "name": "MAN HX Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "MAN HX Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-1",
                    "quantity": "1"
                },
                {
                    "name": "MT-LBM 6MB",
                    "quantity": "1"
                },
                {
                    "name": "MT-LBM ZU23",
                    "quantity": "1"
                },
                {
                    "name": "Technical DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical Logistics MIL",
                    "quantity": "2"
                },
                {
                    "name": "Technical SPG",
                    "quantity": "1"
                },
                {
                    "name": "Ural 375-D Truck Logistics",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "Technical Transport MIL",
                    "quantity": "1"
                }
            ]
        }
    },
    "Fools_Road_Skirmish_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Tigr-M Kord Open Top",
                    "quantity": "1"
                }
            ]
        }
    },
    "Fools_Road_Skirmish_v2": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Tigr-M Kord Open Top",
                    "quantity": "1"
                }
            ]
        }
    },
    "Fools_Road_TC_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "BTR-80",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "1"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Tigr-M Kord Open Top",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-1 ZU23",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "Minsk 400",
                    "quantity": "2"
                },
                {
                    "name": "MT-LB",
                    "quantity": "1"
                },
                {
                    "name": "Technical DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical SPG",
                    "quantity": "1"
                },
                {
                    "name": "Ural 375-D Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "Technical Transport MIL",
                    "quantity": "1"
                }
            ]
        }
    },
    "Gorodok_AAS_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "2"
                },
                {
                    "name": "M1126",
                    "quantity": "2"
                },
                {
                    "name": "M2A3",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 600,
                    "name": "UH-60M",
                    "quantity": "2"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "2"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Tigr-M Kord Open Top",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 600,
                    "name": "Mi-8",
                    "quantity": "2"
                }
            ]
        }
    },
    "Gorodok_AAS_v2": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "FV432",
                    "quantity": "1"
                },
                {
                    "name": "FV432 RWS",
                    "quantity": "1"
                },
                {
                    "name": "FV510 (Up-Armoured)",
                    "quantity": "1"
                },
                {
                    "name": "MAN HX Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 1200,
                    "name": "FV4034",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "MAN HX Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 600,
                    "name": "UH-60M",
                    "quantity": "2"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "MT-LBM 6MA",
                    "quantity": "1"
                },
                {
                    "name": "Tigr-M Kord RWS",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 600,
                    "name": "Mi-8",
                    "quantity": "2"
                },
                {
                    "delay": 1200,
                    "name": "T-72",
                    "quantity": "1"
                }
            ]
        }
    },
    "Gorodok_Destruction_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "1"
                },
                {
                    "name": "M-ATV CROWS M240",
                    "quantity": "1"
                },
                {
                    "name": "M1126",
                    "quantity": "2"
                },
                {
                    "name": "M2A3",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 1800,
                    "name": "M2A3",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "2"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Tigr-M Kord RWS",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 1800,
                    "name": "T-72",
                    "quantity": "1"
                }
            ]
        }
    },
    "Gorodok_Insurgency_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "BTR-80",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "2"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "Mi-8",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-1",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2 Spandrel",
                    "quantity": "1"
                },
                {
                    "name": "MT-LBM 6MB",
                    "quantity": "1"
                },
                {
                    "name": "Technical DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical Rocket Artillery",
                    "quantity": "2"
                },
                {
                    "name": "Technical Shielded DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical SPG",
                    "quantity": "1"
                },
                {
                    "name": "Ural 375-D Truck Logistics",
                    "quantity": "4"
                },
                {
                    "delay": 360,
                    "name": "Ural 375-D Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "Gorodok_Invasion_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "1"
                },
                {
                    "name": "M-ATV TOW",
                    "quantity": "1"
                },
                {
                    "name": "M1126",
                    "quantity": "2"
                },
                {
                    "name": "M2A3",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "UH-60M",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "BTR-80",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "2"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "4"
                },
                {
                    "name": "Tigr-M Kord RWS",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Mi-8",
                    "quantity": "2"
                }
            ]
        }
    },
    "Gorodok_Invasion_v2": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "2"
                },
                {
                    "name": "BTR-80",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "1"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Tigr-M Kord Open Top",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Mi-8",
                    "quantity": "2"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-1",
                    "quantity": "1"
                },
                {
                    "name": "BMP-1 ZU23",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "Minsk 400",
                    "quantity": "1"
                },
                {
                    "name": "Technical Logistics MIL",
                    "quantity": "2"
                },
                {
                    "name": "Technical Rocket Artillery",
                    "quantity": "2"
                },
                {
                    "name": "Technical Shielded DShK-M",
                    "quantity": "2"
                },
                {
                    "name": "Technical SPG",
                    "quantity": "1"
                },
                {
                    "name": "Ural 375-D Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 1200,
                    "name": "T-62",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Ural 375-D Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "Gorodok_RAAS_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "1"
                },
                {
                    "name": "M1126",
                    "quantity": "2"
                },
                {
                    "name": "M2A3",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "UH-60M",
                    "quantity": "2"
                },
                {
                    "delay": 1200,
                    "name": "M1A2",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "2"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Mi-8",
                    "quantity": "2"
                },
                {
                    "name": "Tigr-M Kord RWS",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "T-72",
                    "quantity": "1"
                }
            ]
        }
    },
    "Gorodok_RAAS_v2": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "FV432",
                    "quantity": "1"
                },
                {
                    "name": "FV432 RWS",
                    "quantity": "1"
                },
                {
                    "name": "FV510",
                    "quantity": "1"
                },
                {
                    "name": "FV510 (Up-Armoured)",
                    "quantity": "1"
                },
                {
                    "name": "MAN HX Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "UH-60M",
                    "quantity": "2"
                },
                {
                    "delay": 1200,
                    "name": "FV4034",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "MAN HX Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "BTR-80",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "2"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Mi-8",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "T-72",
                    "quantity": "1"
                }
            ]
        }
    },
    "Gorodok_RAAS_v3": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "1"
                },
                {
                    "name": "M1126",
                    "quantity": "1"
                },
                {
                    "name": "M2A3",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 1200,
                    "name": "M1A2",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "UH-60M",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "1"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Tigr-M Kord Open Top",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "Mi-8",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "T-72",
                    "quantity": "1"
                }
            ]
        }
    },
    "Gorodok_RAAS_v4": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "1"
                },
                {
                    "name": "M-ATV TOW",
                    "quantity": "1"
                },
                {
                    "name": "M1126",
                    "quantity": "1"
                },
                {
                    "name": "M2A3",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 900,
                    "name": "M1A2",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2 Spandrel",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "1"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Tigr-M Kord Open Top",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 900,
                    "name": "T-72",
                    "quantity": "1"
                }
            ]
        }
    },
    "Gorodok_RAAS_v5": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "1"
                },
                {
                    "name": "M1126",
                    "quantity": "2"
                },
                {
                    "name": "M2A3",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "UH-60M",
                    "quantity": "2"
                },
                {
                    "delay": 1200,
                    "name": "M1A2",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "2"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Mi-8",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "T-72",
                    "quantity": "1"
                }
            ]
        }
    },
    "Gorodok_Skirmish_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "Ural 375-D Truck Logistics",
                    "quantity": "3"
                }
            ]
        }
    },
    "Gorodok_TC_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "2"
                },
                {
                    "name": "M1126",
                    "quantity": "1"
                },
                {
                    "name": "M2A3",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "UH-60M",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "1"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Mi-8",
                    "quantity": "1"
                },
                {
                    "name": "Tigr-M Kord Open Top",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "Kamdesh_AAS_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "FV432",
                    "quantity": "2"
                },
                {
                    "name": "FV432 RWS",
                    "quantity": "1"
                },
                {
                    "name": "FV510 (Up-Armoured)",
                    "quantity": "2"
                },
                {
                    "name": "MAN HX Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "MAN HX Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "2"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Tigr-M Kord RWS",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "Kamdesh_Insurgency_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "3"
                },
                {
                    "name": "M-ATV CROWS M240",
                    "quantity": "1"
                },
                {
                    "name": "M1126",
                    "quantity": "2"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "4"
                },
                {
                    "name": "M939 Truck Transport",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "Minsk 400",
                    "quantity": "16"
                },
                {
                    "name": "Technical Armored DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical Armored SPG-9",
                    "quantity": "1"
                },
                {
                    "name": "Technical DShK-M",
                    "quantity": "2"
                },
                {
                    "name": "Technical Logistics INS",
                    "quantity": "3"
                },
                {
                    "name": "Technical Rocket Artillery",
                    "quantity": "2"
                },
                {
                    "name": "Technical SPG",
                    "quantity": "1"
                },
                {
                    "name": "Technical Transport INS",
                    "quantity": "1"
                },
                {
                    "name": "Ural 375-D Truck Logistics",
                    "quantity": "1"
                },
                {
                    "name": "Ural 375-D Truck ZU23",
                    "quantity": "2"
                }
            ]
        }
    },
    "Kamdesh_Insurgency_v2": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "FV432",
                    "quantity": "1"
                },
                {
                    "name": "FV510",
                    "quantity": "1"
                },
                {
                    "name": "FV510 (Up-Armoured)",
                    "quantity": "2"
                },
                {
                    "name": "MAN HX Truck Logistics",
                    "quantity": "4"
                },
                {
                    "name": "MAN HX Truck Transport",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "MAN HX Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-1",
                    "quantity": "1"
                },
                {
                    "name": "Minsk 400",
                    "quantity": "14"
                },
                {
                    "name": "Technical Armored DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical Armored SPG-9",
                    "quantity": "1"
                },
                {
                    "name": "Technical DShK-M",
                    "quantity": "2"
                },
                {
                    "name": "Technical Logistics INS",
                    "quantity": "3"
                },
                {
                    "name": "Technical Rocket Artillery",
                    "quantity": "2"
                },
                {
                    "name": "Technical SPG",
                    "quantity": "1"
                },
                {
                    "name": "Ural 375-D Truck Logistics",
                    "quantity": "1"
                },
                {
                    "name": "Ural 375-D Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Technical Transport INS",
                    "quantity": "1"
                }
            ]
        }
    },
    "Kamdesh_Invasion_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "3"
                },
                {
                    "name": "M1126",
                    "quantity": "2"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 600,
                    "name": "UH-60M",
                    "quantity": "2"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BRDM-2",
                    "quantity": "3"
                },
                {
                    "name": "Minsk 400",
                    "quantity": "7"
                },
                {
                    "name": "MT-LBM ZU23",
                    "quantity": "1"
                },
                {
                    "name": "Technical Armored DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical DShK-M",
                    "quantity": "2"
                },
                {
                    "name": "Technical Logistics INS",
                    "quantity": "4"
                },
                {
                    "name": "Technical Shielded DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical SPG",
                    "quantity": "1"
                },
                {
                    "name": "Technical Transport INS",
                    "quantity": "1"
                },
                {
                    "name": "Ural 375-D Truck ZU23",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Technical Transport INS",
                    "quantity": "1"
                }
            ]
        }
    },
    "Kamdesh_Invasion_v2": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "FV432",
                    "quantity": "1"
                },
                {
                    "name": "FV432 RWS",
                    "quantity": "1"
                },
                {
                    "name": "FV510 (Up-Armoured)",
                    "quantity": "2"
                },
                {
                    "name": "MAN HX Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "MAN HX Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 600,
                    "name": "UH-60M",
                    "quantity": "2"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-1",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "Minsk 400",
                    "quantity": "6"
                },
                {
                    "name": "MT-LBM ZU23",
                    "quantity": "1"
                },
                {
                    "name": "Technical Armored SPG-9",
                    "quantity": "1"
                },
                {
                    "name": "Technical Logistics INS",
                    "quantity": "6"
                },
                {
                    "name": "Technical Shielded DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical SPG",
                    "quantity": "1"
                },
                {
                    "name": "Technical Transport INS",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "Technical Transport INS",
                    "quantity": "1"
                }
            ]
        }
    },
    "Kamdesh_Invasion_v3": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "3"
                },
                {
                    "name": "M1126",
                    "quantity": "1"
                },
                {
                    "name": "M1126 M240",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "UH-60M",
                    "quantity": "2"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "Minsk 400",
                    "quantity": "9"
                },
                {
                    "name": "Technical Armored DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical Armored SPG-9",
                    "quantity": "1"
                },
                {
                    "name": "Technical Logistics INS",
                    "quantity": "5"
                },
                {
                    "name": "Technical SPG",
                    "quantity": "1"
                },
                {
                    "name": "Ural 375-D Truck ZU23",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "BMP-1",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Technical Transport INS",
                    "quantity": "1"
                }
            ]
        }
    },
    "Kamdesh_RAAS_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "BMP-1",
                    "quantity": "1"
                },
                {
                    "name": "BMP-1 ZU23",
                    "quantity": "1"
                },
                {
                    "name": "Technical Logistics MIL",
                    "quantity": "2"
                },
                {
                    "name": "Technical Rocket Artillery",
                    "quantity": "2"
                },
                {
                    "name": "Technical Shielded DShK-M",
                    "quantity": "2"
                },
                {
                    "name": "Technical SPG",
                    "quantity": "1"
                },
                {
                    "name": "Ural 375-D Truck Logistics",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Ural 375-D Truck Logistics",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-1",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "Technical Armored DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical Armored SPG-9",
                    "quantity": "1"
                },
                {
                    "name": "Technical Logistics INS",
                    "quantity": "2"
                },
                {
                    "name": "Technical Rocket Artillery",
                    "quantity": "2"
                },
                {
                    "name": "Technical Shielded DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Ural 375-D Truck Logistics",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Ural 375-D Truck Logistics",
                    "quantity": "1"
                }
            ]
        }
    },
    "Kamdesh_RAAS_v2": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "FV432",
                    "quantity": "2"
                },
                {
                    "name": "FV432 RWS",
                    "quantity": "1"
                },
                {
                    "name": "FV510 (Up-Armoured)",
                    "quantity": "1"
                },
                {
                    "name": "MAN HX Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 1200,
                    "name": "FV4034",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "MAN HX Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "BTR-80",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "1"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "T-72",
                    "quantity": "1"
                }
            ]
        }
    },
    "Kamdesh_RAAS_v3": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "1"
                },
                {
                    "name": "M-ATV TOW",
                    "quantity": "1"
                },
                {
                    "name": "M1126",
                    "quantity": "1"
                },
                {
                    "name": "M2A3",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 1200,
                    "name": "M1A2",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "Simir Kord",
                    "quantity": "1"
                },
                {
                    "name": "Simir MG3",
                    "quantity": "2"
                },
                {
                    "name": "T-62",
                    "quantity": "1"
                },
                {
                    "name": "URAL 4320 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 1200,
                    "name": "T-72S",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "URAL 4320 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "Kamdesh_RAAS_v4": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "FV432",
                    "quantity": "1"
                },
                {
                    "name": "FV432 RWS",
                    "quantity": "1"
                },
                {
                    "name": "FV510 (Up-Armoured)",
                    "quantity": "2"
                },
                {
                    "name": "MAN HX Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "MAN HX Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-1",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "Simir Kord",
                    "quantity": "1"
                },
                {
                    "name": "Simir Kornet",
                    "quantity": "1"
                },
                {
                    "name": "URAL 4320 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "URAL 4320 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "Kamdesh_Skirmish_v1_Wargame": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "MAN HX Truck Logistics",
                    "quantity": "3"
                }
            ]
        }
    },
    "Kamdesh_TC_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "FV432",
                    "quantity": "1"
                },
                {
                    "name": "FV432 RWS",
                    "quantity": "1"
                },
                {
                    "name": "FV510",
                    "quantity": "2"
                },
                {
                    "name": "MAN HX Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "UH-60M",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "MAN HX Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "2"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Mi-8",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "Kamdesh_TC_v2": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "BMP-1",
                    "quantity": "1"
                },
                {
                    "name": "Minsk 400",
                    "quantity": "4"
                },
                {
                    "name": "Technical Logistics MIL",
                    "quantity": "4"
                },
                {
                    "name": "Technical Shielded DShK-M",
                    "quantity": "2"
                },
                {
                    "name": "Ural 375-D Truck Logistics",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Technical Transport INS",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-1",
                    "quantity": "1"
                },
                {
                    "name": "BMP-1 ZU23",
                    "quantity": "1"
                },
                {
                    "name": "Minsk 400",
                    "quantity": "4"
                },
                {
                    "name": "Technical Armored SPG-9",
                    "quantity": "1"
                },
                {
                    "name": "Technical DShK-M",
                    "quantity": "2"
                },
                {
                    "name": "Technical Logistics INS",
                    "quantity": "3"
                },
                {
                    "name": "Ural 375-D Truck Logistics",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Technical Transport INS",
                    "quantity": "1"
                }
            ]
        }
    },
    "Kohat_AAS_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "2"
                },
                {
                    "name": "M1126",
                    "quantity": "1"
                },
                {
                    "name": "M2A3",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "UH-60M",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-1",
                    "quantity": "1"
                },
                {
                    "name": "Mi-17",
                    "quantity": "2"
                },
                {
                    "name": "MT-LBM 6MA",
                    "quantity": "1"
                },
                {
                    "name": "Simir Kord",
                    "quantity": "1"
                },
                {
                    "name": "Simir MG3",
                    "quantity": "1"
                },
                {
                    "name": "URAL 4320 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "URAL 4320 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "Kohat_AAS_v2": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "3"
                },
                {
                    "name": "M-ATV CROWS",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "UH-60M",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Mi-8",
                    "quantity": "2"
                },
                {
                    "name": "Tigr-M Kord Open Top",
                    "quantity": "2"
                },
                {
                    "name": "Tigr-M Kord RWS",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "Kohat_Insurgency_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "2"
                },
                {
                    "name": "M-ATV M240",
                    "quantity": "1"
                },
                {
                    "name": "M1126",
                    "quantity": "1"
                },
                {
                    "name": "M2A3",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "UH-60M",
                    "quantity": "2"
                },
                {
                    "delay": 2400,
                    "name": "M-ATV",
                    "quantity": "1"
                },
                {
                    "delay": 2400,
                    "name": "M2A3",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-1",
                    "quantity": "1"
                },
                {
                    "name": "BMP-1 ZU23",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "Minsk 400",
                    "quantity": "8"
                },
                {
                    "name": "Technical Armored DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical Armored SPG-9",
                    "quantity": "1"
                },
                {
                    "name": "Technical DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical Logistics INS",
                    "quantity": "5"
                },
                {
                    "name": "Technical Rocket Artillery",
                    "quantity": "2"
                },
                {
                    "name": "Technical SPG",
                    "quantity": "1"
                },
                {
                    "delay": 900,
                    "name": "BRDM-2 Spandrel",
                    "quantity": "1"
                }
            ]
        }
    },
    "Kohat_Invasion_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "3"
                },
                {
                    "name": "M1126",
                    "quantity": "1"
                },
                {
                    "name": "M2A3",
                    "quantity": "2"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "UH-60M",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-1",
                    "quantity": "2"
                },
                {
                    "name": "Minsk 400",
                    "quantity": "14"
                },
                {
                    "name": "Technical Armored DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical Logistics INS",
                    "quantity": "6"
                },
                {
                    "name": "Technical Rocket Artillery",
                    "quantity": "3"
                },
                {
                    "name": "Technical SPG",
                    "quantity": "2"
                },
                {
                    "name": "Ural 375-D Truck Logistics",
                    "quantity": "1"
                },
                {
                    "name": "Ural 375-D Truck ZU23",
                    "quantity": "1"
                },
                {
                    "delay": 600,
                    "name": "T-62",
                    "quantity": "1"
                }
            ]
        }
    },
    "Kohat_Invasion_v2": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "3"
                },
                {
                    "name": "M2A3",
                    "quantity": "2"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "UH-60M",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "Minsk 400",
                    "quantity": "14"
                },
                {
                    "name": "Technical Armored DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical Logistics INS",
                    "quantity": "3"
                },
                {
                    "name": "Technical Rocket Artillery",
                    "quantity": "3"
                },
                {
                    "name": "Technical SPG",
                    "quantity": "1"
                },
                {
                    "name": "Ural 375-D Truck ZU23",
                    "quantity": "1"
                },
                {
                    "delay": 600,
                    "name": "BMP-1",
                    "quantity": "1"
                },
                {
                    "delay": 600,
                    "name": "T-62",
                    "quantity": "1"
                }
            ]
        }
    },
    "Kohat_RAAS_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "1"
                },
                {
                    "name": "M1126",
                    "quantity": "2"
                },
                {
                    "name": "M2A3",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "UH-60M",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "2"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Mi-8",
                    "quantity": "2"
                },
                {
                    "name": "Tigr-M Kord RWS",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "Kohat_RAAS_v2": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "FV432",
                    "quantity": "1"
                },
                {
                    "name": "FV432 RWS",
                    "quantity": "1"
                },
                {
                    "name": "FV510 (Up-Armoured)",
                    "quantity": "2"
                },
                {
                    "name": "MAN HX Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "UH-60M",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "MAN HX Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2",
                    "quantity": "2"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "1"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Mi-8",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "Kohat_RAAS_v3": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "BTR-80",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "1"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Mi-8",
                    "quantity": "1"
                },
                {
                    "name": "Tigr-M Kord Open Top",
                    "quantity": "1"
                },
                {
                    "name": "Tigr-M Kord RWS",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "Mi-17",
                    "quantity": "1"
                },
                {
                    "name": "MT-LBM 6MA",
                    "quantity": "1"
                },
                {
                    "name": "Simir Kord",
                    "quantity": "1"
                },
                {
                    "name": "Simir Kornet",
                    "quantity": "1"
                },
                {
                    "name": "Simir MG3",
                    "quantity": "1"
                },
                {
                    "name": "URAL 4320 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "Simir Logistics",
                    "quantity": "1"
                }
            ]
        }
    },
    "Kohat_RAAS_v4": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "FV432",
                    "quantity": "2"
                },
                {
                    "name": "FV432 RWS",
                    "quantity": "1"
                },
                {
                    "name": "FV510 (Up-Armoured)",
                    "quantity": "2"
                },
                {
                    "name": "MAN HX Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "UH-60M",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "MAN HX Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2 Spandrel",
                    "quantity": "1"
                },
                {
                    "name": "BTR-80",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "1"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Mi-8",
                    "quantity": "2"
                },
                {
                    "name": "Tigr-M Kord RWS",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "Kohat_Skirmish_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "MAN HX Truck Logistics",
                    "quantity": "3"
                }
            ]
        }
    },
    "Kohat_TC_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "BTR-80",
                    "quantity": "1"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Mi-8",
                    "quantity": "2"
                },
                {
                    "name": "Tigr-M Kord Open Top",
                    "quantity": "1"
                },
                {
                    "name": "Tigr-M Kord RWS",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "Mi-17",
                    "quantity": "2"
                },
                {
                    "name": "Simir Kord",
                    "quantity": "2"
                },
                {
                    "name": "Simir MG3",
                    "quantity": "3"
                },
                {
                    "name": "URAL 4320 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "URAL 4320 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "Kokan_Valley_AAS_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Tigr-M Kord Open Top",
                    "quantity": "3"
                },
                {
                    "name": "Tigr-M Kord RWS",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "Simir Kord",
                    "quantity": "3"
                },
                {
                    "name": "Simir MG3",
                    "quantity": "1"
                },
                {
                    "name": "URAL 4320 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "Simir Logistics",
                    "quantity": "1"
                }
            ]
        }
    },
    "Kokan_Valley_Insurgency_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "2"
                },
                {
                    "name": "M-ATV CROWS M240",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "Minsk 400",
                    "quantity": "7"
                },
                {
                    "name": "Technical Armored DShK-M",
                    "quantity": "3"
                },
                {
                    "name": "Technical DShK-M",
                    "quantity": "2"
                },
                {
                    "name": "Technical Logistics INS",
                    "quantity": "3"
                },
                {
                    "name": "Ural 375-D Truck ZU23",
                    "quantity": "1"
                }
            ]
        }
    },
    "Kokan_Valley_Invasion_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "BTR-80",
                    "quantity": "1"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Tigr-M Kord Open Top",
                    "quantity": "1"
                },
                {
                    "name": "Tigr-M Kord RWS",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "Minsk 400",
                    "quantity": "4"
                },
                {
                    "name": "Technical Armored DShK-M",
                    "quantity": "2"
                },
                {
                    "name": "Technical Armored SPG-9",
                    "quantity": "1"
                },
                {
                    "name": "Technical DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical Logistics INS",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "Technical Transport INS",
                    "quantity": "1"
                }
            ]
        }
    },
    "Kokan_Valley_RAAS_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "4"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "MT-LB",
                    "quantity": "1"
                },
                {
                    "name": "Simir Kord",
                    "quantity": "3"
                },
                {
                    "name": "Simir Kornet",
                    "quantity": "1"
                },
                {
                    "name": "URAL 4320 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "Simir Logistics",
                    "quantity": "1"
                }
            ]
        }
    },
    "Kokan_Valley_RAAS_v2": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Tigr-M Kord Open Top",
                    "quantity": "3"
                },
                {
                    "name": "Tigr-M Kord RWS",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "MT-LB",
                    "quantity": "1"
                },
                {
                    "name": "Simir Kord",
                    "quantity": "3"
                },
                {
                    "name": "Simir MG3",
                    "quantity": "1"
                },
                {
                    "name": "URAL 4320 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "Simir Logistics",
                    "quantity": "1"
                }
            ]
        }
    },
    "Kokan_Valley_Skirmish_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "Technical DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical Logistics MIL",
                    "quantity": "2"
                },
                {
                    "name": "Ural 375-D Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "Technical Armored DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical Logistics INS",
                    "quantity": "3"
                },
                {
                    "name": "Technical Transport INS",
                    "quantity": "1"
                }
            ]
        }
    },
    "Kokan_Valley_TC_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "3"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "Simir Kord",
                    "quantity": "3"
                },
                {
                    "name": "Simir Kornet",
                    "quantity": "1"
                },
                {
                    "name": "Simir Logistics",
                    "quantity": "1"
                },
                {
                    "name": "Simir MG3",
                    "quantity": "1"
                },
                {
                    "name": "URAL 4320 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "Simir Logistics",
                    "quantity": "1"
                }
            ]
        }
    },
    "Lashkar_Valley_AAS_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "FV432 RWS",
                    "quantity": "1"
                },
                {
                    "name": "FV510",
                    "quantity": "1"
                },
                {
                    "name": "FV510 (Up-Armoured)",
                    "quantity": "1"
                },
                {
                    "name": "MAN HX Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "UH-60M",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "MAN HX Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "BTR-80",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "1"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Mi-8",
                    "quantity": "2"
                },
                {
                    "name": "Tigr-M Kord Open Top",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "Lashkar_Valley_AAS_v2": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "2"
                },
                {
                    "name": "M1126",
                    "quantity": "1"
                },
                {
                    "name": "M2A3",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "UH-60M",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "Mi-17",
                    "quantity": "2"
                },
                {
                    "name": "MT-LBM 6MA",
                    "quantity": "1"
                },
                {
                    "name": "Simir Kord",
                    "quantity": "2"
                },
                {
                    "name": "URAL 4320 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "URAL 4320 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "Lashkar_Valley_Insurgency_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "3"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "4"
                },
                {
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                },
                {
                    "name": "UH-60M",
                    "quantity": "2"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-1 ZU23",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2",
                    "quantity": "2"
                },
                {
                    "name": "Minsk 400",
                    "quantity": "5"
                },
                {
                    "name": "Technical Armored DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical Armored SPG-9",
                    "quantity": "1"
                },
                {
                    "name": "Technical DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical Logistics INS",
                    "quantity": "7"
                },
                {
                    "name": "Technical Rocket Artillery",
                    "quantity": "3"
                },
                {
                    "name": "Technical Shielded DShK-M",
                    "quantity": "2"
                },
                {
                    "name": "Ural 375-D Truck ZU23",
                    "quantity": "1"
                }
            ]
        }
    },
    "Lashkar_Valley_Invasion_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "2"
                },
                {
                    "name": "M1126",
                    "quantity": "1"
                },
                {
                    "name": "M2A3",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "UH-60M",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "Minsk 400",
                    "quantity": "6"
                },
                {
                    "name": "MT-LB",
                    "quantity": "1"
                },
                {
                    "name": "Technical Armored SPG-9",
                    "quantity": "1"
                },
                {
                    "name": "Technical Logistics INS",
                    "quantity": "8"
                },
                {
                    "name": "Technical Rocket Artillery",
                    "quantity": "2"
                },
                {
                    "name": "Technical Shielded DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Ural 375-D Truck Logistics",
                    "quantity": "1"
                },
                {
                    "name": "Ural 375-D Truck ZU23",
                    "quantity": "1"
                },
                {
                    "delay": 600,
                    "name": "BMP-1",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Minsk 400",
                    "quantity": "3"
                }
            ]
        }
    },
    "Lashkar_Valley_RAAS_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "2"
                },
                {
                    "name": "M-ATV CROWS",
                    "quantity": "1"
                },
                {
                    "name": "M-ATV M240",
                    "quantity": "1"
                },
                {
                    "name": "M1126",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "UH-60M",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "Mi-17",
                    "quantity": "2"
                },
                {
                    "name": "MT-LBM 6MA",
                    "quantity": "1"
                },
                {
                    "name": "Simir Kord",
                    "quantity": "2"
                },
                {
                    "name": "Simir Kornet",
                    "quantity": "1"
                },
                {
                    "name": "URAL 4320 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "URAL 4320 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "Lashkar_Valley_Skirmish_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "Minsk 400",
                    "quantity": "3"
                },
                {
                    "name": "Technical Logistics MIL",
                    "quantity": "3"
                },
                {
                    "name": "Technical Shielded DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Ural 375-D Truck Logistics",
                    "quantity": "1"
                },
                {
                    "name": "Ural 375-D Truck ZU23",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "Minsk 400",
                    "quantity": "3"
                },
                {
                    "name": "Technical Armored DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical Logistics INS",
                    "quantity": "3"
                },
                {
                    "name": "Ural 375-D Truck Logistics",
                    "quantity": "1"
                },
                {
                    "name": "Ural 375-D Truck ZU23",
                    "quantity": "1"
                }
            ]
        }
    },
    "Lashkar_Valley_TC_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "FV432",
                    "quantity": "1"
                },
                {
                    "name": "FV432 RWS",
                    "quantity": "1"
                },
                {
                    "name": "FV510 (Up-Armoured)",
                    "quantity": "1"
                },
                {
                    "name": "MAN HX Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "UH-60M",
                    "quantity": "2"
                },
                {
                    "delay": 1200,
                    "name": "FV4034",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "MAN HX Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-1",
                    "quantity": "1"
                },
                {
                    "name": "Mi-17",
                    "quantity": "2"
                },
                {
                    "name": "MT-LBM 6MA",
                    "quantity": "1"
                },
                {
                    "name": "Simir MG3",
                    "quantity": "1"
                },
                {
                    "name": "URAL 4320 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 1200,
                    "name": "T-72S",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "URAL 4320 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "Lashkar_Valley_TC_v2": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "1"
                },
                {
                    "name": "M1126",
                    "quantity": "1"
                },
                {
                    "name": "M2A3",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "UH-60M",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "1"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Mi-8",
                    "quantity": "2"
                },
                {
                    "name": "Tigr-M Kord Open Top",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "LogarValley_AAS_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "2"
                },
                {
                    "name": "M-ATV M240",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "Simir Kord",
                    "quantity": "2"
                },
                {
                    "name": "Simir Kornet",
                    "quantity": "1"
                },
                {
                    "name": "Simir MG3",
                    "quantity": "1"
                },
                {
                    "name": "URAL 4320 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "Simir Logistics",
                    "quantity": "1"
                }
            ]
        }
    },
    "LogarValley_AAS_v2": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "Simir Kord",
                    "quantity": "2"
                },
                {
                    "name": "Simir Logistics",
                    "quantity": "2"
                },
                {
                    "name": "URAL 4320 Truck Logistics",
                    "quantity": "3"
                }
            ]
        }
    },
    "LogarValley_Insurgency_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Tigr-M Kord Open Top",
                    "quantity": "2"
                },
                {
                    "name": "Tigr-M Kord RWS",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "Minsk 400",
                    "quantity": "5"
                },
                {
                    "name": "Technical DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical Logistics INS",
                    "quantity": "4"
                },
                {
                    "name": "Technical Shielded DShK-M",
                    "quantity": "2"
                },
                {
                    "name": "Technical SPG",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Technical Transport INS",
                    "quantity": "1"
                }
            ]
        }
    },
    "LogarValley_RAAS_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Tigr-M Kord Open Top",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "Simir Kord",
                    "quantity": "3"
                },
                {
                    "name": "Simir MG3",
                    "quantity": "1"
                },
                {
                    "name": "URAL 4320 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "Simir Logistics",
                    "quantity": "1"
                }
            ]
        }
    },
    "LogarValley_Skirmish_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "Technical Shielded DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Ural 375-D Truck Logistics",
                    "quantity": "3"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "Technical Shielded DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Ural 375-D Truck Logistics",
                    "quantity": "3"
                }
            ]
        }
    },
    "LogarValley_TC_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "2"
                },
                {
                    "name": "M-ATV M240",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "Simir Kord",
                    "quantity": "2"
                },
                {
                    "name": "Simir Kornet",
                    "quantity": "1"
                },
                {
                    "name": "Simir MG3",
                    "quantity": "1"
                },
                {
                    "name": "URAL 4320 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "Simir Logistics",
                    "quantity": "1"
                }
            ]
        }
    },
    "Mestia_AAS_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "BTR-80",
                    "quantity": "2"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Tigr-M Kord Open Top",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-1 ZU23",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "Minsk 400",
                    "quantity": "3"
                },
                {
                    "name": "Technical DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical Logistics MIL",
                    "quantity": "3"
                },
                {
                    "name": "Ural 375-D Truck ZU23",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Technical Transport MIL",
                    "quantity": "1"
                }
            ]
        }
    },
    "Mestia_Invasion_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "BTR-80",
                    "quantity": "2"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "1"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Tigr-M Kord Open Top",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "MT-LBM ZU23",
                    "quantity": "1"
                },
                {
                    "name": "Technical DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical Logistics MIL",
                    "quantity": "2"
                },
                {
                    "name": "Technical Rocket Artillery",
                    "quantity": "2"
                },
                {
                    "name": "Technical SPG",
                    "quantity": "1"
                },
                {
                    "name": "Ural 375-D Truck Logistics",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "Technical Transport MIL",
                    "quantity": "1"
                }
            ]
        }
    },
    "Mestia_Invasion_v2": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "3"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "Technical DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical Logistics MIL",
                    "quantity": "3"
                },
                {
                    "name": "Technical Rocket Artillery",
                    "quantity": "2"
                },
                {
                    "name": "Technical Shielded DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical Transport MIL",
                    "quantity": "1"
                },
                {
                    "name": "Ural 375-D Truck Logistics",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Technical Transport MIL",
                    "quantity": "1"
                }
            ]
        }
    },
    "Mestia_RAAS_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "3"
                },
                {
                    "name": "M1126",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-1 ZU23",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "Minsk 400",
                    "quantity": "2"
                },
                {
                    "name": "Technical DShK-M",
                    "quantity": "2"
                },
                {
                    "name": "Technical Logistics MIL",
                    "quantity": "2"
                },
                {
                    "name": "Ural 375-D Truck Logistics",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "Technical Transport MIL",
                    "quantity": "1"
                }
            ]
        }
    },
    "Mestia_Skirmish_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "Minsk 400",
                    "quantity": "1"
                },
                {
                    "name": "Technical Logistics MIL",
                    "quantity": "2"
                },
                {
                    "name": "Technical Transport MIL",
                    "quantity": "2"
                },
                {
                    "name": "Ural 375-D Truck Logistics",
                    "quantity": "1"
                }
            ]
        }
    },
    "Mestia_TC_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "1"
                },
                {
                    "name": "M1126",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BTR-82A",
                    "quantity": "1"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Tigr-M Kord Open Top",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "Mutaha_AAS_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "1"
                },
                {
                    "name": "M1126",
                    "quantity": "1"
                },
                {
                    "name": "M2A3",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "UH-60M",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "M1A2",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "1"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Mi-8",
                    "quantity": "1"
                },
                {
                    "name": "Tigr-M Kord RWS",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "T-72",
                    "quantity": "1"
                }
            ]
        }
    },
    "Mutaha_Invasion_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "FV432",
                    "quantity": "1"
                },
                {
                    "name": "FV432 RWS",
                    "quantity": "1"
                },
                {
                    "name": "FV510",
                    "quantity": "1"
                },
                {
                    "name": "FV510 (Up-Armoured)",
                    "quantity": "2"
                },
                {
                    "name": "MAN HX Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 1200,
                    "name": "FV4034",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "MAN HX Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 600,
                    "name": "UH-60M",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-1",
                    "quantity": "1"
                },
                {
                    "name": "BMP-1 ZU23",
                    "quantity": "1"
                },
                {
                    "name": "Minsk 400",
                    "quantity": "8"
                },
                {
                    "name": "Technical Armored DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical Armored SPG-9",
                    "quantity": "1"
                },
                {
                    "name": "Technical DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical Logistics INS",
                    "quantity": "3"
                },
                {
                    "name": "Ural 375-D Truck Logistics",
                    "quantity": "1"
                },
                {
                    "name": "Ural 375-D Truck ZU23",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "T-62",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Technical Transport INS",
                    "quantity": "1"
                }
            ]
        }
    },
    "Mutaha_RAAS_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "1"
                },
                {
                    "name": "M-ATV M240",
                    "quantity": "1"
                },
                {
                    "name": "M1126",
                    "quantity": "1"
                },
                {
                    "name": "M2A3",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 1200,
                    "name": "M1A2",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "UH-60M",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-1",
                    "quantity": "1"
                },
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "MT-LBM 6MA",
                    "quantity": "1"
                },
                {
                    "name": "Simir MG3",
                    "quantity": "1"
                },
                {
                    "name": "URAL 4320 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "Mi-17",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "T-72S",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "URAL 4320 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "Mutaha_Skirmish_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "4"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "URAL 4320 Truck Logistics",
                    "quantity": "4"
                }
            ]
        }
    },
    "Mutaha_TC_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "1"
                },
                {
                    "name": "M-ATV CROWS",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BTR-80",
                    "quantity": "1"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Tigr-M Kord Open Top",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "Mutaha_TC_v2": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "1"
                },
                {
                    "name": "M1126",
                    "quantity": "2"
                },
                {
                    "name": "M2A3",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "UH-60M",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "M1A2",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-1",
                    "quantity": "1"
                },
                {
                    "name": "Mi-17",
                    "quantity": "1"
                },
                {
                    "name": "MT-LBM 6MA",
                    "quantity": "1"
                },
                {
                    "name": "Simir Kord",
                    "quantity": "1"
                },
                {
                    "name": "Simir Kornet",
                    "quantity": "1"
                },
                {
                    "name": "URAL 4320 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 1200,
                    "name": "T-72S",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "URAL 4320 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "Narva_AAS_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "2"
                },
                {
                    "name": "M1126",
                    "quantity": "3"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BTR-80",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "2"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Tigr-M Kord Open Top",
                    "quantity": "1"
                },
                {
                    "name": "Tigr-M Kord RWS",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "Narva_AAS_v2": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "FV432",
                    "quantity": "1"
                },
                {
                    "name": "FV432 RWS",
                    "quantity": "1"
                },
                {
                    "name": "FV510",
                    "quantity": "1"
                },
                {
                    "name": "FV510 (Up-Armoured)",
                    "quantity": "1"
                },
                {
                    "name": "MAN HX Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "MAN HX Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "2"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "Narva_AAS_v3": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "1"
                },
                {
                    "name": "M-ATV CROWS",
                    "quantity": "1"
                },
                {
                    "name": "M1126",
                    "quantity": "3"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "3"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "MT-LBM 6MA",
                    "quantity": "1"
                },
                {
                    "name": "Tigr-M Kord RWS",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "Narva_Destruction_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "1"
                },
                {
                    "name": "M-ATV CROWS M240",
                    "quantity": "1"
                },
                {
                    "name": "M1126",
                    "quantity": "2"
                },
                {
                    "name": "M2A3",
                    "quantity": "2"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BTR-80",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "2"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "T-72",
                    "quantity": "1"
                },
                {
                    "name": "Tigr-M Kord RWS",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "Narva_Invasion_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "2"
                },
                {
                    "name": "M1126",
                    "quantity": "2"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 900,
                    "name": "M2A3",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "BTR-80",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "2"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Tigr-M Kord Open Top",
                    "quantity": "1"
                },
                {
                    "name": "Tigr-M Kord RWS",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "Narva_Invasion_v2": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "FV432 RWS",
                    "quantity": "1"
                },
                {
                    "name": "FV510",
                    "quantity": "2"
                },
                {
                    "name": "FV510 (Up-Armoured)",
                    "quantity": "2"
                },
                {
                    "name": "MAN HX Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 1200,
                    "name": "FV4034",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "MAN HX Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "2"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Tigr-M Kord Open Top",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "T-72",
                    "quantity": "1"
                }
            ]
        }
    },
    "Narva_RAAS_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "2"
                },
                {
                    "name": "M1126",
                    "quantity": "2"
                },
                {
                    "name": "M2A3",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 1200,
                    "name": "M1A2",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "BTR-80",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "2"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Tigr-M Kord RWS",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "T-72",
                    "quantity": "1"
                }
            ]
        }
    },
    "Narva_Skirmish_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Tigr-M Kord Open Top",
                    "quantity": "1"
                }
            ]
        }
    },
    "Narva_TA_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "BTR-82A",
                    "quantity": "2"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BTR-82A",
                    "quantity": "2"
                }
            ]
        }
    },
    "Narva_TC_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "1"
                },
                {
                    "name": "M-ATV CROWS",
                    "quantity": "1"
                },
                {
                    "name": "M1126",
                    "quantity": "2"
                },
                {
                    "name": "M2A3",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "BTR-80",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "2"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Tigr-M Kord RWS",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "Narva_TC_v2": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "2"
                },
                {
                    "name": "M1126",
                    "quantity": "2"
                },
                {
                    "name": "M2A3",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 1200,
                    "name": "M1A2",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "BTR-80",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "2"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "T-72",
                    "quantity": "1"
                }
            ]
        }
    },
    "Skorpo_AAS_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "1"
                },
                {
                    "name": "M1126",
                    "quantity": "1"
                },
                {
                    "name": "M2A3",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "UH-60M",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "1"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Mi-8",
                    "quantity": "2"
                },
                {
                    "name": "Tigr-M Kord Open Top",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "Skorpo_Invasion_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "2"
                },
                {
                    "name": "M1126",
                    "quantity": "2"
                },
                {
                    "name": "M1A2",
                    "quantity": "2"
                },
                {
                    "name": "UH-60M",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Logistics",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-1",
                    "quantity": "1"
                },
                {
                    "name": "BMP-1 ZU23",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2 Spandrel",
                    "quantity": "1"
                },
                {
                    "name": "Technical Logistics MIL",
                    "quantity": "2"
                },
                {
                    "name": "Technical Rocket Artillery",
                    "quantity": "1"
                },
                {
                    "name": "Technical Shielded DShK-M",
                    "quantity": "4"
                },
                {
                    "name": "Ural 375-D Truck Logistics",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "Technical Logistics MIL",
                    "quantity": "1"
                }
            ]
        }
    },
    "Skorpo_Invasion_v2": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "1"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "4"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "Technical Logistics MIL",
                    "quantity": "4"
                },
                {
                    "delay": 360,
                    "name": "Technical DShK-M",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Technical Transport MIL",
                    "quantity": "1"
                }
            ]
        }
    },
    "Skorpo_RAAS_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "1"
                },
                {
                    "name": "M1126",
                    "quantity": "1"
                },
                {
                    "name": "M2A3",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "UH-60M",
                    "quantity": "2"
                },
                {
                    "delay": 1200,
                    "name": "M1A2",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "1"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Mi-8",
                    "quantity": "2"
                },
                {
                    "name": "Tigr-M Kord Open Top",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "T-72",
                    "quantity": "1"
                }
            ]
        }
    },
    "Skorpo_RAAS_v2": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "2"
                },
                {
                    "name": "M1126",
                    "quantity": "1"
                },
                {
                    "name": "M2A3",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "UH-60M",
                    "quantity": "2"
                },
                {
                    "delay": 1200,
                    "name": "M1A2",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "1"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Mi-8",
                    "quantity": "2"
                },
                {
                    "name": "Tigr-M Kord RWS",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "T-72",
                    "quantity": "1"
                }
            ]
        }
    },
    "Skorpo_RAAS_v3": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "2"
                },
                {
                    "name": "M1126",
                    "quantity": "1"
                },
                {
                    "name": "M2A3",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "4"
                },
                {
                    "delay": 1200,
                    "name": "M-ATV TOW",
                    "quantity": "1"
                },
                {
                    "delay": 1500,
                    "name": "M1A2",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BTR-80",
                    "quantity": "1"
                },
                {
                    "name": "MT-LBM 6MB",
                    "quantity": "1"
                },
                {
                    "name": "Technical Logistics MIL",
                    "quantity": "2"
                },
                {
                    "name": "Technical Rocket Artillery",
                    "quantity": "2"
                },
                {
                    "name": "Technical Transport MIL",
                    "quantity": "2"
                },
                {
                    "name": "Ural 375-D Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 1200,
                    "name": "BRDM-2 Spandrel",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "T-62",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Technical Transport MIL",
                    "quantity": "1"
                }
            ]
        }
    },
    "Skorpo_RAAS_v4": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "2"
                },
                {
                    "name": "M1126",
                    "quantity": "1"
                },
                {
                    "name": "M1126 M240",
                    "quantity": "1"
                },
                {
                    "name": "M2A3",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "UH-60M",
                    "quantity": "2"
                },
                {
                    "delay": 1200,
                    "name": "M1A2",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "BTR-80",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "1"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Mi-8",
                    "quantity": "2"
                },
                {
                    "name": "Tigr-M Kord Open Top",
                    "quantity": "1"
                },
                {
                    "name": "Tigr-M Kord RWS",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "T-72",
                    "quantity": "1"
                }
            ]
        }
    },
    "Skorpo_Skirmish_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                }
            ]
        }
    },
    "Skorpo_TC_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "2"
                },
                {
                    "name": "M1126",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "UH-60M",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BTR-82A",
                    "quantity": "1"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Mi-8",
                    "quantity": "1"
                },
                {
                    "name": "Tigr-M Kord Open Top",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "Skorpo_TC_v2": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "2"
                },
                {
                    "name": "M1126",
                    "quantity": "2"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "UH-60M",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "2"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Mi-8",
                    "quantity": "2"
                },
                {
                    "name": "Tigr-M Kord Open Top",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "Skorpo_TC_v3": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "2"
                },
                {
                    "name": "M1126",
                    "quantity": "2"
                },
                {
                    "name": "M2A3",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "UH-60M",
                    "quantity": "2"
                },
                {
                    "delay": 1200,
                    "name": "M1A2",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "2"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Mi-8",
                    "quantity": "2"
                },
                {
                    "name": "Tigr-M Kord Open Top",
                    "quantity": "1"
                },
                {
                    "name": "Tigr-M Kord RWS",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "T-72",
                    "quantity": "1"
                }
            ]
        }
    },
    "Sumari_AAS_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "FV432",
                    "quantity": "1"
                },
                {
                    "name": "MAN HX Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "MAN HX Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "Simir Kord",
                    "quantity": "2"
                },
                {
                    "name": "Simir Logistics",
                    "quantity": "2"
                },
                {
                    "name": "Simir MG3",
                    "quantity": "1"
                },
                {
                    "name": "URAL 4320 Truck Logistics",
                    "quantity": "3"
                }
            ]
        }
    },
    "Sumari_Insurgency_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "2"
                },
                {
                    "name": "M-ATV CROWS M240",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "Minsk 400",
                    "quantity": "3"
                },
                {
                    "name": "Technical Armored DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical Armored SPG-9",
                    "quantity": "1"
                },
                {
                    "name": "Technical Logistics INS",
                    "quantity": "3"
                },
                {
                    "name": "Technical Shielded DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical Transport INS",
                    "quantity": "3"
                },
                {
                    "delay": 1200,
                    "name": "Technical Armored SPG-9",
                    "quantity": "1"
                }
            ]
        }
    },
    "Sumari_Invasion_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "3"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "Minsk 400",
                    "quantity": "8"
                },
                {
                    "name": "Technical Armored DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical Logistics INS",
                    "quantity": "4"
                },
                {
                    "name": "Technical Shielded DShK-M",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Technical Transport INS",
                    "quantity": "1"
                }
            ]
        }
    },
    "Sumari_RAAS_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV M240",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "Simir Kord",
                    "quantity": "1"
                },
                {
                    "name": "Simir Logistics",
                    "quantity": "2"
                },
                {
                    "name": "Simir MG3",
                    "quantity": "1"
                },
                {
                    "name": "URAL 4320 Truck Logistics",
                    "quantity": "3"
                }
            ]
        }
    },
    "Sumari_RAAS_v2": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "MAN HX Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "MAN HX Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "Simir Logistics",
                    "quantity": "2"
                },
                {
                    "name": "URAL 4320 Truck Logistics",
                    "quantity": "3"
                }
            ]
        }
    },
    "Sumari_Skirmish_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "Technical DShK-M",
                    "quantity": "2"
                },
                {
                    "name": "Technical Logistics MIL",
                    "quantity": "3"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "Technical Armored DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical Logistics INS",
                    "quantity": "3"
                }
            ]
        }
    },
    "Sumari_TC_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV M240",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "Simir Kord",
                    "quantity": "1"
                },
                {
                    "name": "Simir Logistics",
                    "quantity": "2"
                },
                {
                    "name": "Simir MG3",
                    "quantity": "1"
                },
                {
                    "name": "URAL 4320 Truck Logistics",
                    "quantity": "3"
                }
            ]
        }
    },
    "Tallil_Outskirts_AAS_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "1"
                },
                {
                    "name": "M-ATV TOW",
                    "quantity": "1"
                },
                {
                    "name": "M1126",
                    "quantity": "2"
                },
                {
                    "name": "M2A3",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "UH-60M",
                    "quantity": "2"
                },
                {
                    "delay": 1200,
                    "name": "M1A2",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2 Spandrel",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "2"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Mi-8",
                    "quantity": "2"
                },
                {
                    "name": "Tigr-M Kord Open Top",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "T-72",
                    "quantity": "2"
                }
            ]
        }
    },
    "Tallil_Outskirts_AAS_v2": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "2"
                },
                {
                    "name": "M-ATV TOW",
                    "quantity": "1"
                },
                {
                    "name": "M1126",
                    "quantity": "2"
                },
                {
                    "name": "M2A3",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "UH-60M",
                    "quantity": "2"
                },
                {
                    "delay": 1200,
                    "name": "M1A2",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-1",
                    "quantity": "1"
                },
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "Mi-17",
                    "quantity": "2"
                },
                {
                    "name": "MT-LBM 6MA",
                    "quantity": "1"
                },
                {
                    "name": "Simir Kord",
                    "quantity": "2"
                },
                {
                    "name": "Simir Kornet",
                    "quantity": "1"
                },
                {
                    "name": "Simir Logistics",
                    "quantity": "2"
                },
                {
                    "name": "URAL 4320 Truck Logistics",
                    "quantity": "2"
                },
                {
                    "delay": 1200,
                    "name": "T-72S",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "URAL 4320 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "Tallil_Outskirts_Invasion_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "1"
                },
                {
                    "name": "M1126",
                    "quantity": "1"
                },
                {
                    "name": "M1A2",
                    "quantity": "2"
                },
                {
                    "name": "M2A3",
                    "quantity": "2"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "UH-60M",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2 Spandrel",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "2"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Tigr-M Kord Open Top",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 300,
                    "name": "Mi-8",
                    "quantity": "2"
                },
                {
                    "delay": 300,
                    "name": "T-72",
                    "quantity": "2"
                }
            ]
        }
    },
    "Tallil_Outskirts_Invasion_v2": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2 Spandrel",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "2"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Tigr-M Kord RWS",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-1",
                    "quantity": "1"
                },
                {
                    "name": "BMP-1 ZU23",
                    "quantity": "1"
                },
                {
                    "name": "Minsk 400",
                    "quantity": "3"
                },
                {
                    "name": "Technical Armored DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical Armored SPG-9",
                    "quantity": "1"
                },
                {
                    "name": "Technical Logistics INS",
                    "quantity": "3"
                },
                {
                    "name": "Technical SPG",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "T-62",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Technical Transport INS",
                    "quantity": "1"
                }
            ]
        }
    },
    "Tallil_Outskirts_Invasion_v3": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV M240",
                    "quantity": "2"
                },
                {
                    "name": "M1126",
                    "quantity": "2"
                },
                {
                    "name": "M2A3",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "UH-60M",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-1",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "Technical Armored DShK-M",
                    "quantity": "3"
                },
                {
                    "name": "Technical Armored SPG-9",
                    "quantity": "2"
                },
                {
                    "name": "Technical Logistics INS",
                    "quantity": "3"
                },
                {
                    "name": "Technical Rocket Artillery",
                    "quantity": "2"
                },
                {
                    "name": "Ural 375-D Truck Logistics",
                    "quantity": "2"
                },
                {
                    "name": "Ural 375-D Truck ZU23",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Technical Transport INS",
                    "quantity": "1"
                }
            ]
        }
    },
    "Tallil_Outskirts_RAAS_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "1"
                },
                {
                    "name": "M-ATV TOW",
                    "quantity": "1"
                },
                {
                    "name": "M1126",
                    "quantity": "2"
                },
                {
                    "name": "M2A3",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "UH-60M",
                    "quantity": "2"
                },
                {
                    "delay": 1200,
                    "name": "M1A2",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2 Spandrel",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "2"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Mi-8",
                    "quantity": "2"
                },
                {
                    "name": "Tigr-M Kord Open Top",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "T-72",
                    "quantity": "2"
                }
            ]
        }
    },
    "Tallil_Outskirts_RAAS_v2": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "1"
                },
                {
                    "name": "M-ATV CROWS",
                    "quantity": "1"
                },
                {
                    "name": "M-ATV TOW",
                    "quantity": "1"
                },
                {
                    "name": "M1126",
                    "quantity": "2"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "UH-60M",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2 Spandrel",
                    "quantity": "1"
                },
                {
                    "name": "Mi-17",
                    "quantity": "2"
                },
                {
                    "name": "MT-LB",
                    "quantity": "1"
                },
                {
                    "name": "MT-LBM 6MA",
                    "quantity": "1"
                },
                {
                    "name": "Simir Kord",
                    "quantity": "1"
                },
                {
                    "name": "Simir Kornet",
                    "quantity": "1"
                },
                {
                    "name": "Simir Logistics",
                    "quantity": "2"
                },
                {
                    "name": "Simir MG3",
                    "quantity": "1"
                },
                {
                    "name": "URAL 4320 Truck Logistics",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "URAL 4320 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "Tallil_Outskirts_RAAS_v3": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "1"
                },
                {
                    "name": "M-ATV TOW",
                    "quantity": "1"
                },
                {
                    "name": "M1126",
                    "quantity": "2"
                },
                {
                    "name": "M2A3",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "UH-60M",
                    "quantity": "2"
                },
                {
                    "delay": 1200,
                    "name": "M1A2",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2 Spandrel",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "2"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Mi-8",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "T-72",
                    "quantity": "1"
                }
            ]
        }
    },
    "Tallil_Outskirts_RAAS_v4": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "FV432",
                    "quantity": "2"
                },
                {
                    "name": "FV510 (Up-Armoured)",
                    "quantity": "2"
                },
                {
                    "name": "MAN HX Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "UH-60M",
                    "quantity": "2"
                },
                {
                    "delay": 1200,
                    "name": "FV4034",
                    "quantity": "2"
                },
                {
                    "delay": 1200,
                    "name": "FV510 (Up-Armoured)",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "MAN HX Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2 Spandrel",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "2"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Mi-8",
                    "quantity": "2"
                },
                {
                    "delay": 1200,
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "T-72",
                    "quantity": "2"
                }
            ]
        }
    },
    "Tallil_Outskirts_Skirmish_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                }
            ]
        }
    },
    "Tallil_Outskirts_Skirmish_v2": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                }
            ]
        }
    },
    "Tallil_Outskirts_Skirmish_v3": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "Minsk 400",
                    "quantity": "4"
                },
                {
                    "name": "Technical Logistics MIL",
                    "quantity": "3"
                },
                {
                    "name": "Technical Rocket Artillery",
                    "quantity": "1"
                },
                {
                    "name": "Technical Shielded DShK-M",
                    "quantity": "3"
                },
                {
                    "name": "Technical SPG",
                    "quantity": "1"
                },
                {
                    "name": "Ural 375-D Truck ZU23",
                    "quantity": "1"
                },
                {
                    "delay": 1800,
                    "name": "BMP-1 ZU23",
                    "quantity": "1"
                },
                {
                    "delay": 1800,
                    "name": "BRDM-2 Spandrel",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "Minsk 400",
                    "quantity": "5"
                },
                {
                    "name": "Technical Armored DShK-M",
                    "quantity": "2"
                },
                {
                    "name": "Technical Armored SPG-9",
                    "quantity": "1"
                },
                {
                    "name": "Technical DShK-M",
                    "quantity": "1"
                },
                {
                    "name": "Technical Logistics INS",
                    "quantity": "3"
                },
                {
                    "name": "Technical Rocket Artillery",
                    "quantity": "1"
                },
                {
                    "name": "Ural 375-D Truck ZU23",
                    "quantity": "1"
                },
                {
                    "delay": 1800,
                    "name": "BMP-1 ZU23",
                    "quantity": "1"
                },
                {
                    "delay": 1800,
                    "name": "BRDM-2 Spandrel",
                    "quantity": "1"
                }
            ]
        }
    },
    "Tallil_Outskirts_TA_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M1A2",
                    "quantity": "2"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "M1A2",
                    "quantity": "2"
                }
            ]
        }
    },
    "Tallil_Outskirts_TC_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "1"
                },
                {
                    "name": "M1126",
                    "quantity": "2"
                },
                {
                    "name": "M2A3",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "UH-60M",
                    "quantity": "2"
                },
                {
                    "delay": 1200,
                    "name": "M-ATV TOW",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "M1A2",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "2"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Mi-8",
                    "quantity": "2"
                },
                {
                    "name": "Tigr-M Kord Open Top",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "BRDM-2 Spandrel",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "T-72",
                    "quantity": "2"
                }
            ]
        }
    },
    "Tallil_Outskirts_Tanks_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M1A2",
                    "quantity": "6"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "M-ATV TOW",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "T-72",
                    "quantity": "6"
                },
                {
                    "delay": 360,
                    "name": "BRDM-2 Spandrel",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "Tallil_Outskirts_Tanks_v2": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "FV4034",
                    "quantity": "6"
                },
                {
                    "name": "FV510 (Up-Armoured)",
                    "quantity": "2"
                },
                {
                    "name": "MAN HX Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "MAN HX Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-1",
                    "quantity": "1"
                },
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "T-62",
                    "quantity": "2"
                },
                {
                    "name": "T-72S",
                    "quantity": "4"
                },
                {
                    "name": "URAL 4320 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "URAL 4320 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "Yehorivka_AAS_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "FV432",
                    "quantity": "1"
                },
                {
                    "name": "FV432 RWS",
                    "quantity": "1"
                },
                {
                    "name": "FV510 (Up-Armoured)",
                    "quantity": "2"
                },
                {
                    "name": "MAN HX Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "UH-60M",
                    "quantity": "2"
                },
                {
                    "delay": 1200,
                    "name": "FV4034",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "MAN HX Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "2"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Mi-8",
                    "quantity": "2"
                },
                {
                    "name": "Tigr-M Kord Open Top",
                    "quantity": "1"
                },
                {
                    "name": "Tigr-M Kord RWS",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "T-72",
                    "quantity": "1"
                }
            ]
        }
    },
    "Yehorivka_AAS_v2": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "1"
                },
                {
                    "name": "M1126",
                    "quantity": "2"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "UH-60M",
                    "quantity": "2"
                },
                {
                    "delay": 1200,
                    "name": "M-ATV TOW",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "M1A2",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "M2A3",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "2"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Mi-8",
                    "quantity": "2"
                },
                {
                    "delay": 1200,
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "BRDM-2 Spandrel",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "T-72",
                    "quantity": "1"
                }
            ]
        }
    },
    "Yehorivka_Destruction_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV CROWS",
                    "quantity": "1"
                },
                {
                    "name": "M1126",
                    "quantity": "1"
                },
                {
                    "name": "M1A2",
                    "quantity": "1"
                },
                {
                    "name": "M2A3",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "UH-60M",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "2"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "T-72",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 240,
                    "name": "Mi-8",
                    "quantity": "1"
                }
            ]
        }
    },
    "Yehorivka_Invasion_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "FV432",
                    "quantity": "1"
                },
                {
                    "name": "FV432 RWS",
                    "quantity": "1"
                },
                {
                    "name": "FV510",
                    "quantity": "2"
                },
                {
                    "name": "MAN HX Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "UH-60M",
                    "quantity": "2"
                },
                {
                    "delay": 1200,
                    "name": "FV4034",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "MAN HX Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-1",
                    "quantity": "1"
                },
                {
                    "name": "BMP-1 ZU23",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2 Spandrel",
                    "quantity": "1"
                },
                {
                    "name": "MT-LB",
                    "quantity": "1"
                },
                {
                    "name": "MT-LBM ZU23",
                    "quantity": "1"
                },
                {
                    "name": "Technical Logistics MIL",
                    "quantity": "2"
                },
                {
                    "name": "Ural 375-D Truck Logistics",
                    "quantity": "4"
                },
                {
                    "delay": 1200,
                    "name": "T-62",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Ural 375-D Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "Yehorivka_Invasion_v2": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "1"
                },
                {
                    "name": "M-ATV TOW",
                    "quantity": "1"
                },
                {
                    "name": "M1126",
                    "quantity": "2"
                },
                {
                    "name": "M1A2",
                    "quantity": "1"
                },
                {
                    "name": "M2A3",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "4"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 120,
                    "name": "UH-60M",
                    "quantity": "2"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2 Spandrel",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "3"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Mi-8",
                    "quantity": "2"
                },
                {
                    "name": "T-72",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "Yehorivka_RAAS_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "1"
                },
                {
                    "name": "M1126",
                    "quantity": "2"
                },
                {
                    "name": "M2A3",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "UH-60M",
                    "quantity": "2"
                },
                {
                    "delay": 1200,
                    "name": "M1A2",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "2"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Mi-8",
                    "quantity": "2"
                },
                {
                    "name": "Tigr-M Kord RWS",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "T-72",
                    "quantity": "2"
                }
            ]
        }
    },
    "Yehorivka_RAAS_v2": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "1"
                },
                {
                    "name": "M-ATV CROWS",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "UH-60M",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Mi-8",
                    "quantity": "2"
                },
                {
                    "name": "Tigr-M Kord RWS",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "Yehorivka_RAAS_v3": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "FV432",
                    "quantity": "2"
                },
                {
                    "name": "FV432 RWS",
                    "quantity": "1"
                },
                {
                    "name": "FV510 (Up-Armoured)",
                    "quantity": "2"
                },
                {
                    "name": "MAN HX Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "UH-60M",
                    "quantity": "2"
                },
                {
                    "delay": 1200,
                    "name": "FV4034",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "MAN HX Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "BTR-80",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "2"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Mi-8",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "T-72",
                    "quantity": "1"
                }
            ]
        }
    },
    "Yehorivka_RAAS_v4": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "2"
                },
                {
                    "name": "M-ATV TOW",
                    "quantity": "1"
                },
                {
                    "name": "M1126",
                    "quantity": "2"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "UH-60M",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "BRDM-2 Spandrel",
                    "quantity": "1"
                },
                {
                    "name": "BTR-80",
                    "quantity": "2"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Mi-8",
                    "quantity": "1"
                },
                {
                    "name": "Tigr-M Kord RWS",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "Yehorivka_RAAS_v5": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "2"
                },
                {
                    "name": "M1126",
                    "quantity": "3"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "UH-60M",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BRDM-2",
                    "quantity": "1"
                },
                {
                    "name": "BTR-80",
                    "quantity": "2"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "2"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Mi-8",
                    "quantity": "2"
                },
                {
                    "name": "Tigr-M Kord RWS",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "Yehorivka_Skirmish_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "M-ATV",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "delay": 360,
                    "name": "BRDM-2",
                    "quantity": "1"
                }
            ]
        }
    },
    "Yehorivka_Skirmish_v2": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                }
            ]
        }
    },
    "Yehorivka_Skirmish_v3": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "2"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BRDM-2",
                    "quantity": "2"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                }
            ]
        }
    },
    "Yehorivka_TA_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "T-72",
                    "quantity": "2"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "T-72",
                    "quantity": "2"
                }
            ]
        }
    },
    "Yehorivka_TC_v1": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "2"
                },
                {
                    "name": "M1126",
                    "quantity": "1"
                },
                {
                    "name": "M2A3",
                    "quantity": "1"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "UH-60M",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "M1A2",
                    "quantity": "2"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "name": "BTR-80",
                    "quantity": "1"
                },
                {
                    "name": "BTR-82A",
                    "quantity": "1"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Mi-8",
                    "quantity": "1"
                },
                {
                    "name": "Tigr-M Kord Open Top",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "T-72",
                    "quantity": "2"
                }
            ]
        }
    },
    "Yehorivka_TC_v2": {
        "teamOne": {
            "vehicles": [
                {
                    "name": "M-ATV",
                    "quantity": "1"
                },
                {
                    "name": "M1126",
                    "quantity": "2"
                },
                {
                    "name": "M939 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "UH-60M",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "M1A2",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "M2A3",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "M939 Truck Transport",
                    "quantity": "1"
                }
            ]
        },
        "teamTwo": {
            "vehicles": [
                {
                    "name": "BTR-82A",
                    "quantity": "2"
                },
                {
                    "name": "Kamaz 5350 Truck Logistics",
                    "quantity": "3"
                },
                {
                    "name": "Mi-8",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "BMP-2",
                    "quantity": "1"
                },
                {
                    "delay": 360,
                    "name": "Kamaz 5350 Truck Transport",
                    "quantity": "1"
                },
                {
                    "delay": 1200,
                    "name": "T-72",
                    "quantity": "1"
                }
            ]
        }
    }
};