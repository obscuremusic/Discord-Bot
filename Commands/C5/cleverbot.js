module.exports ={
name:"$alwaysExecute",
code:`$replaceText[$jsonRequest[https://api.affiliateplus.xyz/api/chatbot?message=$uri[$message;encode]&botname=UMC%20ChatBot&ownername=Lethiferal&build=beta&celebrity=Varg+Vikernes&city=Kolkata&country=India&email=none&company=UMC&favoriteband=Navjarmaahr&favoritecolor=black&favoriteseason=winter&favoritesong=Beyond+Tears+by+Oppressive+Light&kindmusic=black+metal&location=Server+Farm&user=$authorID;message;> :information_source: **An error occured**];$authorID;$username[$authorID]]
$reply[$messageID;no]
$botTyping
$onlyIf[$channelID==$getServerVar[chatbotchannel];]`
}
