module.exports = {
name:"verify",
category: "moderation",
description: "Verifies the given member",
usage: "-verify <user id>", 
aliases:["confirm","validate"],
code:`$sendDM[{newEmbed:{title:Verification progress}{description:You were given access to the server. We are a large community of music producers, listeners, visual artists, and anybody interested in harsh, abrasive, esoteric and overlook music genres, and it may be intimidating to a novice, but we assure you will adjust. Our server was created to allow musicians to interact and share their work, as well as to explore new genres of music. Have a pleasant stay in our cozy community. \r\nYou may earn community-made freebies as a thank you for joining our community by using the command \`%assets\`. And thank you for signing up and waiting patiently for the verification procedure to complete.}{color:000001}{image:https://cdn.discordapp.com/attachments/889976693102628904/925373769822916648/20211228_152017.png}{thumbnail:https://cdn.discordapp.com/attachments/889976693102628904/925019526909796362/20211227_190655.png}{footer:Verification complete | ID - $get[validationID]}};$findMember[$message];no]
$onlyIf[$isUserDMEnabled[$findMember[$message[1]]]==true;> :information_source: **$username[$findMember[$message[1]]]#$discriminator[$findMember[$message[1]]] Doesn't have their DMs Enabled.**]
$deleteChannels[$findChannel[➥・［⎋］﹕$username[$findMember[$message[1]]]．;yes]
$sendMessage[> :white_check_mark: **$username[$findMember[$message[1]]]#$discriminator[$findMember[$message[1]]] was given access to the server.** ;no]
$giveRole[$guildID;$findMember[$message[1]];$getServerVar[membershiprole]]
$onlyIf[$findMember[$message[1]]!=$authorID;> :negative_squared_cross_mark: **User not found, invalid Username / User ID.**]
$onlyPerms[kick;> :information_source: **You don't have enough permissions.**]
$let[validationID;$randomString[8]]`
}
