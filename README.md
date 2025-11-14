# meme_generator  

XMR address for donations: 4AJtFkiynSSiRrzcNeD2PkhRnLvd35zPt1PCng5NCDfAExn9cZ9jPnY6Bc3RkadLPLEyMCa7aWcXyL725mmrZ3BcNdSCYuH  

Discord bot to automatically send a meme to a channel based on a command  
Thanks to https://apileague.com for their quality API <3  
  
Installation:  
  
- Download Node.js:  
  
https://nodejs.org/fr  
  
- Install it  
- In VSCode, open a terminal and execute:  
```bash
npm init
```
- Then  
```bash
npm i discord.js
```  
And finally  
```bash
python -m pip install requests
```  
- In the config.json file, remember to change your Discord API key, which you can get by creating a bot on:  
https://discord.com/developers/applications  
  
- In ```meme_generator.py```, also change your API key(s) obtainable from https://apileague.com/console/#  
- All you have to do now is execute  
```bash
node index.js
```  
- Depending on your modification of your config.json file, send "&meme" to generate one in the Discord channel  
