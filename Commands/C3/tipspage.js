module.exports ={
name:"tips",
category: "Production",
description: "A useful tips paginator.",
usage: "%tips", 
aliases:["tip","tricks","cheats","cheatsheet"],
code:`$djsEval[(async () => {

const { MessageEmbed } = require('discord.js');
const simplydjs = require('simply-djs');

let tip1 = new MessageEmbed()
    .setColor('#2f3135')
    .setAuthor({ name: 'Music Theory Advice', iconURL: 'https://cdn.discordapp.com/attachments/889976693102628904/921376597313978378/20211217_175129.png'})
    .setDescription('Chord progression formulae may appear to be a difficult math equation at first glance. However, they are not as difficult as you may believe. Roman numerals, which represent notes in a scale, are used to show these charts.\r\nIt will make coming up with root notes a lot easier. Keep in mind that these formulas are tools, not rules. You will come up with chord progressions that sound really nice and natural if you follow these guidelines.')
    .addFields(
        { name: 'Major keys', value: 'fig. 1.1', inline: true },
        { name: 'Minor keys', value: 'fig. 1.2', inline: true },
    )
    .setImage('https://cdn.discordapp.com/attachments/889976693102628904/921374821542166528/20211217_174418.jpg')
    .setFooter('Source - musicnotes.com | \u25CF\u25CB');

let tip2 = new MessageEmbed()
    .setColor('#2f3135')
    .setAuthor({ name: 'Music Theory Advice', iconURL: 'https://cdn.discordapp.com/attachments/889976693102628904/921376597313978378/20211217_175129.png'})
    .setDescription('Chord progression formulae may appear to be a difficult math equation at first glance. However, they are not as difficult as you may believe. Roman numerals, which represent notes in a scale, are used to show these charts.\r\nIt will make coming up with root notes a lot easier. Keep in mind that these formulas are tools, not rules. You will come up with chord progressions that sound really nice and natural if you follow these guidelines.')
    .addFields(
        { name: 'Major keys', value: 'fig. 1.1', inline: true },
        { name: 'Minor keys', value: 'fig. 1.2', inline: true },
    )
    .setImage('https://cdn.discordapp.com/attachments/889976693102628904/921374821542166528/20211217_174418.jpg')
    .setFooter('Source - musicnotes.com | \u25CF\u25CB');

let pages = [tip1, tip2];

simplydjs.embedPages(client, message, pages, {
  firstEmoji: "927629391129903154",
  backEmoji: "927629391129903154",
  delEmoji: "927629461095067669",
  forwardEmoji: "927629508096454717",
  lastEmoji: "927629535850143855",

  btncolor: "primary",
  delcolor: "secondary",
  skipcolor: "primary",

  skipBtn: true,
  delBtn: true,
})
})()]`
}
