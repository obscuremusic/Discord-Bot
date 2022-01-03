module.exports ={
name:"calculator",
category: "utility",
description: "An handy button Calculator.",
usage: "+calculator", 
aliases:["cal","calculate"],
code:`$djsEval[async () => {
const discordjs = require('discord.js');
const { Calculator } = require('weky');
await Calculator({
    message: message,
    embed: {
        title: '\u2800,
        color: '#2f3135',
        footer: '\u2800',
        timestamp: false
    },
    disabledQuery: 'Calculator is disabled!',
    invalidQuery: 'The provided equation is invalid!',
    othersMessage: 'Only <@{{author}}> can use the buttons!'
});
});]`
}
