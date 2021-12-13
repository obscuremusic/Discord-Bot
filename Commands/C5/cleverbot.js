module.exports ={
name:"$alwaysExecute",
code:`$reply[$messageID;$replaceText[$jsonRequest[https://api.affiliateplus.xyz/api/chatbot?message=$replaceText[$message; ;%20]&botname=UMC%20ChatBot&ownername=Lethiferal;&user=$authorID;message; ];$authorID;$username[$authorID]];yes]
$botTyping
$onlyIf[$channelID==$getServerVar[chatbotchannel];]`
}
