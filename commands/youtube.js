const {SlashCommandBuilder} = require("discord.js");
 //Still in progress
module.exports = {
    data: new SlashCommandBuilder()
    .setName('youtube')
    .setDescription('Hear a video in vc'),

    async execute(interaction){
        await interaction.deferReply();
    }
};