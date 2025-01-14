module.exports = (client, message) => {
  if (message.author.bot || message.channel.type === "dm") return;

  const prefix = process.env.PREFIX;

  if (message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  const cmd =
    client.commands.get(command) ||
    client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(command));

  const DJ = client.config.opt.DJ;

  if (cmd && DJ.enabled && DJ.commands.includes(cmd.name)) {
    const roleDJ = message.guild.roles.cache.find(
      (x) => x.name === DJ.roleName
    );

    if (!message.member._roles.includes(roleDJ.id)) {
      return message.channel.send(
        `This command is reserved for members with the ${DJ.roleName} role on the server ${message.author}... try again ? ❌`
      );
    }
  }

  if (cmd && cmd.voiceChannel) {
    if (!message.member.voice.channel)
      return message.channel.send(
        `You're not in a voice channel ${message.author}... try again ? ❌`
      );
    
    if (
      message.guild.members.me.voice.channel &&
      message.member.voice.channelId !== message.guild.members.me.voice.channelId
    )
      return message.channel.send(
        `You are not in the same voice channel ${message.author}... try again ? ❌`
      );
  }

  if (cmd) cmd.execute(client, message, args);
};
