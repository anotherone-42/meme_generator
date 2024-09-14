const {Client, GatewayIntentBits,} = require('discord.js');
const {token,prefix,} = require ('./config.json');
const {exec} = require('child_process');
const path = require('path');
const scriptPath = path.join(__dirname, 'meme_generator.py');

const client = new Client 
({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});


client.on('ready', () =>{
    console.log('up');
})


client.on("messageCreate", message=>{
    if(message.content=== prefix+"meme"){
        try{
            exec(`python ${scriptPath}`, (error, stdout, stderr) => {

                if (error) {
                    console.error(`Erreur d'exécution : ${error}`);
                    return;
                }
                if (stderr) {
                    console.error(`Erreur : ${stderr}`);
                    return;
                }

                try {
                    const result = JSON.parse(stdout);  // Convertir la sortie JSON en objet JavaScript
                    const messageToSend = result.message;

                    message.channel.send(messageToSend);

                } catch (parseError) {
                    console.error('Erreur lors du traitement des données JSON :', parseError);
                    console.error('Sortie du script :', stdout); 
                }
                });
    }   catch (error) {
        console.error('Erreur lors de l\'exécution du script :', error);
    }
    }
});


client.on("messageCreate", message=>{
    if(message.content=== prefix+"coffee"){
        message.channel.send(" ‎ ‎ ‎ ‎  (   (   \n  " +   " ‎ ‎ ‎ ‎ )   )\n  " + String("\.\\_\\_\\_\\_\\_\\_\\.\n") + "  |              |  ]\n" + "  \\            /\n" + "    \`-----'")
    }
});

client.login(token);
