const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({ checkUpdate: false });
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Presence is Active!'));
app.listen(process.env.PORT || 3000);

client.on('ready', async () => {
  console.log(`SUCCESS: Logged in as ${client.user.tag}`);

  try {
    const r = new Discord.RichPresence()
      .setApplicationId('1476320950323642478')
      .setType('PLAYING')
      .setName('saif ₉₁')
      .setDetails('ME...')
      .setState('Watching ˢᵃᶤᶠ ₉₁')
      .setStartTimestamp(Date.now())
      // تعديل السطر ليقبل الرابط الخارجي بشكل صحيح
      .setAssetsLargeImage('mp:external/9a9cd61f9dc379f5ff1a918c0f0ff8a2/https/i.pinimg.com/1200x/9a/9c/d6/9a9cd61f9dc379f5ff1a918c0f0ff8a2.jpg')
      .setAssetsLargeText('saif ₉₁')
      .addButton('ME ?', 'https://linktr.ee/povce')
      .addButton('server', 'https://discord.gg/3HzTN5rv');

    client.user.setActivity(r);
    client.user.setPresence({ status: 'online' });
    console.log('Presence set successfully!');
  } catch (err) {
    console.error('Error in Presence:', err);
  }
});

client.login(process.env.TOKEN);
