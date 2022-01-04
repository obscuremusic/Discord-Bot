module.exports ={
name:"tips",
category: "Production",
description: "A useful tips paginator.",
usage: "%tips", 
aliases:["tip","tricks","cheats","cheatsheet"],
code:`$djsEval[(async () => {
const { MessageEmbed } = require('discord.js');
const simplydjs = require('simply-djs');

let pages = ["test1", "test2"];

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
