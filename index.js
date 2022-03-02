import SteamUser from 'steam-user'
import logOnOptions from '../modules/login'

const client = new SteamUser()

client.logOn(logOnOptions)

client.on('loggedOn', () => {

    console.log('Yes! Logged into steam')

    client.setPersona(SteamUser.EPersonaState.Online)
    client.gamesPlayed(440)
})