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
  .setAuthor({ name: 'Production and Workflow Advice | Page - 1', iconURL: 'https://cdn.discordapp.com/attachments/889976693102628904/921376597313978378/20211217_175129.png'})
  .setDescription('Try using an arpeggiator plugin to the chords in your track. This can assist you in developing interesting and distinctive melodies for your track. Plucks and other percussive synths work best with this effect.')
  .setImage('https://cdn.discordapp.com/attachments/889976693102628904/928003172113453066/InShot_20220105_004307705.jpg')
  .setFooter('Available pages - ●○○')
  .setColor('#2f3135');
  
let tip2 = new MessageEmbed()
  .setAuthor({ name: 'Production and Workflow Advice | Page - 2', iconURL: 'https://cdn.discordapp.com/attachments/889976693102628904/921376597313978378/20211217_175129.png'})
  .setDescription('Use only a true sine wave as your bass below 100 Hz for maximum clarity and control in your low end. Instead of a muddy low end, you will get a clean, powerful one. Too many conflicting low end bass layers often result in a rumbling low end.')
  .setImage('https://cdn.discordapp.com/attachments/889976693102628904/928006444333301831/InShot_20220105_005559554.jpg')
  .setFooter('Available pages - ○●○')
  .setColor('#2f3135');
  
  let tip3 = new MessageEmbed()
  .setAuthor({ name: 'Production and Workflow Advice | Page - 2', iconURL: 'https://cdn.discordapp.com/attachments/889976693102628904/921376597313978378/20211217_175129.png'})
  .setDescription('When a signal is firmly limited at the threshold, it produces a flat cutoff and many high-frequency harmonics. This is referred to as hard-clipping. Soft clipping, on the other hand, refers to when the clipped signal follows the original at a lower gain, resulting in fewer higher-order harmonics and intermodulation distortion components.')
  .setImage('https://cdn.discordapp.com/attachments/889976693102628904/928241372102815744/InShot_20220105_162928926.jpg')
  .setFooter('Available pages - ○○●')
  .setColor('#2f3135');
  
let pages = [tip1, tip2, tip3];

simplydjs.embedPages(client, message, pages, {
  firstEmoji: "927629421853179914",
  backEmoji: "927629391129903154",
  delEmoji: "927629461095067669",
  forwardEmoji: "927629508096454717",
  lastEmoji: "927629535850143855",
  
  btncolor: "PRIMARY",
  delcolor: "SECONDARY",
  skipcolor: "PRIMARY",
  
  skipBtn: true,
  delBtn: true
})
})()]`
}
