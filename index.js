const qrcode = require('qrcode-terminal')
const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', async () => {
    console.log('Client is ready!');
    //todo add read data from csv file
    await client.sendMessage("39XXXXXXXXX@c.us", "ciao ")
    await client.sendMessage("39XXXXXXXXX@c.us", "ciao ")
    console.log("finished")
    client.logout()
});

client.initialize();
