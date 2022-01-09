module.exports ={
name:"meme",
category: "fun",
description: "Returns something to laugh to.",
usage: "-meme",
aliases:["dankmeme","shitpost","trashpost","shitposting"],
code:`$djseval[(async()=>{
const discordjs = require('discord.js');
const fetch = require('node-fetch');
const subReddits = ["dankmeme", "meme", "memes"\\];
const random = Math.floor(Math.random() * subReddits.length)
var body = await fetch('https://www.reddit.com/r/' + subReddits[random\\] + '/random/.json')
body = await body.json()

const a = body[0\\]
const embed = new discordjs.MessageEmbed()
.setTitle(a.data.children[0\\].data.title)
.setURL('https://reddit.com'+a.data.children[0\\].data.permalink)
.setColor('000001')
.setImage(a.data.children[0\\].data.url_overridden_by_dest)
.setFooter(' 🔺 ' + a.data.children[0\\].data.ups + ' 💬 ' + a.data.children[0\\].data.num_comments + ' - ' + a.data.children[0\\].data.subreddit_name_prefixed);
message.channel.send(embed)
})()]`
}
