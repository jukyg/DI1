const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({ checkUpdate: false });
const express = require('express');
const app = express();

// سيرفر Express لضمان بقاء السكربت شغال 24/7 على Render
app.get('/', (req, res) => {
  res.send('Account is now 24/7 Online with Rich Presence!');
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running on port 3000');
});

client.on('ready', async () => {
  console.log(`SUCCESS: Logged in as ${client.user.tag}`);

  // إعداد الـ Rich Presence بالمعلومات التي طلبتها بدقة
  const r = new Discord.RichPresence()
    .setApplicationId('1476320950323642478') // معرف تطبيقك
    .setType('PLAYING') 
    .setName('saif ₉₁') 
    .setDetails('ME...') 
    .setState('Watching ˢᵃᶤᶠ ₉₁') 
    .setStartTimestamp(new Date('2026-02-26T00:01:14')) // الوقت كما في الصورة
    .setAssetsLargeImage('car') // اسم الصورة في Assets
    .setAssetsLargeText('saif ₉₁')
    .setParty({
        max: 2,
        current: 2,
    })
    .addButton('ME ?', 'https://linktr.ee/povce') // الرابط الأول
    .addButton('server', 'https://discord.gg/3HzTN5rv'); // الرابط الثاني

  client.user.setActivity(r);
  client.user.setPresence({ status: 'online' });
  console.log('Presence has been set successfully!');
});

client.login(process.env.TOKEN);
