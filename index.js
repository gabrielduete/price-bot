import SteamUser from 'steam-user'
import logOnOptions from './modules/login.js'

const bot = new SteamUser()

bot.logOn(logOnOptions)

// Logged -> Change status to online
bot.on('loggedOn', () => {
    bot.setPersona(SteamUser.EPersonaState.Online)
})

// Accept Friend Invite 
bot.on('friendRelationship', (steamid, relationship) => {
    if (relationship === 2) {
        bot.addFriend(steamid)
        bot.chatMessage(
            steamid,
            `
                Hi! Thanks for adding me! 
                I'm Price Bot!
            `
        )
    }
})

// Global Mensage
// bot.on('friendsList', () => {
//     const friends = Object.keys(bot.myFriends).filter(steamId => bot.myFriends[steamId] == SteamUser.EFriendRelationship.Friend)
//     friends.forEach(e => {
//         bot.chat.sendFriendMessage(e, "Salve")
//     })
//     console.log('All Friends: ' + friends.length)
// })

// Chat
bot.on('friendMessage', (steamid, message) => {
    message = message.toLowerCase()
    if (message == 'hi') {
        bot.chat.sendFriendMessage(steamid, "Hi! How are You?")
    }
})

bot.on('groupList', () => {
    console.log(Object.keys(bot.myGroups)[0])
    bot.chat.sendChatMessage('103582791471570174', '0', "hello")
})