module.exports = [{
name:"verify",
category: "moderation",
description: "Verifies the given member",
usage: "-verify <user id>", 
aliases:["confirm","validate"],
code:`$sendMessage[{execute:verifiedstaffnotification};no]
$sendDM[{execute:verifiedmembernotification};$findMember[$message];no]
$giveRole[$findMember[$message];$getServerVar[membershiprole]]
$onlyPerms[kick;> :information_source: **You don't have enough permissions.**]`
},{
  name:"verifiedmembernotification",
  type:"awaited",
  code:`test`
},{
  name:"verifiedstaffnotification",
  type:"awaited",
  code:`test`
}]
