module.exports ={
name:"$alwaysExecute",
code:`$replaceText[$jsonRequest[https://api.affiliateplus.xyz/api/chatbot?message=$message&botname=UMC%20ChatBot&ownername=Lethiferal&user=$authorID;message;> :information_source: **An error occured**];$authorID;$username[$authorID]]
$reply[$messageID;no]
$botTyping
$onlyIf[$channelID==$getServerVar[chatbotchannel];]`
}
