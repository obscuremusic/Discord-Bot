 module.exports = [{
    name:"tips",
    aliases:["tip","cheats","cheat"],
    code:`$if[$get[tip]==1]
    $sendMessage[{execute:progression};no]
    $elseIf[$get[tip]==2]
    $sendMessage[{execute:guitarchord};no]]
    $endelseif
    $endif
    $let[tip;$random[1;2;no]]`
},{
name:"progression",
type:"awaited",
code:`$author[1;Music Theory Advice;https://cdn.discordapp.com/attachments/889976693102628904/921376597313978378/20211217_175129.png]
$title[1;Chord Progression Formulae] 
$description[1;Chord progression formulae may appear to be a difficult math equation at first glance. However, they're not as difficult as you may believe. Roman numerals, which represent notes in a scale, are used to show these charts.
It'll make coming up with root notes a lot easier. Keep in mind that these formulas are tools, not rules. You'll come up with chord progressions that sound really nice and natural if you follow these guidelines.]
$addField[1;Major keys;fig. 1.2;yes]
$addField[1;Minor keys;fig. 1.1;yes]
$image[1;https://cdn.discordapp.com/attachments/889976693102628904/921374821542166528/20211217_174418.jpg]
$color[1;2f3135]
$footer[1;Source - musicnotes.com | 1 out of NaN availiable tips.]`
},{
name:"guitarchord",
type:"awaited",
code:`$author[1;Music Theory Advice;https://cdn.discordapp.com/attachments/889976693102628904/921376597313978378/20211217_175129.png]
$title[1;Interpreting Guitar Chord Charts] 
$description[1;Three or more separate notes are played together to form a chord. An interval, often known as a double-stop, is two separate notes played together.

- Your guitar strings are represented by the vertical lines on the guitar chart. Because the chart is a vertical display and you're gazing down at your instrument horizontally, it might be difficult for novices to get the feel of it.

- The horizontal lines on your guitar's neck symbolise the fret bars.
The dots indicate where your fingers should be placed on the fretboard. They're positioned on a vertical line to indicate the correct string, and inside the fret boxes to indicate which fret to press for that string. If there isn't a dot on the fretboard, that signifies you shouldn't touch that string.

- Sometimes there will be numbers in the dots, or numbers will be seen beneath the chart.Each of your fingers is represented by a number. A number next to a vertical line indicates which finger should be used on that string.

- "X" means to avoid strumming the string at all or mute it. "O" means to strum the string open, which means don’t press it onto the fretboard. ]
$image[1;https://cdn.discordapp.com/attachments/889976693102628904/921466604074704916/20211217_234850.jpg]
$color[1;2f3135]
$footer[1;Source - musicgrotto.com | 2 out of NaN availiable tips.]`                
}]
