module.exports ={
name:"snake",
category: "minigame",
description: "Play Snake minigame.",
usage: "+snake", 
aliases:["snakes","minigamesnake"],
code:`$djsEval[(async () => {
const { Snake } = require('weky');
await Snake({
	message: message,
	embed: {
		title: 'Snake Minigame',
		description: 'You scored **{{score}}** points!',
		color: '#5865F2',
        footer: 'Use the arrows to move.',
		timestamp: false
	},
	emojis: {
		empty: '⬛',
		snakeBody: '🟩',
		food: '🍎',
		up: '⬆️',
		right: '⬅️',
		down: '⬇️',
		left: '➡️',
	},
	othersMessage: 'Only <@{{author}}> can use the buttons!',
	buttonText: '⛌'
})
})()]`
}
