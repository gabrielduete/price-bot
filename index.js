import SteamUser from 'steam-user'
import logOnOptions from './modules/login.js'

const client = new SteamUser()

client.logOn(logOnOptions)

client.on('loggedOn', () => {
    client.setPersona(SteamUser.EPersonaState.Online)
})

client.on('friendRelationship', (steamid, relationship) => {
    if (relationship === 2) {
        client.addFriend(steamid)
        client.chatMessage(steamid, 'Hello there! Thanks for adding me!')
    }
})

client.on('friendsList', () => {
    let friends = Object.keys(client.myFriends).filter(steamId => client.myFriends[steamId] == SteamUser.EFriendRelationship.Friend)
    friends.forEach(e => {
        client.chat.sendFriendMessage(e, "Hello, world!")
    })
    console.log('All Friends: ' + friends.length)
})
