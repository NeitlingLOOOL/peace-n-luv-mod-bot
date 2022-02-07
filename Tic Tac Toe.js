const simplydjs = require('simply-djs')

// message event
if(command === 'tictactoe'){
simplydjs.tictactoe(message, {
    xEmoji: 'emoji id', //default: ❌
    oEmoji: 'emoji id', //default: ⭕
    idleEmoji: 'emoji id', //default: ➖
    embedColor: 'hex code', //default: #075FFF
    embedFoot: 'text for footer' //default: 'Make sure to win ;)' 
})
}
