module.exports ={
name:"cinfo",
category: "help",
description: "Returns the command description and usage.",
usage: "+help <command>", 
aliases:["help","commandinfo"],
code:`$author[1;Information about "$message[1]" command ;https://cdn.discordapp.com/attachments/889976693102628904/921376597313978378/20211217_175129.png]
$title[1;Command - $message[1]]
$addField[1;Description;\`\`\`fix\n$commandInfo[$message[1];description]\`\`\`;no]
$addField[1;Usage;\`\`\`fix\n$commandInfo[$message[1];usage]\`\`\`;yes]
$addField[1;Aliases;\`\`\`fix\n$replaceText[$commandInfo[$message[1];aliases];,; | ]\`\`\`;yes]
$addField[1;Category;\`\`\`fix\n$commandInfo[$message[1];category]\`\`\`;yes]
$image[1;https://cdn.discordapp.com/attachments/590020114234081280/759371484287860766/20200926_164101.jpg]
$footer[1;Requested by $username[$authorID]]
$color[1;000000]
$onlyIf[$commandInfo[$message[1];name]!=;> :negative_squared_cross_mark: **Command was not found in the database.**]
$onlyIf[$message[1]!=;]`
}
