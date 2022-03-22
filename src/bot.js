require('dotenv').config()

const { Client, MessageEmbed } = require('discord.js');
const client = new Client({intents: ["GUILDS","GUILD_MESSAGES","DIRECT_MESSAGES"]});
const PREFIX = "!"
client.on('ready', () => {
    console.log(`Logged in ${client.user.username}`)
})

client.on('message', (message) => {
    
    

    if(message.author.bot) return;
    console.log(`[${message.author.tag}]:${message.content}`)
        
    if(message.content === 'hello'){
        message.reply(`hi ${message.author} bava`)
    }
    if(message.content === 'vannu bangaram'){
        message.reply(`chipo ${message.author} bava`)
    }
    if(message.content === 'vannu'){
        message.reply(`cheppu ${message.author} bava`)
    }
    

    
})



const target = "953000077646000148"
const prefix = "!katha"


client.on('messageCreate', (message) => {
    if(message.author.bot)return;
    if(message.channelId == "953000042644516924"){
        if(message.content === "raama chilakamma"){
            client.users.cache.get(message.author.id).send(`hi ${message.author.username} bava, katha cheppava pleej`);
        }
    }
    if(message.channel.type == "DM" && message.author.id !== client.user.id){
        if(!message.content.startsWith(prefix) || message.author.bot) return;

        if(message.content.includes(prefix)){

            client.channels.cache.get(target).send(message.content.slice(prefix.length).concat(`-By ${message.author.username}`))
        }
    }
});

client.on('guildMemberAdd', (member) => {
    const gId = "952999075735818315"
    console.log(member)

    const welcomemsg = `Melcow <@${member.id}`
    const channel = member.guild.channels.get.cache(gId);
    channel.send(welcomemsg)
})


    
client.login(process.env.Token)