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
└ Flextime/Uptime      : $uptime
\`\`\`}
{image:https://cdn.discordapp.com/attachments/889976693102628904/929761765099712602/20220109_211113.jpg}
{color:2f3135}}
{newEmbed:{description:\`\`\`html
├ CPU Usage            : $cpu / 100%
├ Total Cores          : $get[cpuCore]
├ Clock Speed          : $get[cpuCMHz]
└ System Type          : $djsEval[require ('os').platform();yes]
\`\`\`}
{thumbnail:https://quickchart.io/chart/render/zm-7d7e7884-1619-48dd-a4a1-bdb3859f18b8?data1=$sub[100;$truncate[$cpu]],$truncate[$cpu]}
{image:https://cdn.discordapp.com/attachments/889976693102628904/929761765099712602/20220109_211113.jpg}
{color:2f3135}}
{newEmbed:{description:\`\`\`html
├ RAM Used             : $truncate[$ram] mb
└ RAM Free             : $sub[512;$truncate[$ram]] mb
\`\`\`}
{thumbnail:https://quickchart.io/chart/render/zm-7d7e7884-1619-48dd-a4a1-bdb3859f18b8?data1=$sub[100;$truncate[$multi[$divide[$ram;$sub[512;$truncate[$ram]]];100]]],$truncate[$multi[$divide[$ram;$sub[512;$truncate[$ram]]];100]]}
{image:https://cdn.discordapp.com/attachments/889976693102628904/929761765099712602/20220109_211113.jpg}
{color:2f3135}}
{newEmbed:{description:\`\`\`html
├ Latest Commit        : $cropText[$jsonRequest[https://api.github.com/repos/lethiferal/UMC-Server-bot/commits/main;sha];7]
├ Last Updated         : $formatDate[$dateStamp;L], $hour:$minute:$second
└ Node.js Version      : $nodeVersion
\`\`\`}
{image:https://cdn.discordapp.com/attachments/889976693102628904/929761765099712602/20220109_211113.jpg}
{color:2f3135}};853934236687138847]
$let[cpuCore;$djsEval[var cpuStat = require('cpu-stat'); var core = cpuStat.totalCores();Math.floor(core);;yes]]
$let[cpuCMHz;$djsEval[var cpuStat = require('cpu-stat'); var cmhz = cpuStat.avgClockMHz();Math.floor(cmhz)+"MHz";;yes]]
`,
  channel: "853934236687138847",
  executeOnStartup: true,
  every: 60600
}
