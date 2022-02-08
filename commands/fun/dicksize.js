const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "dicksize",
  aliases: ["dick", "pp", "ppsize"],
  description: "Show Member PP Size!",
  usage: "Dicksize <Mention Member>",
  run: async (client, message, args) => {
    //Start
    message.delete();
    let sizes = [
      "8D",
      "8=D",
      "8==D",
      "8===D",
      "8====D",
      "8=====D",
      "8======D",
      "8=======D",
      "8========D",
      "8=========D",
      "8==========D",
      "8===========D",
      "8============D",
      "8=============D",
      "8==============D",
      "8===============D",
      "8================D",
      "8==================D"
    ];

    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    let Result = sizes[Math.floor(Math.random() * sizes.length)];

    let embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`${Member.user.username} PP Size Is:`)
      .setDescription(` \n${Result}`)
      .setFooter(`Command By ${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};