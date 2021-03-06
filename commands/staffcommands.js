const botconfig = require("../botconfig.json");
const Discord = require("discord.js");
const prefix = botconfig.prefix

module.exports.run = async (bot, message, args) => {
        message.delete();
        let sEmbed = new Discord.RichEmbed()
        .setColor("#ffffff")
        .setThumbnail(bot.user.displayAvatarURL)
        .setAuthor(bot.user.username)
        .setDescription(`**:oncoming_police_car: Staff Commands And Usages: :oncoming_police_car:**\n\n_u.tempmute_ - Mutes Specified User For Specified Time (12H Max).\nUsage: _u.tempmute <@discorduser> <time in hours>_\nUsable By: Trial-Mod And Above\n\n_u.permmute_ - Mutes Specified User Till Unmuted.\nUsage: _u.permmute <@discorduser>_\nUsable By: Admin And Above\n\n_u.unmute_ - Unmutes Specified User.\nUsage: _u.unmute <@discorduser>_\nUsable By: Admin And Above\n\n_u.warn_ - Warns Specified User.\nUsage: _u.warn <@discorduser>_\nUsable By: Trial-Mod And Above\n\n_u.kick_ - Kicks Specified User.\nUsage: _u.kick <@discorduser>_\nUsable By: Moderator And Above\n\n_u.banlist_ - Shows List Of Banned Users\nUsage: _u.banlist_\nUsable By: Admin And Above\n\n_u.tempban_ - Bans Specified User (Max 48H).\nUsage: _u.tempban <@discorduser> <time in hours>_\nUsable By: Mod+ And Above\n\n_u.permban_ - Bans Specified User Forever\nUsage: _u.permban <@discorduser>_\nUsable By: Manager And Above\n\n_u.unban_ - Unbans Specified User ID\nUsage: _u.unban <user ID>_\nUsable By: Manager And Above.\n\n_u.purge_ - Deletes Big Amount Of Messages (Max 100).\nUsage: _u.purge <NR. Of Messages>_\nUsable By: Admin And Above`);
        message.channel.send({embed: sEmbed});
    }

module.exports.config = {
  name: "staffcommands",
  aliases: ["sc", "scommands"],
  usage: "u.staffcomands",
  description: "Staff Commands List",
  //noalias: "No Aliases",
  accessableby: "Staff"
}
