module.exports ={
name:"$alwaysExecute",
code:`$djsEval[const simplydjs = require("simply-djs")
simplydjs.chatbot(client1, message, {
 chid: "$getServerVar[chatbotchannel]"
 name: "UMC Chatbot"
 developer: "Lethiferal"
});]
$reply[$messageID;no]`
}
