module.exports ={
name:"stats-dump",
category: "Information",
description: "Shows bot's stats.",
usage: "NaN", 
type:"loop",
code:`$editMessage[929800988771102771;{newEmbed:{author:System statistics and performance:https://cdn.discordapp.com/attachments/889976693102628904/921376597313978378/20211217_175129.png}
{description:\`\`\`fix
Because all of the bots are hosted on a single server and several bots are running at the same time, the statistics and performance of the server should be monitored at frequent intervals to ensure processing performance.
\`\`\`}
{image:https://cdn.discordapp.com/attachments/889976693102628904/929761765099712602/20220109_211113.jpg}
{color:2f3135}}
{newEmbed:{description:\`\`\`html
├ Websocket Delay      : $ping ms 
├ Transfer Rate        : $roundTenth[$divide[$divide[$multi[$ram;8];$divide[$ping;1000]];1000];2] Gbps ⛗
├ Database Latency     : $dbPing ms 
└ Flextime/Uptime      : $djsEval[Math.floor(client.uptime / 86400000);;yes] D, $djsEval[Math.floor(client.uptime / 3600000) % 24;;yes] H, $djsEval[Math.floor(client.uptime / 60000) % 60;;yes] M, $djsEval[Math.floor(client.uptime / 1000) % 60;;yes] S\`\`\`;yes]
\`\`\`}
{image:https://cdn.discordapp.com/attachments/889976693102628904/929761765099712602/20220109_211113.jpg}
{color:2f3135}}
{newEmbed:{description:\`\`\`html
├ RAM Usage            : $truncate[$ram] mb / 512mb
├ CPU Usage            : $cpu / 100%
├ Processor            : $cropText[$djsEval[require ('os').cpus()[0].model;yes];16]
├ Cores / arch         : 8 Core / x64
└ System / Type        : $djsEval[require ('os').platform();yes]
\`\`\`}
{image:https://cdn.discordapp.com/attachments/889976693102628904/929761765099712602/20220109_211113.jpg}
{color:2f3135}}
{newEmbed:{description:\`\`\`html
├ Latest Commit        : $cropText[$jsonRequest[https://api.github.com/repos/lethiferal/UMC-Server-bot/commits/main;sha];7]
├ Last Updated         : $formatDate[$dateStamp;L], $hour:$minute:$second
└ Node.js Version      : $nodeVersion
\`\`\`}
{image:https://cdn.discordapp.com/attachments/889976693102628904/929761765099712602/20220109_211113.jpg}
{color:2f3135}};853934236687138847]
$suppressErrors`,
  channel: "853934236687138847",
  executeOnStartup: true,
  every: 60600
}
