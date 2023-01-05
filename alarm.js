const Discord = require("discord.js")
const Webhook = require("discord.js")
const fetch = require("node-fetch")
const { Client, Intents, WebhookClient, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const botToken = process.env['TOKEN']
const cron = require('cron');

var http = require('http');  
http.createServer(function (req, res) {   
  res.write("I'm alive");   
  res.end(); 
}).listen(8080);

message.send("Online")
