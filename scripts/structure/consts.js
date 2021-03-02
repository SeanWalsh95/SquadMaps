const facMap = {
  "British Army": "GB",
  "Canadian Army": "CAF",
  "Insurgent Forces": "INS",
  "Irregular Militia Forces": "MIL",
  "Middle Eastern Alliance": "MEA",
  "Russian Ground Forces": "RUS",
  "United States Army": "USA"
}

const gmAbbv = {
"AAS": "AAS",
"Destruction": "DES",
"Insurgency": "INS",
"Invasion": "INV",
"RAAS": "RAAS",
"Skirmish": "SKMSH",
"TA": "TA",
"TC": "TC",
"Tanks": "Tanks"
}

const mapNames = [
  "Al Basrah",
  "Belaya",
  "Chora",
  "Fallujah",
  "Fool's Road",
  "Goose Bay",
  "Gorodok",
  "Kamdesh",
  "Kohat",
  "Kokan",
  "Lashkar Valley",
  "Logar",
  "Manic",
  "Mestia",
  "Mutaha",
  "Narva",
  "Skorpo",
  "Sumari",
  "Tallil",
  "Yehorivka"
]
var maps_dict = {}
for (const name of mapNames)
  maps_dict[name] = []


const allianceMap = {
"Russian Ground Forces": "redfor",
"Insurgent Forces" : "independent",
"Civilians": "independent",
"Middle Eastern Alliance": "independent",
"Irregular Militia Forces": "independent",
"United States Army": "blufor",
"British Army": "blufor",
"Canadian Army": "blufor"
}