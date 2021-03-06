/***************************************************************************/
/*                                                                         */
/*                           Made by Mr Swift                              */
/*                      Best Source FOR Discord Bot                        */
/*               Server Support :https://discord.gg/6Zgu6TN                */
/*                        My instagram : Mr_.swift                         */
/*                                                                         */
/***************************************************************************/
const Discord = require('discord.js');
 module.exports = {
     name:"poll",
     description:"Create a poll",

     async run (client,message, args){

        if(!args[0])return message.channel.send('Please enter a sentence');
        const usersmd=message.author.username; 
        
        const msgargs = args.join(" ");

        await message.channel.messages.fetch({limit: 1}).then(messages => {
            message.channel.bulkDelete(messages)
        });

        const embed = new Discord.MessageEmbed()
        .setTitle(`${msgargs} \n \n Yes : :white_check_mark: \n No : :negative_squared_cross_mark: `)
        .setColor('#e60b0b')
        .setFooter(`Cmd By ${usersmd}  ${message.guild.me.displayName}` );
        message.channel.startTyping();
        message.channel.send('@everyone',embed).then(messageReaction => {
           messageReaction.react("✅");
           messageReaction.react("❎");
          
        });
        message.channel.stopTyping();
     }
 }