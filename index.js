const aoijs = require('aoi.js');

const client1 = new aoijs.Bot({
   token: "Your Bot Token",
   prefix: ["+","<@$clientID>","<@!$clientID>"],
   intents: "all"
 });
 
 const client2 = new aoijs.Bot({
   token: "Your Bot Token",
   prefix: ["~","<@$clientID>","<@!$clientID>"],
   intents: "all"
 });
 
 const client3 = new aoijs.Bot({
   token: "Your Bot Token",
   prefix: ["%","<@$clientID>","<@!$clientID>"],
   intents: "all"
 });
 
  const client4 = new aoijs.Bot({
   token: "Your Bot Token",
   prefix: ["-","<@$clientID>","<@!$clientID>"],
   intents: "all"
 });
 
  const client5 = new aoijs.Bot({
   token: "Your Bot Token",
   prefix: ["=","<@$clientID>","<@!$clientID>"],
   intents: "all"
 });

client1.onMessage() //enables UMC Custom Bot (1)#5990 to see messages (required for executing Commands)
client2.onMessage() //enables UMC Custom Bot (2)#7495 to see messages (required for executing Commands)
client3.onMessage() //enables UMC Custom Bot (3)#7898 to see messages (required for executing Commands)
client4.onMessage() //enables UMC Custom Bot (4)#8339 to see messages (required for executing Commands)
client5.onMessage() //enables UMC Custom Bot (5)#7525 to see messages (required for executing Commands)

client1.readyCommand({ //Makes a console log whenever UMC Custom Bot (1)#5990 is online.
    channel: "",
    code: `$log[Client 1 is online on $userTag[$clientID].]`
})

client2.readyCommand({ //Makes a console log whenever UMC Custom Bot (2)#7495 online.
    channel: "",
    code: `$log[Client 2 is online on $userTag[$clientID].]`
})

client3.readyCommand({ //Makes a console log whenever UMC Custom Bot (3)#7898 is online.
    channel: "",
    code: `$log[Client 3 is online on $userTag[$clientID].]`
})

client4.readyCommand({ //Makes a console log whenever UMC Custom Bot (4)#8339 is online.
    channel: "",
    code: `$log[Client 4 is online on $userTag[$clientID].]`
})

client5.readyCommand({ //Makes a console log whenever UMC Custom Bot (5)#7525 is online.
    channel: "",
    code: `$log[Client 5 is online on $userTag[$clientID].]`
})
