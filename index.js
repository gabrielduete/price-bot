import SteamUser from "steam-user"
import logOnOptions from "./modules/login.js"

const bot = new SteamUser()

bot.logOn(logOnOptions)

// Accept Friend Invite
bot.on("loggedOn", () => {
  bot.setPersona(SteamUser.EPersonaState.Online)
})

// Accept friend invite
bot.on("friendRelationship", (steamid, relationship) => {
  if (relationship === 2) {
    bot.addFriend(steamid)
    bot.chatMessage(
      steamid,
      `
        Hi! Thanks for adding me! 
        I'm Price Bot!
        Link to Group: https://s.team/chat/D9LnpxMZ
      
        `
    )
  }
})

// Chat Friends
bot.on("friendMessage", (steamid, message) => {
  message = message.toLowerCase()
  if (message == "hi") {
    bot.chat.sendFriendMessage(steamid, "Hi! How are You?")
  }
})

// Send mensage group Price Bot
bot.on("groupList", () => {
  bot.chat.getClanChatGroupInfo("103582791471570174", function (err, response) {
    err ? console.log(err.response) : console.log(response.chat_group_summary)
  })

  bot.chat.sendChatMessage("22328242", "78507305", "hello")
})
