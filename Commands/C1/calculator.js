module.exports ={
name:"calculator",
category: "utility",
description: "An handy button Calculator.",
usage: "+calculator", 
aliases:["cal","calculate"],
code:`$djsEval[(async () => {
const discordjs = require('discord.js')
const simplydjs = require('simply-djs')
const client = global.C1
simplydjs.calculator(message, {
  embedColor: "#075FFF"
  credit: "false"
})
})()]`
}
