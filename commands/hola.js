const { SlashCommandBuilder } = require("discord.js");

module.exports ={
    data: new SlashCommandBuilder()
        .setName('hola')
        .setDescription('nothing to say'),
        async execute(interaction) {
            return  interaction.reply(`adios`);
        },
};