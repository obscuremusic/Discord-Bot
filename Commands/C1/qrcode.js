module.exports ={
name:"qrcode",
category: "utility",
description: "Returns the QR code of the arguements.",
usage: "+qrcode <text>", 
aliases:["qr"],
code:`$author[1;QR code Generated (360x360);https://cdn.discordapp.com/attachments/889976693102628904/925390021089964202/20211228_193853.png]
$description[1;**[Image Link](https://api.qrserver.com/v1/create-qr-code/?size=360x360&data=$replaceText[$message; ;%20]) | [QR Service](https://qrserver.com)**]
$image[1;https://api.qrserver.com/v1/create-qr-code/?size=360x360&data=$replaceText[$message; ;%20]]
$color[1;2f3135]
$footer[1;Source - qrserver.com | $argsCount words.]
$onlyIf[$message!=;> :information_:**You need to provide a text!**]`
}
