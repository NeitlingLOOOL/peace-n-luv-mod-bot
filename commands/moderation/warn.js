const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "warn",
  aliases: [],
  description: "Warn A User!",
  usage: "Warn <Mention User> | <Reason>",
  run: async (client, message, args) => {
    //Start
    

    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);

    if (!Member) return message.channel.send(`**Please Mention A User To Warn Them! (${message.author.tag})**`);

    let Reason = args.slice(1).join(" ");

    client.db.add(`Warnings_${message.guild.id}_${Member.user.id}`, 1);

    let Warnings = client.db.get(
      `Warnings_${message.guild.id}_${Member.user.id}`
    );

    let embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Member Warned!`)
      .addField(`Moderator`, `${message.author.tag}`)
      .addField(`Warned Member`, `${Member.user.tag}`)
      .addField(`Now Member Warnings`, Warnings)
      .addField(`Reason`, `${Reason || "No Reason Provided!"}`)
     

    message.channel.send(embed);

    //End
  }
};
