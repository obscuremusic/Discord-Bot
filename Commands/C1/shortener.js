module.exports ={
name:"shorten",
category: "utility",
description: "Shortens a valid link.",
usage: "+shortener <link> <optional url ending>", 
aliases:["shortlink","shortenlink","shortener","linkshortener"],
code:`$author[1;Link Shortened;https://cdn.discordapp.com/attachments/889976693102628904/925022933410259014/20211227_191948.png]
$description[1;**[Preview Link]($jsonRequest[https://is.gd/create.php?format=json&url=$message[1]&shorturl=$toLowercase[$message[2]];shorturl;Error]) | [Original Link]($message[1]) | [Short-link Service](https://is.gd)**]
$addField[1;Original Link;\`\`\`fix\n$message[1]\`\`\`;yes]
$addField[1;Shortened Link;\`\`\`fix\n$jsonRequest[https://is.gd/create.php?format=json&url=$message[1]&shorturl=$toLowercase[$message[2]];shorturl;Error, Link may already exist or invalid.]\`\`\`;yes]
$color[1;2f3135]
$footer[1;Source - is.gd | Requested by $username[$authorID].]
$onlyIf[$isValidLink[$message[1]]==true;> :information_source:**You need to provide a valid link!**]
$onlyIf[$argsCount<2;> :information_source:**Incorrect usage, please use \`+cinfo shorten\`.**]
$onlyIf[$message!=;> :information_source:**You need to provide a text!**]`
}
