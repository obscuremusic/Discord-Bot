module.exports = {
   channel:"$channelId",
   name:"weather",
   aliases: ["wr","temperature","forecast"],
   type:"default",
   code:`$title[Weather report for $message]
$description[\`\`\`Location: $jsonRequest[http://api.somecool.repl.co/weather?place=$message;location;No data.]\`\`\`
\`\`\`Temperature: $jsonRequest[http://api.somecool.repl.co/weather?place=$message;temperature;No data.]\`\`\`
\`\`\`Humidity: $jsonRequest[http://api.somecool.repl.co/weather?place=$message;humidity;No data.]\`\`\`
\`\`\`Wind Speed: $jsonRequest[http://api.somecool.repl.co/weather?place=$message;wind_display;No data.]\`\`\`
\`\`\`Observation Time: $jsonRequest[http://api.somecool.repl.co/weather?place=$message;observation_time;No data.]\`\`\`]
$color[000001]
$thumbnail[$jsonRequest[http://api.somecool.repl.co/weather?place=$message;image_url; ]]
$image[https://wttr.in/$message.png?m]
$onlyIf[$message!=;> **:information_source: Add a place.**]
$onlyIf[$jsonRequest[http://api.somecool.repl.co/weather?place=$message;location;]!=;> **:information_source: No place found with the name "$message[1]".**]`
   }
