const { Client } = require('@xhayper/discord-rpc');

const CLIENT_ID = '1509992323881111643';

let client = null;
let connected = false;
let startTimestamp = null;

async function start() {
  if (client) return;
  
  client = new Client({ clientId: CLIENT_ID });
  startTimestamp = Math.floor(Date.now() / 1000);

  client.on('ready', () => {
    connected = true;
    setActivity({
      details: 'Playing CWCTrack',
      largeImageKey: 'og-preview',
      largeImageText: 'CWCTrack',
    });
  });

  client.on('disconnected', () => {
    connected = false;
    setTimeout(() => {
      client = null;
      start().catch(() => {});
    }, 30_000);
  });

  try {
    await client.login();
  } catch (err) {
    client = null;
    setTimeout(() => start().catch(() => {}), 60_000);
  }
}

function setActivity(activity) {
  if (!connected || !client?.user) return;
  client.user.setActivity({
    startTimestamp,
    ...activity,
  });
}

function stop() {
  if (client) {
    client.destroy().catch(() => {});
    client = null;
    connected = false;
  }
}

module.exports = { start, setActivity, stop };