module.exports = {
  channel:"$getServerVar[joinlogchannel]",
  name:"leavelog",
  category: "moderation",
  description: "Logs when someone leaves.",
  type:"leave",
  code:`$thumbnail[1;$authorAvatar]
  $author[1;$username#$discriminator left.;https://cdn.discordapp.com/attachments/889976693102628904/922584796700487730/20211221_015222.png]
  $addField[1;User ID;\`\`\`kt\n$authorID\`\`\`;yes]
  $addFields[1;Leave Date:\`\`\`kt\n$formatDate[$dateStamp;L], $hour#COLON#$minute#COLON#$second AM/PM (UTC)\`\`\`:yes;Creation Date:\`\`\`kt\n$creationDate[$authorID] (UTC)\`\`\`:yes]
  $color[1;8B0000]`
}
