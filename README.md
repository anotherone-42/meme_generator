# meme_generator  

XMR adress for donations: 4AJtFkiynSSiRrzcNeD2PkhRnLvd35zPt1PCng5NCDfAExn9cZ9jPnY6Bc3RkadLPLEyMCa7aWcXyL725mmrZ3BcNdSCYuH  
  
Bot discord pour envoyer automatiquement un meme dans un channel en fonction d'une cmd  
Merci à https://apileague.com pour leur API de qualité <3  

Installation:

  - Téléchargez node js:

https://nodejs.org/fr

  - Faites son installation
  - Dans VsCode, ouvrez un terminal et executez:
```bash
npm init
```
  - Puis
```bash
npm i discord.js
```
Et finissez par
```bash
python -m pip install requests
```
  - Dans le fichier config.json, pensez à changer votre clé API discord obtenable en créant un bot sur:
https://discord.com/developers/applications

  - Dans ```meme_generator.py``` changez aussi votre ou vos clé API obtenable(s) sur https://apileague.com/console/#
  - Vous n'avez plus qu'à executer
```bash
node index.js
```
  - Suivant votre modification de votre fichier config.json, envoyez "&meme" pour en générer un dans le chann discord
