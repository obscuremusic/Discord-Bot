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
├ RAM Usage            : $ram mb / $replaceText[$abbreviate[$maxRam];K; GB;-1]
├ ROM Usage            : $djsEval[process.memoryUsage().rss / 1024 / 1024;yes] MB / 1024 mb
├ CPU Usage            : $cpu / 100%
├ Processor            : $djsEval[require ('os').cpus()[0].model;yes]
├ Cores / arch         : 8 Core / x64
└ System / Type        : $djsEval[require ('os').platform();yes]
\`\`\`}
{image:https://cdn.discordapp.com/attachments/889976693102628904/929761765099712602/20220109_211113.jpg}
{color:2f3135}}
{newEmbed:{description:\`\`\`html
├ Latest Commit        : $cropText[$jsonRequest[https://api.github.com/repos/lethiferal/UMC-Server-bot/commits/main;sha];5]
└ Node.js Version      : $nodeVersion
\`\`\`}
{image:https://cdn.discordapp.com/attachments/889976693102628904/929761765099712602/20220109_211113.jpg}
{color:2f3135}}
{newEmbed:{image:https://github-readme-stats.vercel.app/api/pin/?username=lethiferal&repo=UMC-Server-bot&show_icons=true&title_color=999999&text_color=636363&icon_color=999999&bg_color=202020&hide_border=true&show_owner=true}{color:2f3135}};853934236687138847]`,
  channel: "853934236687138847",
  executeOnStartup: true,
  every: 60000
}
