module.exports ={
name:"embed",
aliases:["json"],
code:`$djsEval[message.channel.send($getObject)]
$createObject[$message]
$onlyIf[$isValidObject[$message]==true;> :information_source: **Not a valid json, use this website to get embed json - https://embedbuilder.nadekobot.me/** ]
$onlyForIDs[589866849815232573; > :information_source: **You are not the bot owner!**]`
}
