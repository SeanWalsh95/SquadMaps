
class LoadoutContainer{
    constructor(jsonData){

        this.factions = {}
        this.alliances = {}
        for (const a of Object.values(allianceEnum))
            this.alliances[a] = []

        for (const facData of jsonData){
            let f = new FactionLoadout(facData)
            let lookup = `${f.faction.initials}#${f.type}`
            this.factions[lookup] = f
            this.alliances[f.faction.alliance].push(lookup)
        }
    }
    
    getFactions(alliances, setups){
        let loadouts = {}
        for (const alliance in alliances){
            if ((!alliance in this.alliances)) 
                continue

            let loadoutMatches = Object.values(factionLoadouts.factions).filter( (f)=>{    
                return (f.faction.alliance === alliance && setups.includes(f.type))
            })

            for (const l of loadoutMatches)
                loadouts[`${l.faction.initials}#${l.type}`] = l
            
            if (!(loadoutMatches.length > 0))
                console.log(`NO LOADOUTS FOR: ${setups} from ${alliance}`)
        }   
        return loadouts
    } 
}

class FactionLoadout{
    constructor(jsonData){
        this.faction = facMatch(ignoreCaseSearch(jsonData,'faction'))
        this.longName = ignoreCaseSearch(jsonData,'setup_Name')
        this.name = ignoreCaseSearch(jsonData,'shortname')
        this.type = ignoreCaseSearch(jsonData,'type')
        this.badge = ignoreCaseSearch(jsonData,'badge')
        this.vehicles = ignoreCaseSearch(jsonData,'vehicles')

        if (this.vehicles){
            let vicLookup = {}
            for (const vicData of this.vehicles){
                let name = ignoreCaseSearch(vicData,'type')
                if(name in vicLookup)
                    vicLookup[name].quantity++
                else
                    vicLookup[name] = new SQVehicle(vicData)
            }
            this.vehicles = Object.values(vicLookup)
        }
    }

}

class SQLayer{
    constructor(jsonData){
        this.name = ignoreCaseSearch(jsonData,'name')

        this.rawName = ignoreCaseSearch(jsonData,'rawName')

        this.classname = this.rawName.toLowerCase()

        this.lighting = jsonData.lighting

        this.teamOne = {}
        this.teamTwo = {}

        let teams = {"teamOne":ignoreCaseSearch(jsonData,'team1'),"teamTwo":ignoreCaseSearch(jsonData,'team2')}

        for (const [mapSearch, mapDisplayname] of Object.entries(mapNames))
            if(this.classname.match(mapSearch))
                this.map = {id: mapSearch, name:mapDisplayname}

        for (const [team, data] of Object.entries(teams)){
            this[team] = {
                alliances: ignoreCaseSearch(data,'allowedAlliances'),
                setups: ignoreCaseSearch(data,'factionSetups'),
                intel: ignoreCaseSearch(data,'intelOnEnemy'),
                actions: ignoreCaseSearch(data,'actions'),
                tickets: ignoreCaseSearch(data,'tickets')
            }

            if (this[team].alliances){
                let loadouts = {}
                for(const alliance of this[team].alliances){
                    loadouts = Object.assign(factions, factionLoadouts.getFactions(alliance, this[team].setups) )
                }
                this[team].loadouts = loadouts
            }else{
                let staticLoadout = new FactionLoadout(data)
                let teamVics = ignoreCaseSearch(data,'vehicles')
                if (teamVics)
                    teamVics = teamVics.map( (vicData)=> {return new SQVehicle(vicData)})
                this[team].loadouts = {[`${staticLoadout.faction.initials}#STATIC`]:staticLoadout}
                this[team].setups = ["STATIC"]
            }

        }

        var wikiImg = `${cdnWikiURI}/images/${this.rawName}.jpg`
        this.image = wikiImg
        //this.image = `img/maps/raw/${this.map.replaceAll(/ /g,'_')}.jpg`

        this.thumbnail = `img/maps/thumbnails/${this.classname}.jpg`
        

        this.flagCount = ignoreCaseSearch(jsonData,'CapturePoints')
        this.flags = this.classname in mapLayerFlagData ? mapLayerFlagData[this.classname] : ignoreCaseSearch(jsonData,'Flags');

        let gmMatch = this.name.match(/(?<gamemode>\w+)(?=(?:$|\s+[vV](?<version>\d+)))/);

        this.gamemode = ignoreCaseSearch(jsonData,'gamemode') || gmMatch.groups.gamemode || "Unknown"
        this.version =  ignoreCaseSearch(jsonData,'layerVersion') || gmMatch.groups.version || "1"
        this.version = this.version.replace(/[vV]/,'')

        this.gamemode = enumMatch(gamemodeEnum, this.gamemode)
    }

    genLoadoutOptionElements(){
        return {
            teamOne: optionsFromArray(this.teamOne.setups),
            teamTwo: optionsFromArray(this.teamTwo.setups)
        }
    }

    genFactionOptionElements(){ 
        var facOptions = {teamOne:[], teamTwo:[]}
      
        for(const loadout of Object.values(this.teamOne.loadouts)){
            var optionElement = document.createElement("option");
            optionElement.value = loadout.faction.initials
            optionElement.innerHTML = loadout.faction.initials
            facOptions.teamOne.push(optionElement)
        }
        
        for(const loadout of Object.values(this.teamTwo.loadouts)){
            var optionElement = document.createElement("option");
            optionElement.value = loadout.faction.initials
            optionElement.innerHTML = loadout.faction.initials
            facOptions.teamTwo.push(optionElement)
        }
        return facOptions
    }
}