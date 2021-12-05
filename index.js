const aoijs = require('aoi.js');
const client1 = new aoijs.Bot({
   token: process.env['CT1'],
   prefix: ["+","<@$clientID>","<@!$clientID>"],
   intents: "all"
 });
 
 const client2 = new aoijs.Bot({
   token: process.env['CT2'],
   prefix: ["~","<@$clientID>","<@!$clientID>"],
   intents: "all"
 });
 
 const client3 = new aoijs.Bot({
   token: process.env['CT3'],
   prefix: ["%","<@$clientID>","<@!$clientID>"],
   intents: "all"
 });
 
  const client4 = new aoijs.Bot({
   token: process.env['CT4'],
   prefix: ["-","<@$clientID>","<@!$clientID>"],
   intents: "all"
 });
 
  const client5 = new aoijs.Bot({
   token: process.env['CT5'],
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
    code: `$log[Client 1 is online.]`
})

client2.readyCommand({ //Makes a console log whenever UMC Custom Bot (2)#7495 online.
    channel: "",
    code: `$log[Client 2 is online.]`
})

client3.readyCommand({ //Makes a console log whenever UMC Custom Bot (3)#7898 is online.
    channel: "",
    code: `$log[Client 3 is online.]`
})

client4.readyCommand({ //Makes a console log whenever UMC Custom Bot (4)#8339 is online.
    channel: "",
    code: `$log[Client 4 is online.]`
})

client5.readyCommand({ //Makes a console log whenever UMC Custom Bot (5)#7525 is online.
    channel: "",
    code: `$log[Client 5 is online.]`
})

const clientloader_1 = new aoijs.LoadCommands(client1);
clientloader_1.load(client1.cmd,'./Commands/C1/') 
const clientloader_2 = new aoijs.LoadCommands(client2);
clientloader_2.load(client2.cmd,'./Commands/C2/') 
const clientloader_3 = new aoijs.LoadCommands(client3);
clientloader_3.load(client3.cmd,'./Commands/C3/') 
const clientloader_4 = new aoijs.LoadCommands(client4);
clientloader_4.load(client4.cmd,'./Commands/C4/') 
const clientloader_5 = new aoijs.LoadCommands(client5);
clientloader_5.load(client5.cmd,'./Commands/C5/') 
