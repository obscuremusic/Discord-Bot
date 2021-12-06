module.exports ={
   name:"stats",
   aliases: ["st","uptime","ping","ram","cpu"],
   code:`$author[Client Statistics • $username[$clientID] Health;$userAvatar[$clientID]]
$description[**Client Figures**
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
• Discord.js Version   : v12.5.3\`\`\`
**[Website](https://undergroundmusic.carrd.co/ 'Enter UMC Website') | [Donate](https://ko-fi.com/undergroundmusic 'Donate to UMC') | [Commands](https://undergroundmusic.carrd.co/#commands)**]
$image[https://cdn.discordapp.com/attachments/699913581386268724/858043879885373490/20210625_232923.jpg]
$color[2f3135]`
}
