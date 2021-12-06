module.exports = {
   channel:"$channelId",
   name:"weather",
   aliases: ["wr","temperature","forecast"],
   type:"default",
   code:`$title[Weather report for $message]
$description[\`\`\`Location: $jsonRequest[http://api.somecool.repl.co/weather?place=$message[1]+$message[2]+$message[3]+$message[4]+$message[5];location;No data.]\`\`\`
\`\`\`Temperature: $jsonRequest[http://api.somecool.repl.co/weather?place=$message[1]+$message[2]+$message[3]+$message[4]+$message[5];temperature;No data.]\`\`\`
\`\`\`Humidity: $jsonRequest[http://api.somecool.repl.co/weather?place=$message[1]+$message[2]+$message[3]+$message[4]+$message[5];humidity;No data.]\`\`\`
\`\`\`Wind Speed: $jsonRequest[http://api.somecool.repl.co/weather?place=$message[1]+$message[2]+$message[3]+$message[4]+$message[5];wind_display;No data.]\`\`\`
\`\`\`Observation Time: $jsonRequest[http://api.somecool.repl.co/weather?place=$message[1]+$message[2]+$message[3]+$message[4]+$message[5];observation_time;No data.]\`\`\`]
$color[000001]
$thumbnail[$jsonRequest[http://api.somecool.repl.co/weather?place=$message[1]+$message[2]+$message[3]+$message[4]+$message[5];image_url; ]]
$image[https://wttr.in/$message[1]+$message[2]+$message[3]+$message[4]+$message[5].png?m]
$onlyIf[$message[1]!=;> **:information_source: Add a place.**]
$onlyIf[$jsonRequest[http://api.somecool.repl.co/weather?place=$message[1]+$message[2]+$message[3]+$message[4]+$message[5];location;]!=;> **:information_source: No place found with the name "$message[1]+$message[2]+$message[3]+$message[4]+$message[5]".**]`
   }
