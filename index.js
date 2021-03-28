const Discord = require('discord.js');
const client = new Discord.Client();
const { exec } = require('child_process');
const ytdl = require('ytdl-core')
const fs = require('fs')
var sleep = require('sleep');
let file = fs.createWriteStream('videos/video.mp4')
let messages = 'zero'
const Mwebhook = require('webhook-discord')
const webhook = new Mwebhook.Webhook('https://discord.com/api/webhooks/825449095783120916/7vnTPK9CpORclLdgtR2s-W0l4phZRIUl0F5TK_A-XvVfOQo-cBVqL7EfZG7OTP0CPUxM')
const config = require('./config.json')
//https://discord.com/api/webhooks/825449095783120916/7vnTPK9CpORclLdgtR2s-W0l4phZRIUl0F5TK_A-XvVfOQo-cBVqL7EfZG7OTP0CPUxM

client.on('ready', async () => {
    console.log(`connected as: ${client.user.username}`)
});

client.on('message', async (message) => {
    
        let messages = message
        
        if (message.content === "!yt-stop") {
            if (!config.plugins.video.enable) {
                message.reply('plugin désarmé.')
                return 0
            }
            exec('taskkill /IM vlc.exe')
        }
        if (message.content.startsWith('!yt-play')) {
            if (!config.plugins.video.enable) {
                message.reply('plugin désarmé.')
                return 0
            }
            if (message.member.voice.channel) {
                if (message.member.voice.channel.id = "825075610505838613") {
                    let args = message.content.split(' ')
                    exec('taskkill /IM vlc.exe')
                    exec(`"C:\\Program Files (x86)\\VideoLAN\\VLC\\vlc.exe" "${args[1]}"`)
                } else {
                    message.reply('Vous devez rejoindre le salon "bot".')
                }
                } else {
                message.reply('Vous devez rejoindre le salon "bot".');
                }

        }
    
})

file.on( 'finish' , function(){
    exec('taskkill /IM vlc.exe')
    exec(`"C:\\Program Files (x86)\\VideoLAN\\VLC\\vlc.exe" "${__dirname}\\videos\\video.mp4" --play-and-exit`)
});

client.login(process.env.DISCORD_TOKEN);
