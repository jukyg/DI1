const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({ checkUpdate: false });
const express = require('express');
const app = express();

// سيرفر صغير لضمان بقاء السكربت شغال على ريندر
app.get('/', (req, res) => {
  res.send('Presence is Active 24/7!');
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running...');
});

client.on('ready', async () => {
  console.log(`SUCCESS: Logged in as ${client.user.tag}`);

  const r = new Discord.RichPresence()
    .setApplicationId('1476320950323642478') // معرف التطبيق
    .setType('PLAYING') 
    .setName('ˢᵃᶤᶠ  ₉₁') 
    .setDetails('ME...') 
    .setState('Watching ˢᵃᶤᶠ ₉₁') 
    .setStartTimestamp(Date.now()) 
    .setAssetsLargeImage('car') // الاسم الجديد الذي وضعته في الموقع
    .setAssetsLargeText('saif ₉₁')
    .addButton('ME ?', 'https://linktr.ee/povce') // رابطك
    .addButton('server', 'https://discord.gg/3HzTN5rv'); // رابط سيرفرك

  client.user.setActivity(r);
  client.user.setPresence({ status: 'online' });
});

client.login(process.env.TOKEN);
