module.exports = {
name:"$findRoles",
type:"djs",
code: async(d)=>{
const data = d.util.openFunc(d); 
const [query,limit=10,type="startsWith", seperator="\n"] = data.inside.splits;
 if(!["startsWith","includes","endsWith"].includes(type)) return d.aoiError.fnError(d,'custom',{inside : data.inside},`Invalid Type Provided In`) 
 data.result = d.guild.roles.cache.filter(x=>x.name.toLowerCase()[type](query)).map(x=>x.name).join(seperator)
 return {code: d.util.setCode(data)}
 } 
}
