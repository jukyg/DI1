const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({ checkUpdate: false });
const express = require('express');
const app = express();

// إعداد سيرفر Express لضمان بقاء السكربت شغال 24/7 على Render
app.get('/', (req, res) => {
  res.send('Account is Online 24/7 with the new Retrowave Presence!');
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Express server is running on port 3000');
});

client.on('ready', async () => {
  console.log(`SUCCESS: Logged in as ${client.user.tag}`);

  // إعداد الـ Rich Presence بالمعلومات والصورة الجديدة
  const r = new Discord.RichPresence()
    .setApplicationId('1476320950323642478') // ID التطبيق الخاص بك
    .setType('PLAYING') 
    .setName('saif ₉₁') 
    .setDetails('ME...') 
    .setState('Watching ˢᵃᶤᶠ ₉₁') 
    .setStartTimestamp(Date.now()) // لبدء عداد الوقت من لحظة التشغيل
    .setAssetsLargeImage('sports-car-mountains-retrowave-synthwave-4k-wallpaper-uhdpaper_com-233_0_k') // الكي الجديد للصورة
    .setAssetsLargeText('saif ₉₁')
    .addButton('ME ?', 'https://discordapp.com/users/731595761988403280') // رابط حسابك
    .addButton('server', 'https://discord.gg/hVNV73CE'); // رابط السيرفر

  client.user.setActivity(r);
  client.user.setPresence({ status: 'online' });
});

client.login(process.env.TOKEN);
