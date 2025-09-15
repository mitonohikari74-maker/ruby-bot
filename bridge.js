// bridge.js
const { Client } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const axios = require("axios");

const client = new Client();

client.on("qr", qr => {
    qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
    console.log("WhatsApp client siap!");
});

client.on("message", async msg => {
    try {
        let res = await axios.post("http://localhost:4000/message", {
            from: msg.from,
            text: msg.body
        });

        if (res.data.reply) {
            client.sendMessage(msg.from, res.data.reply);
        }
    } catch (err) {
        console.error(err);
    }
});

client.initialize();
