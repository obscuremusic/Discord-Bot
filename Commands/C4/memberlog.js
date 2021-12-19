module.exports = [{
  channel:"$getServerVar[joinlogchannel]",
  name:"joinlog",
  category: "moderation",
  description: "Logs when someone joins.",
  type:"join",
  code:`$author[1;$username joined.;https://cdn.discordapp.com/attachments/889976693102628904/922213724863987732/add-user.png]
  $addFields[1;Username:\`\`\`kt\n$username\`\`\`:yes;User ID:\`\`\`kt\n$authorID\`\`\`:yes]
  $addFields[1;Membership Date:\`\`\`kt\n$formatDate[$dateStamp;L], $hour#COLON#$minute#COLON#$second AM/PM (UTC)\`\`\`:yes;Creation Date:\`\`\`kt\n$creationDate[$authorID]\`\`\`:yes]
  $color[1;006400]
  `
},{
  channel:"$getServerVar[joinlogchannel]",
  name:"leavelog",
  category: "moderation",
  description: "Logs when someone leaves.",
  type:"leave",
  code:`$author[1;$username left.;https://cdn.discordapp.com/attachments/889976693102628904/922213725090492456/remove-user.png]
  $addFields[1;Username:\`\`\`kt\n$username\`\`\`:yes;User ID:\`\`\`kt\n$authorID\`\`\`:yes]
  $addFields[1;Leave Date:\`\`\`kt\n$formatDate[$dateStamp;L], $hour#COLON#$minute#COLON#$second AM/PM (UTC)\`\`\`:yes;Creation Date:\`\`\`kt\n$creationDate[$authorID]\`\`\`:yes]
  $color[1;8B00000]`
}]
