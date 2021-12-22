module.exports = {
  channel:"$getServerVar[joinlogchannel]",
  name:"joinlog",
  category: "moderation",
  description: "Logs when someone joins.",
  type:"join",
  code:`$thumbnail[1;$authorAvatar]
  $author[1;$username#$discriminator joined.;https://cdn.discordapp.com/attachments/889976693102628904/922584796356575233/20211221_015201.png]
  $addField[1;User ID;\`\`\`fix\n$authorID\`\`\`;yes]
  $addFields[1;Membership Date:\`\`\`fix\n$formatDate[$dateStamp;L], $hour#COLON#$minute#COLON#$second AM/PM (UTC)\`\`\`:yes;Creation Date:\`\`\`fix\n$creationDate[$authorID] (UTC)\`\`\`:yes]
  $color[1;006400]`
}
