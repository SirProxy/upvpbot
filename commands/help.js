const botconfig = require("../botconfig.json");
const Discord = require("discord.js");
const prefix = botconfig.prefix

module.exports.run = async (bot, message, args) => {
    if (args[1] == "help") return message.channel.send(`Just do ${prefix}help instead.`)

    if (args[1]) {
      let command = args[1];
      if(bot.commands.has(command)) {
        command = bot.commands.get(command);
        var SHembed = new Discord.RichEmbed()
        .setColor("#e6aa07")
        .setAuthor(`U-PvP Discord Admin Help`, message.guild.iconURL)
        .setThumbnail(bot.user.displayAvatarURL)
        .setDescription(`The bot prefix is: ${prefix}\n\n**Command:** ${command.config.name}\n**Description:** ${command.config.description || "No Description"}\n**Usage:** ${command.config.usage || "No Usage"}\n**Accessable by:** ${command.config.accessableby || "Members"}\n**Aliases:** ${command.config.noalias || command.config.aliases}`)
        message.channel.send(SHembed);
        }
    }
    if (!args[1]) {
      message.delete()
      let embed = new Discord.RichEmbed()
      .setAuthor(`U-PvP Discord Admin Help`, message.guild.iconURL)
      .setColor("#e6aa07")
      .setDescription(`${message.author.username} check your dm's!`)

      let Sembed = new Discord.RichEmbed()
      .setColor("#e6aa07")
      .setAuthor(`U-PvP Discord Admin Help`, message.guild.iconURL)
      .setThumbnail(bot.user.displayAvatarURL)
      .setTimestamp()
      .setDescription(`These are the available commands for the U-PvP Discord Admin!\nThe bot prefix is ${prefix}`)
      .addField(`Commands:`, "``help``")
      .setFooter("U-PvP Discord Admin Help", bot.user.displayAvatarURL)
      message.channel.send(embed).then(m => m.delete(10000));
      message.author.send(Sembed)

    }
}

module.exports.config = {
  name: "help",
  aliases: ["h", "helpme"],
  usage: "u.help",
  description: "",
  //noalias: "No Aliases",
  accessableby: "Members"
}
