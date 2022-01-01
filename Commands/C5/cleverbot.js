module.exports ={
name:"$alwaysExecute",
code:`
$djsEval[(async () => {
const discordjs = require('discord.js');
const simplydjs = require('simply-djs');
simplydjs.chatbot(client, message, {
  chid: "$getServerVar[chatbotchannel]",
  name: "UMC chatbot",
  developer: "Lethiferal"
})
})()]
$botTyping
$onlyIf[$channelID==$getServerVar[chatbotchannel];]`
}
