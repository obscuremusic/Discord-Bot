module.exports ={
name:"stats",
category: "Information",
description: "Shows bot's stats.,",
usage: "<prefix>stats", 
aliases: ['botstats', 'statistics','stat','bs'],
code:`$author[1;Client Statistics of $username[$clientID];$userAvatar[$clientID]]
$description[1;**Client Figures**
\`\`\`html
• Websocket Delay      : $ping ms 
• Client Latency       : $botPing ms 
• Database Latency     : $dbPing ms 
• Flextime/Uptime      : $uptime\`\`\`
**Platform Info**
\`\`\`html
• RAM Usage            : $ram mb / 512 mb
• CPU Usage            : $cpu / 100%
• Processor            : AMD(R) Ryzen(TM) 7
• Cores / arch         : 8 Core / x64
• System / Type        : linux / Linux\`\`\`
**Libraries**
\`\`\`html
• Node.js Version      : $nodeVersion
• Discord.js Version   : v12.5.3\`\`\`]
$footer[1;Some of the informations are not updated frequently.]
$color[1;2f3135]`
}
