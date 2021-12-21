module.exports = [{
name:"verify",
category: "moderation",
description: "Verifies the given member",
usage: "-verify <user id>", 
aliases:["confirm","validate"],
code:`$sendDM[{execute:verifiedmembernotification};$findMember[$message];no]
$onlyIf[$isUserDMEnabled[$findMember[$message[1]]]==true;> :information_source: **$username[$findMember[$message[1]]]#$discriminator[$findMember[$message[1]]] Doesn't have their DMs Enabled.**]
$sendMessage[> :white_check_mark: **$username[$findMember[$message[1]]]#$discriminator[$findMember[$message[1]]] was given access to the server.** ;no]
$giveRole[$guildID;$findMember[$message[1]];$getServerVar[membershiprole]]
$onlyIf[$findMember[$message[1]]!=$authorID;> :negative_squared_cross_mark: **User not found, invalid Username / User ID.**]
$onlyPerms[kick;> :information_source: **You don't have enough permissions.**]
$let[validationID;$randomString[8]]`
},{
  name:"verifiedmembernotification",
  type:"awaited",
  code:`$author[1;Verification progress;https://cdn.discordapp.com/attachments/889976693102628904/922577271481573376/20211221_012210.png]
  $thumbnail[1;$userAvatar[851831576190255105]]
  $title[1;You are now a part of the community!]
  $description[1;You were given access to the server. We are a large community of music producers, listeners, visual artists, and anybody interested in harsh, abrasive, esoteric and overlook music genres, and it may be intimidating to a novice, but we assure you will adjust. Our server was created to allow musicians to interact and share their work, as well as to explore new genres of music. Have a pleasant stay in our cozy community. 
  You may earn community-made freebies as a thank you for joining our community by using the command \`%assets\`. And thank you for signing up and waiting patiently for the verification procedure to complete.]
  $color[1;008a11]
  $footer[1;Verification complete | ID - $get[validationID]]`
}]
