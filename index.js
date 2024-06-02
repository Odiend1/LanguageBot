const Discord = require("discord.js")
const Webhook = require("discord.js")
const fetch = require("node-fetch")
const { Client, Intents, WebhookClient, MessageEmbed, MessageReaction, MessageAttachment } = require('discord.js');
const client = new Discord.Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const botToken = process.env['TOKEN']
const openAiKey = process.env['OPENAI_API_KEY']


const nerdamer = require('nerdamer')
var http = require('http')
var pronouncing = require('pronouncing');
const fs = require('fs')
const pdfparse = require('pdf-parse')
const Database = require("@replit/database")
const db = new Database()
const OpenAI = require('openai');
const openai = new OpenAI();

var online = false;

var userPositions = {};

class Bot {
  constructor(name, pfp){
    this.name = name;
    this. pfp = pfp;
  }
}

var bots = {
  a: new Bot("Alarmbot", "./assets/alarmbot.jpeg")
}

function between(min, max) {
  return Math.floor(
    Math.random() * (max - min) + min
  )
}

const factors = number => [...Array(number + 1).keys()].filter(i=>number % i === 0);

function factorSq(num){
  var f = [factors(num)[1], factors(num)[-2]];
  while(factors(f[-1]).length > 2){
    f.concat([factors(f[-1])[1]]);
    f[-2] = factors(f[-1][-2]);
  }
  return
}

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`)
  online = true;
})
const { exec } = require("child_process");

setTimeout(function(){
  if(!online){
    
exec("kill 1", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});
  }
}, 60000)

var http = require('http');  
http.createServer(function (req, res) {   
  res.write("I'm alive");   
  res.end(); 
}).listen(8080);

function getJoke() {
  return fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=political,racist,sexist")
    .then(res => res.json())
    .then(data => {
      return data ["setup"] + "\n \n" + data["delivery"]
      console.log(data)})
  }



client.on("message", async msg => {
  if(msg.reference != null) msg.channel.messages.fetch(msg.reference.messageId).then(async message => {if(message.author.id === '1246519425834684507' && msg.channel.id !== '1246575578224656486') {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: "You are a sassy, sarcastic language AI named LanguageBot. Don't blatantly say that you're sassy, but implicity portray that trait. Discord users can send you messages. Respond wittily or mockingly to their messages."}, {role: "user", content: msg.content.replace("<@1246519425834684507>", "")}],
      model: "gpt-3.5-turbo",
    });

    msg.reply(completion.choices[0].message.content);
    return;
    }})
  
  if(!msg.author.bot && (!msg.content.startsWith("||") && !msg.content.endsWith("||")) && ((msg.content.startsWith("<@1246519425834684507>")) || msg.channel.id === '1246575578224656486')){
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: "You are a sassy, sarcastic language AI named LanguageBot. Don't blatantly say that you're sassy, but implicity portray that trait. Discord users can send you messages. Respond wittily or mockingly to their messages."}, {role: "user", content: msg.content.replace("<@1246519425834684507>", "")}],
      model: "gpt-3.5-turbo",
    });

    msg.reply(completion.choices[0].message.content);
  }
});

client.login(botToken);