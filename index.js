const aoijs = require('aoi.js');

const client1 = new aoijs.Bot({
   token: "Your Bot Token",
   prefix: "Bot Prefix",
   intents: "all"
 });
 
 const client2 = new aoijs.Bot({
   token: "Your Bot Token",
   prefix: "Bot Prefix",
   intents: "all"
 });
 
 const client3 = new aoijs.Bot({
   token: "Your Bot Token",
   prefix: "Bot Prefix",
   intents: "all"
 });
 
  const client4 = new aoijs.Bot({
   token: "Your Bot Token",
   prefix: "Bot Prefix",
   intents: "all"
 });
 
  const client5 = new aoijs.Bot({
   token: "Your Bot Token",
   prefix: "Bot Prefix",
   intents: "all"
 });

client1.onMessage() //enables UMC Custom Bot (1)#5990 to see messages (required for executing Commands)
client2.onMessage() //enables UMC Custom Bot (2)#7495 to see messages (required for executing Commands)
client3.onMessage() //enables UMC Custom Bot (3)#7898 to see messages (required for executing Commands)
client4.onMessage() //enables UMC Custom Bot (4)#8339 to see messages (required for executing Commands)
client5.onMessage() //enables UMC Custom Bot (5)#7525 to see messages (required for executing Commands)

client1.command({
name: "ping",
code: `> **Pong!** $ping ms`
});

client2.command({
name: "ping",
code: `> **Pong!** $ping ms`
});

client3.command({
name: "ping",
code: `> **Pong!** $ping ms`
});

client4.command({
name: "ping",
code: `> **Pong!** $ping ms`
});

client5.command({
name: "ping",
code: `> **Pong!** $ping ms`
});
