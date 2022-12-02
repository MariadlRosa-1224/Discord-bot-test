const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('chikn-nuggit')
        .setDescription('just Chikn Nuggit'),
        async execute(interaction) {
            await interaction.reply(`${interaction.user.username}!! Look!! https://tenor.com/view/chikn-nuggit-dancing-spin-spinning-gif-24943306`);
        },
};



