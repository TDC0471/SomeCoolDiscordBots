

module.exports = {
name:'egembed',
descrption:'an embed',
aliases: [],
cooldown: 0,
guildOnly: true,
usage: ';egembed',

execute(client, message, args) {
    
const Discord = require('discord.js');
let guildURL = message.guild.iconURL();
let guildname = message.guild.name;

const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#00000')
    .setTitle('Enter the Cooldown Zone')
	.setDescription(`wait ${humanizeduration(timeLeft.toFixed(1))} before reusing the \`${command.name}\` command.`)
    .setFooter('From '+guildname, guildURL)
    .setTimestamp();

message.channel.send(exampleEmbed);
    
},

}