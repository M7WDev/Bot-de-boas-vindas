const Discord = require("discord.js"); 
const client = new Discord.Client({intents: 32767});
const config = require("./config.json"); 
const { EmbedBuilder } = require('discord.js');

client.login(config.token); 

client.once('ready', async () => {

    console.log("Iniciei com sucesso 🚀")

})
client.on('guildMemberAdd', (member) => {
    
    const exampleEmbed = new EmbedBuilder()
	.setColor('black')
	.setTitle('Bem Vindo')
	.setDescription(`\n\nO usuário ${member.user} acabou de entrar no servidor!\n\n`) //Mensagem que irá aparecer
    //.setImage('linkdaimagem')
    const welcomeChannel = member.guild.channels.cache.get(config.welcomeChannel); //Pega o canal onde vai ser enviado e salva em uma const
    welcomeChannel.send({ embeds: [exampleEmbed] })  //Envia a embed no canal 
    
});