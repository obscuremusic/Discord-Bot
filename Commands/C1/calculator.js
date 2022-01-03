module.exports ={
name:"calculator",
category: "utility",
description: "An handy button Calculator.",
usage: "+calculator", 
aliases:["cal","calculate"],
code:`$djsEval[(async () => {
const discordjs = require('discord.js');
const simplydjs = require('simply-djs');
simplydjs.calculator(message, {
  embedColor: "#2f3135",
  credit: false
})
})()]`
}
