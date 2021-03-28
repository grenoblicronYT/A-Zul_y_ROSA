if (message.content.startsWith('!yt-play')) {
    if (message.member.voice.channel) {
        if (message.member.voice.channel.id = "825075610505838613") {
            let args = message.content.split(' ')
            message.reply('Téléchargement en cours...')
            ytdl(args[1])
                .pipe(fs.createWriteStream('videos/video.mp4'));
            message.reply('Terminé.')
            //SetCurrentSceneCollection
        } else {
            message.reply('Vous devez rejoindre le salon "bot".')
        }
      } else {
        message.reply('Vous devez rejoindre le salon "bot".');
      }
}