const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "warnings",
  aliases: ["warnings"],
  description: "Show User Warnings!",
  usage: "Warnings <Mention User>",
  run: async (client, message, args) => {
    //Start
    

    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);

    if (!Member) return message.channel.send(`**Please Mention A User!**`);

    let Warnings = client.db.get(
      `Warnings_${message.guild.id}_${Member.user.id}`
    );

    let embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Member Warns:`)
      .setDescription(`${Member.user.username} Has ${Warnings || "0"} Warnings!`)
      .setFooter(`Command by ${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};