module.exports ={
name:"notes",
category: "utility",
description: "Highlights notes in a given scale.",
usage: "%notes <scale>", 
aliases:["scale","notesin"],
code:`
$author[1;Scale Lookup for $message[1];https://media.discordapp.net/attachments/889976693102628904/923630143644258434/20211223_230621.png]
$title[1;Notes in the scale $message[1] are highlighted in blue.]
$description[1;**Description**
\`\`\`fix
$get[]\`\`\`]
$addField[1; ; ;yes]
$addField[1; ; ;yes]
$image[1;]
$footer[1;Source - NaN | Requested by $username[$authorID]]
$color[1;1B3DF4]`
}
