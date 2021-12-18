module.exports ={
name:"qrcode",
category: "utility",
description: "Returns the QR code of the arguements.",
usage: "+qrcode <text>", 
aliases:["qr"],
code:`$title[1;QR code Generated (360x360)]
$image[1;https://api.qrserver.com/v1/create-qr-code/?size=360x360&data=$replaceText[$message; ;%20]]
$color[1;2f3135]
$footer[Source qrserver.com | $argsCount words.]
$onlyIf[$message!=;> :information_:**You need to provide a text!**]`
}
