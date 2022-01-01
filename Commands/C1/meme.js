module.exports ={
name:"meme",
category: "misc",
description: "Gives you soomething to laugh at.",
usage: "+meme", 
aliases:["shitpost","trashpost","dankmeme"],
code:`$djsEval[(async () => {
const discordjs = require('discord.js');
const simplydjs = require('simply-djs');
simplydjs.automeme(client, {
  chid: "$channelID",
  subReddits: ["Audiomemes","ProducerCircleJerk"],
  embedColor: "#2F3135"
});
})()]`
}
