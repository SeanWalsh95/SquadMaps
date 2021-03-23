
class LoadoutContainer{
    constructor(jsonData){

        this.factions = {}
        this.alliances = {}
        for (const a of Object.values(allianceEnum))
            this.alliances[a] = []

        for (const facData of jsonData){
            try{
                let f = new FactionLoadout(facData)
                let lookup = `${f.faction.initials}#${f.type}`
                this.factions[lookup] = f
                this.alliances[f.faction.alliance].push(lookup)
            }catch (err){
                console.log(`Error Parsing Loadout for "${ignoreCaseSearch(facData,'faction')} (${ignoreCaseSearch(facData,'setup_Name')})"\n`, err);
            }
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

        this.faction = ignoreCaseSearch(jsonData,'faction')

        this.faction = factionEnum.conditionMatch(fEnum => {
            return Boolean(fEnum.name && fEnum.name.toLowerCase() === this.faction.toLowerCase())
        }, this.faction);

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

        this.teams = [{},{}];

        let teams = {0:ignoreCaseSearch(jsonData,'team1'),1:ignoreCaseSearch(jsonData,'team2')}

        for (const [mapSearch, mapDisplayname] of Object.entries(mapNames))
            if(this.classname.match(mapSearch))
                this.map = {id: mapSearch, name:mapDisplayname}

        for (const [team, data] of Object.entries(teams)){
            this.teams[team] = {
                alliances: ignoreCaseSearch(data,'allowedAlliances'),
                setups: ignoreCaseSearch(data,'factionSetups'),
                intel: ignoreCaseSearch(data,'intelOnEnemy'),
                actions: ignoreCaseSearch(data,'actions'),
                tickets: ignoreCaseSearch(data,'tickets')
            }

            if (this.teams[team].alliances){
                let loadouts = {}
                for(const alliance of this.teams[team].alliances){
                    loadouts = Object.assign(factions, factionLoadouts.getFactions(alliance, this.teams[team].setups) )
                }
                this.teams[team].loadouts = loadouts
            }else{
                let staticLoadout = new FactionLoadout(data)
                let teamVics = ignoreCaseSearch(data,'vehicles')
                if (teamVics)
                    teamVics = teamVics.map( (vicData)=> {return new SQVehicle(vicData)})
                this.teams[team].loadouts = {[`${staticLoadout.faction.initials}#STATIC`]:staticLoadout}
                this.teams[team].setups = ["STATIC"]
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

        this.gamemode = gamemodeEnum.keyMatch(this.gamemode)
    }

    genLoadoutOptionElements(){
        return {
            0: optionsFromArray(this.teams[0].setups),
            1: optionsFromArray(this.teams[1].setups)
        }
    }

    genFactionOptionElements(){ 
        var facOptions = {0:[], 1:[]}
        for(const [teamNumber, teamData] of Object.entries(this.teams)){
            for(const loadout of Object.values(teamData.loadouts)){
                var optionElement = document.createElement("option");
                optionElement.value = loadout.faction.initials
                optionElement.innerHTML = loadout.faction.initials
                facOptions[teamNumber].push(optionElement)
            }
        }
        return facOptions
    }
}