import SteamUser from 'steam-user'
import logOnOptions from '../src/modules/login.js'

const client = new SteamUser()

client.logOn(logOnOptions)

client.on('loggedOn', () => {
    client.setPersona(SteamUser.EPersonaState.Offline)
    client.gamesPlayed(440)
})