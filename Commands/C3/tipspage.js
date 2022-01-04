module.exports ={
name:"tips",
category: "Production",
description: "A useful tips paginator.",
usage: "%tips", 
aliases:["tip","tricks","cheats","cheatsheet"],
code:`$djsEval[(async () => {
const { MessageEmbed } = require('discord.js');
const simplydjs = require('simply-djs');

// https://leovoel.github.io/embed-visualizer/

let tip1 = {
  "description": "Chord progression formulae may appear to be a difficult math equation at first glance. However, they are not as difficult as you may believe. Roman numerals, which represent notes in a scale, are used to show these charts.\r\nIt will make coming up with root notes a lot easier. Keep in mind that these formulas are tools, not rules. You will come up with chord progressions that sound really nice and natural if you follow these guidelines.",
  "color": 1,
  "footer": {
    "text": "Source - musicnotes.com | ●○"
  },
  "thumbnail": {
    "url": "https://cdn.discordapp.com/embed/avatars/0.png"
  },
  "image": {
    "url": "https://cdn.discordapp.com/attachments/889976693102628904/921374821542166528/20211217_174418.jpg"
  },
  "author": {
    "name": "Music Theory Advice",
    "icon_url": "https://cdn.discordapp.com/attachments/889976693102628904/921376597313978378/20211217_175129.png"
  },
  "fields": [
    {
      "name": "Minor keys",
      "value": "Fig 1.1",
      "inline": true
    },
    {
      "name": "Major keys",
      "value": "Fig 1.2",
      "inline": true
    }
  ]
};

let tip2 = {
  "description": "Chord progression formulae may appear to be a difficult math equation at first glance. However, they are not as difficult as you may believe. Roman numerals, which represent notes in a scale, are used to show these charts.\r\nIt will make coming up with root notes a lot easier. Keep in mind that these formulas are tools, not rules. You will come up with chord progressions that sound really nice and natural if you follow these guidelines.",
  "color": 1,
  "footer": {
    "text": "Source - musicnotes.com | ●○"
  },
  "thumbnail": {
    "url": "https://cdn.discordapp.com/embed/avatars/0.png"
  },
  "image": {
    "url": "https://cdn.discordapp.com/attachments/889976693102628904/921374821542166528/20211217_174418.jpg"
  },
  "author": {
    "name": "Music Theory Advice",
    "icon_url": "https://cdn.discordapp.com/attachments/889976693102628904/921376597313978378/20211217_175129.png"
  },
  "fields": [
    {
      "name": "Minor keys",
      "value": "Fig 1.1",
      "inline": true
    },
    {
      "name": "Major keys",
      "value": "Fig 1.2",
      "inline": true
    }
  ]
};

let pages = [tip1, tip2]

simplydjs.embedPages(client, pages, {
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
});
})()]`
}
