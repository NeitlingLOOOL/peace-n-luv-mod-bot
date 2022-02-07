afk.js

const db = require('quick.db')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name : 'afk',
    run : async(client, message, args) => {
        const reason = args.join(" ")
        if(!reason) reason = no reason("he didn't tell me Lmao")
        await db.set(`afk-${message.author.id}+${message.guild.id}`, reason)
        const embed = new MessageEmbed()
        .setDescription(`You have been set to afk\nReason : **${reason}**`)
        .setColor("RANDOM")
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic : true }))
        message.channel.send(embed)                
    }
}

index.js

const  { MessageEmbed } = require('discord.js')
client.on('message', async message => {
if(db.has(`afk-${message.author.id}+${message.guild.id}`)) {
        const afk = db.get(`afk-${message.author.id}+${message.guild.id}`)
        await db.delete(`afk-${message.author.id}+${message.guild.id}`)
        const embed = new MessageEmbed()
        .setDescription(`Your afk status have been removed`)
        .addField(`more info`, `${afk}`)
        .setColor("RANDOM")
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic : true }))
        message.channel.send(embed)
    }
    })