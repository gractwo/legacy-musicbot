module.exports = {
  app: {
    px: "XXX",
    token: "XXX",
    playing: "ciepłe dranie",
  },

  opt: {
    DJ: {
      enabled: false,
      roleName: "DJ",
      commands: [
        "back",
        "clear",
        "filter",
        "loop",
        "pause",
        "resume",
        "seek",
        "shuffle",
        "skip",
        "stop",
        "volume",
      ],
    },
    maxVol: 100,
    loopMessage: false,
    discordPlayer: {
      ytdlOptions: {
        quality: "highestaudio",
        highWaterMark: 1 << 25,
      },
    },
  },
};
