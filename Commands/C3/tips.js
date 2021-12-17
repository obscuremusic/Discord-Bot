 module.exports = [{
    name:"progression",
    type:"awaited",
    code:`$author[1;Music Theory Advice;https://cdn.discordapp.com/attachments/889976693102628904/921376597313978378/20211217_175129.png]
$title[1;Chord Progression Formulae] 
$description[1;Chord progression formulae may appear to be a difficult math equation at first glance. However, they're not as difficult as you may believe. Roman numerals, which represent notes in a scale, are used to show these charts.
It'll make coming up with root notes a lot easier. Keep in mind that these formulas are tools, not rules. You'll come up with chord progressions that sound really nice and natural if you follow these guidelines.

]
$addField[1;Major keys;fig. 1.2;yes]
$addField[1;Minor keys;fig. 1.1;yes]
$image[1;https://cdn.discordapp.com/attachments/889976693102628904/921374821542166528/20211217_174418.jpg]
$color[1;2f3135]
$footer[1;Source - musicnotes.com | 1 out of NaN availiable tips.]`
    },{
  name:"tips",
  aliases:["tip","cheats","cheat"],
  code:`$if[$random[1;2;no]==1]
$loop[1;progression]
$endif`
}]
