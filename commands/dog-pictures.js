const { SlashCommandBuilder } = require("discord.js");

module.exports = {
// Creation of the command
    data: new SlashCommandBuilder()
        .setName('dog-pictures')
        .setDescription('For those who just want cute dog pictures')
        .addIntegerOption(option => 
            option.setName('amount')
                .setDescription('Amount of pictures to show. Max 50')
                .setMaxValue(50)
                .setMinValue(1))
        .addStringOption(option =>
            option.setName('breed')
                .setDescription('you want a specific breed?')),

//execution of command
        async execute(interaction) {
            await interaction.deferReply();
            const amount = interaction.options.getInteger('amount') ?? null;
            let breed = (interaction.options.getString('breed') ?? "s");
            let specific = ""; 
            //the api url has "image/"" when a random image is fetch and "images/" when an specific breed is chosen

            if(breed != "s"){
                specific = "s";
            }

            if(breed != "s"){
                breed = "/" + breed;
                breed = breed.replace(" ","/");
                console.log(breed);
                console.log(`https://dog.ceo/api/breed${breed}/image${specific}/random`);
            }


            if (amount == null){
                fetch(`https://dog.ceo/api/breed${breed}/image${specific}/random`)
                    .then(async (response) => {
                        return response.json();
                    })
                    .then( async(data) => {
                        await interaction.followUp(data.message);
                    })
                    .catch (function(err) {
                        console.log(err);
                        interaction.followUp("image not found");
                    });
            } else {
                fetch(`https://dog.ceo/api/breed${breed}/image${specific}/random` + "/" + amount)
                    .then(async (response) => {
                        return response.json();
                    })
                    .then( async(data) => {
                        for(const image of data.message){
                            await interaction.followUp(image);
                        }
                    })
                    .catch (function(err) {
                        console.log(err);
                        interaction.followUp("image not found");
                    });
            }

            
        },
};