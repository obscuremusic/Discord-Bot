module.exports = [{
name: "survey",
category: "moderation",
description: "Survey for new members",
usage: "NaN", 
code:`$image[1;https://cdn.discordapp.com/attachments/889976693102628904/924368955076902972/InShot_20211226_000137242.jpg]
$color[1;2f3135]
$author[2;Community Verification System;https://cdn.discordapp.com/attachments/889976693102628904/925019526909796362/20211227_190655.png]
$description[2;\`\`\`fix
Since we're a private server, it is important that we keep track of who gets access. As a solution, we have built a verification system to prevent nefarious and dimwitted individuals from gaining access to the server. Please select one of the options below to continue. If the bot fails to respond to the interaction, please use the second option. If you have any problems, please submit a ticket.\`\`\`]
$image[2;https://cdn.discordapp.com/attachments/590020114234081280/759371484287860766/20200926_164101.jpg]
$color[2;2f3135]
$addbutton[1;Form Submit;5;https://forms.gle/L8VjMVexgVG4C8gN8;no;<:icon_gforms:924389619326402581>]
$addbutton[1;Discord Survey;1;verify_vd;no;<:icon_discord:924389666495557693>]
$onlyPerms[manageserver;> :information_source: **You don't have enough permissions.**]`
},{
  name: "verify_vd",
  type: 'interaction',
  prototype: 'button',
  code:`$interactionReply[> :information_source: **Your application was successfully created at <#$findChannel[➥・［⎋］﹕$username[$findMember[$message[1]]]．;yes]>.**;;;;yes]
  $channelSendMessage[$findChannel[➥・［⎋］﹕$username[$findMember[$message[1]]]．;yes];This feature is under construction, please submit a form;no]
  $wait[1s]
  $newTicket[➥・［⎋］﹕$username[$authorID]．;{newEmbed:{author:Application started:https://cdn.discordapp.com/attachments/889976693102628904/925019526909796362/20211227_190655.png}{description:\`\`\`diff\r\n+) Read the community guidelines before you proceed.\r\n+) Responses should be concise and well formatted.\r\n+) Open a ticket if you face any problems with the survey.\r\n\`\`\`\r\n\`\`\`diff\r\n-) You should not submit the form more than once.\r\n-) You should be serious with your responses.\r\n-) You should not take more than 10 minutes to answer.\r\n\`\`\`}{footer:Select Confirm to continue or Cancel to delete the form.}{color:000001}{{actionRow:{button:Confirm:3:confirm_vd:false}{button:Cancel:4:cancel_vd:false}}}};$getServerVar[verifycategory];no;]
  $cooldown[5m]`
}]
