const express = require("express");
const app = express();
const port = 3000
app.get('/', (req, res) => res.send('All Systems Operational.'))

app.listen(port, () =>
console.log('Listening at https://localhost:${port}'))
console.log('Webserver Active.')

const variables = require("./variables")
const aoijs = require('aoi.js');
const client1 = new aoijs.Bot({
   token: "ODUxODE1ODQ0NjUxNDY2Nzgz.YL9xUw.72-5XsNWRCWRHqRAbgcc5fTti_s",
   prefix: ["+","<@$clientID>","<@!$clientID>"],
   intents: "all"
 });
 
 const client2 = new aoijs.Bot({
   token: "ODUxODIwMjU5MTk0NDM3NzIy.YL91bw.Vou7-5s83tSb4K7yjIsxQSRhYGM",
   prefix: ["~","<@$clientID>","<@!$clientID>"],
   intents: "all"
 });
 
 const client3 = new aoijs.Bot({
   token: "ODUxODI1Mjg4MDMwNzE1OTU0.YL96Hg.YVvokGA_couP8oWb9HeIwGx0jEE",
   prefix: ["%","<@$clientID>","<@!$clientID>"],
   intents: "all"
 });
 
  const client4 = new aoijs.Bot({
   token: "ODUxODMxNTc2MTkwMjU1MTA1.YL9_-g.IFBL8VqDfSjeVQ0HXjqamE8QUBA",
   prefix: ["-","<@$clientID>","<@!$clientID>"],
   intents: "all"
 });
 
  const client5 = new aoijs.Bot({
   token: "ODUzNjI5NzEyNDU3NTMxNDAz.YMYKnw.f48EmFFzWqE_737vUh3dz1_2y5Q",
   prefix: ["=","<@$clientID>","<@!$clientID>"],
   intents: "all"
 });

client1.onMessage() //enables UMC Custom Bot (1)#5990 to see messages (required for executing Commands)
client2.onMessage() //enables UMC Custom Bot (2)#7495 to see messages (required for executing Commands)
client3.onMessage() //enables UMC Custom Bot (3)#7898 to see messages (required for executing Commands)
client4.onMessage() //enables UMC Custom Bot (4)#8339 to see messages (required for executing Commands)
client5.onMessage() //enables UMC Custom Bot (5)#7525 to see messages (required for executing Commands)

client1.variables(variables)
client2.variables(variables)
client3.variables(variables)
client4.variables(variables)
client5.variables(variables)

client1.status({ //enables UMC Custom Bot (1)#5990's client status.
  text: "+help | On Maintainance.",
  type: "STREAMING",
  time: 5
})

client1.status({
  text: "+stat | On Maintainance.",
  type: "STREAMING",
  time: 20
})

client2.status({ //enables UMC Custom Bot (2)#7495's client status.
  text: "~help | On Maintainance.",
  type: "STREAMING",
  time: 5
})

client2.status({ 
  text: "~stat | On Maintainance.",
  type: "STREAMING",
  time: 20
})

client3.status({ //enables UMC Custom Bot (3)#7898's client status.
  text: "%help | On Maintainance.",
  type: "STREAMING",
  time: 5
})

client3.status({ 
  text: "%stat | On Maintainance.",
  type: "STREAMING",
  time: 20
})

client4.status({ //enables UMC Custom Bot (4)#8339's client status.
  text: "-help | On Maintainance.",
  type: "STREAMING",
  time: 5
})

client4.status({
  text: "-stat | On Maintainance.",
  type: "STREAMING",
  time: 20
})

client5.status({ //enables UMC Custom Bot (5)#7525's client status.
  text: "=help | On Maintainance.",
  type: "STREAMING",
  time: 5
})

client5.status({
  text: "=stat | On Maintainance.",
  type: "STREAMING",
  time: 20
})


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
