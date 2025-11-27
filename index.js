const { Client, GatewayIntentBits } = require("discord.js");
const express = require("express");
const app = express();

// Express server to keep bot alive
app.get("/", (req, res) => res.send("Bot is alive!"));
app.listen(3000, () => console.log("Express Running"));

// Discord bot
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on("messageCreate", (msg) => {
    if (msg.content === "!ping") {
        msg.reply("pong!");
    }
});

// BOT TOKEN HERE
client.login(process.env.TOKEN);