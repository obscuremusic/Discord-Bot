module.exports = {
name: "$files",
type: "djs",
usage: "$files[directory(optional);separator(optional)]",
code: async d => {
const data = d.util.openFunc(d)
const [dir = __dirname,sep = '\n'] = data.inside.splits
const folder = dir; 
let text = ""
const fs = require('fs'); 
let name = fs.readdirSync(folder)
for(let n = 0;n<name.length;n++) {
text += name[n] + sep
}
 data.result = text
return {
 code: d.util.setCode(data)
 }
 }
}
