const Discord = require("discord.js")
const Webhook = require("discord.js")
const fetch = require("node-fetch")
const { Client, Intents, WebhookClient, MessageEmbed, MessageReaction, MessageAttachment } = require('discord.js');
const client = new Discord.Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const botToken = process.env['TOKEN']
const cron = require('cron');
require
var jCount = 0;
var wCount = 0;
var oCount = 0;
var answer = 1;
const fEmbed = new MessageEmbed()
	.setTitle('Press F to Pay Respects')
	.setColor('#ff0000');
var fMsg = 0;
var fCh;
var grid = Array("´&tl´", "´&tm´", "´&tr´", "´&ml´", "´&mc´", "´&mr´", "´&bl´", "´&bc´", "´&br´");
const nerdamer = require('nerdamer')
var http = require('http')
var pronouncing = require('pronouncing');
const fs = require('fs')
const pdfparse = require('pdf-parse')
const Database = require("@replit/database")
const db = new Database()

const generalSci = fs.readFileSync("./Science Bowl/Science Bowl General Questions.pdf")

var online = false;

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

function randomAlgebra(){
  let num1 = between(1,7) 
  let num2 = between(-25, 26)
  var num3 = between(0,51)
  while((num3-num2) % num1 !== 0){
    num3 = between(0,51)
  }
  return num1.toString() + "x + " +  num2.toString() + " = " + num3.toString();
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


function sciBowl(){
  pdfparse(generalSci).then(function(data) {
    return data.text
  })
}

client.once("ready", () => {
  let alarm = new cron.CronJob('00 50 11 * * *', () => {
    const guild = client.guilds.cache.get('id');
    const channel = '951886530492895302';
    /*(client.channels.cache.get('951886530492895302')).send('<@703017064675409952>')
  });*/
    
    (client.channels.cache.get('951886530492895302')).createWebhook('Alarmbot', {
  avatar: 'https://th.bing.com/th/id/R.ae968973d171146da48b31d5d30690e2?rik=vvVDK3tz0ZZX1g&pid=ImgRaw&r=0'
})
  .then(webhook => webhook.send('Wakey wakey, <@703017064675409952>! Rise and shine!'))
  .catch(console.error)
    client.channels.cache.get('951886530492895302').fetchWebhooks().then((webhooks) => {
       webhooks.forEach((wh) => wh.delete());
  });
  })
  alarm.start()
client.channels.cache.get('951886530492895302').fetchWebhooks().then((webhooks) => {
       webhooks.forEach((wh) => wh.delete());
  });
  
});

client.on("message", async msg => {
  if(msg.content.startsWith("&p") || msg.content.startsWith("&ping")){
    client.channels.cache.get(msg.content.split(" ")[1]).createWebhook("god of nothing", "https://cdn.discordapp.com/avatars/736031412033028157/4618b6434e9bc618a4dfc20d9c03b042.webp?size=2048").then(webhook => { webhook.send("@everyone").then(message => {
      message.delete();
      msg.delete();
    }) 
    })
  }
  if(msg.content.startsWith("&b") || msg.content.startsWith("&bash")){
    var args = msg.content.split(" ");
    if(args[1].toLowerCase() === "echo"){
      msg.channel.createWebhook("Bashbot", "").then(webhook => {
     if(args.length > 1) webhook.send(args.slice(2).join(" "))
        else webhook.send("<:space:971229172485730315>")
    })
    }
  }
  if(msg.content === "&o"){
    msg.channel.createWebhook("Omegabot", "https://symbolsage.com/wp-content/uploads/2020/08/ouroboros-symbol.jpg").then(webhook => {
      webhook.send("It's the beginning of the end! Time to come full-circle!")
    })
 }
  if(msg.content.startsWith("&i")){
    msg.channel.createWebhook("i-bot", "https://www.freebiefindingmom.com/wp-content/uploads/2021/03/free_printable_gothic_calligraphy_lowercase_letters_gothic_calligraphy_lowercase_I.jpg").then(webhook => {
      if(msg.content === "&i"){
      webhook.send("√-1");
      }
      else{
        
      }
    })
  }
  if(msg.content.match(" ")){
    if(msg.content.split(" ")[0] === "&c" || msg.content.split(" ")[0] === "&chr" || msg.content.split(" ")[0] === "&char"){
      if(msg.attachments !== null){
        let args = msg.content.split(" ");
        if(args[1] === "open"){
          if(!args[2].endsWith(".chr")) args[2] = args[2] + ".chr";
        if(fs.existsSync("./chars/" + args[2])){
          fs.writeFile("./chars/charpngs" + args[2].slice(0, -4) + ".png", fs.readFileSync("./chars/" + args[2]), (err) => {console.log(err)})
          msg.channel.createWebhook("Charbot", "https://static.wikia.nocookie.net/characters/images/7/79/9c3c107fb1e09cd7786b283788cf49d8.png").then(webhook => {
            webhook.send({files: ["./chars/charpngs/" + args[2].slice(0, -4) + ".png"]})
        })
        }
          else{
            msg.channel.send("That character (.chr) file does not exist. Try creating it with the ´&char <character name>´ command.")
          }
        }
        else{
        //msg.reply(Array.from(msg.attachments.values())[0].url)
        let response = await fetch(Array.from(msg.attachments.values())[0].url);
        if(response.ok){
          var text = await response.text();
          //console.log(response.text())
        fs.writeFile("./chars/" + args[1] + ".chr", text, (err) => {console.log(err)});
        msg.channel.createWebhook("Charbot", "https://static.wikia.nocookie.net/characters/images/7/79/9c3c107fb1e09cd7786b283788cf49d8.png").then(webhook => {
          webhook.send({content: "-", files: ["./chars/" + args[1] + ".chr"]})});
        }
        else{
          msg.channel.send(response.statusText);
        }
        msg.channel.fetchWebhooks().then((webhooks) => {
       webhooks.forEach((wh) => wh.delete())
    });
      }
        }
      else{
        msg.reply("Please attach a file to be the contents of your character file.")
      }
      }
      }
  
  if(msg.content === "&quiz"){
  let q = randomAlgebra()
  msg.reply(q)
  answer = nerdamer("solve(" + q.split(" ").join("") + ", x)").toString()
  msg.reply(answer)
  }
  if(msg.content.indexOf("&sci") === 0){
    if(msg.content.length <= 5){
    await pdfparse(generalSci).then(async function(data) {
    let questions = data.text.replace("Science BowlGENERALSCIENCE", "").split("GENR-93;")
    let qNum = between(0, questions.length - 1)
    msg.reply(questions[qNum].slice(0, questions[qNum].indexOf("ANSWER:")))
    db.set("answer", questions[qNum].slice( questions[qNum].indexOf("ANSWER:") + 7))
    //msg.reply(sciBowl())
    })
  }
  else{
    db.get("answer").then(value => {
      msg.reply(value)
    })
  }
  }
})

/*client.on('messageUpdate', (oldMsg, newMsg) => {
  if(!newMsg.webhookId && !newMsg.author.bot){
    newMsg.channel.createWebhook('Exposebot', {avatar: 'https://th.bing.com/th/id/OIP.6xzSMSCmEUpg_nB4mBSC7gHaG9?w=198&h=164&c=7&r=0&o=5&dpr=1.25&pid=1.7'}).then(webhook => {
      webhook.send("<@" + newMsg.author.id + '> is about to get ***EXPOSED!*** They edited their message! \n\nTheir message originally said,\n"' + oldMsg.content + '". \n\nNow, it says,\n"' + newMsg.content + '". \n\nHa, get ***EXPOSED!***')
    
    })
    newMsg.channel.fetchWebhooks().then((webhooks) => {
       webhooks.forEach((wh) => wh.delete())
    });
  }
});
*/
client.on("message", async msg => {
  if(msg.channel.type === "GUILD_TEXT"){
  if(msg.channel.id === "994644890262704229" && (msg.author.id !== "754068199162511460" && msg.author.id !== "204255221017214977")){
    try{
    msg.delete();
    }
    catch(e){
      msg.reply(e)
    }
  }
  }
  if(msg.author.id === "754350217876340816"){
    msg.channel.createWebhook('Alarmbot', {
  avatar: 'https://th.bing.com/th/id/R.ae968973d171146da48b31d5d30690e2?rik=vvVDK3tz0ZZX1g&pid=ImgRaw&r=0'
})
  .then(webhook => webhook.send("Literally nobody likes you"))
  .catch(console.error)
    msg.channel.fetchWebhooks().then((webhooks) => {
       webhooks.forEach((wh) => wh.delete())
    });
  }
})

client.on("message", msg => {
  if(msg.content === "&tictactoe" || msg.content === "&ttt" || msg.content === "&t"){
    msg.channel.createWebhook('TicTacToeBot', {
  avatar: 'https://th.bing.com/th/id/R.1aba155e09372104a43194842d5d1dc1?rik=b172jUUzEjWw9Q&riu=http%3a%2f%2fimages2.wikia.nocookie.net%2f__cb20130120180235%2fclubpenguin%2fimages%2fb%2fb3%2fTestbot_Trio_stamp_2.png&ehk=G8hjxNezNVPEu1S5l6yHy%2b4trKvOXczLtiV1ltpCmEQ%3d&risl=&pid=ImgRaw&r=0'
})
  .then(webhook => webhook.send("+---+---+---+\n| " + grid[0] + " | " + grid[1] + " | " + grid[2] + " |\n+---+---+---+\n| " + grid[3] + " | " + grid[4] + " | " + grid[5] + " |\n+---+---+---+\n| " + grid[6] + " | " + grid[7] + " | " + grid[8] + " |\n+---+---+---+" ))
  .catch(console.error)
  msg.channel.fetchWebhooks().then((webhooks) => {
       webhooks.forEach((wh) => wh.delete());
  });
  
}});

/*  client.on("message", msg => {
if (msg.channel.id === '951886530492895302') {
  if(jCount > 17){
    
   
    msg.channel.createWebhook('TicTacToeBot', {
  avatar: 'https://th.bing.com/th/id/R.1aba155e09372104a43194842d5d1dc1?rik=b172jUUzEjWw9Q&riu=http%3a%2f%2fimages2.wikia.nocookie.net%2f__cb20130120180235%2fclubpenguin%2fimages%2fb%2fb3%2fTestbot_Trio_stamp_2.png&ehk=G8hjxNezNVPEu1S5l6yHy%2b4trKvOXczLtiV1ltpCmEQ%3d&risl=&pid=ImgRaw&r=0'
})
  .then(webhook => webhook.send(""))
  .catch(console.error)
  jCount = 0;
     msg.channel.fetchWebhooks().then((webhooks) => {
       webhooks.forEach((wh) => wh.delete());
  })
  }
  else{
    jCount++;
  }
} 
});*/

client.on("message", msg => {
  if (msg.content === "&test"){ 
   msg.reply("Ready and online!")
    msg.channel.createWebhook('TicTacToeBot', {
  avatar: 'https://th.bing.com/th/id/R.1aba155e09372104a43194842d5d1dc1?rik=b172jUUzEjWw9Q&riu=http%3a%2f%2fimages2.wikia.nocookie.net%2f__cb20130120180235%2fclubpenguin%2fimages%2fb%2fb3%2fTestbot_Trio_stamp_2.png&ehk=G8hjxNezNVPEu1S5l6yHy%2b4trKvOXczLtiV1ltpCmEQ%3d&risl=&pid=ImgRaw&r=0'
})
  .then(webhook => webhook.send("Webhooks are active!"))
  .catch(console.error)
  msg.channel.fetchWebhooks().then((webhooks) => {
       webhooks.forEach((wh) => wh.delete());
  
});
}});


client.on("message", msg => {
  if(msg.content.toLowerCase().match('gay')){
    if(msg.author.bot) return;
    msg.channel.createWebhook('Gaybot', {avatar: 'https://image.tmdb.org/t/p/w500/y4DGEQpqr89xKmi413S4hDoqAKS.jpg'}).then(webhook => webhook.send('\<:tienes_gay:994272324448694332>'));
    msg.channel.fetchWebhooks().then((webhooks) => {
       webhooks.forEach((wh) => wh.delete());
});
  }
  if (msg.content === "&w" || msg.content === "&wish"){ 
   
    msg.channel.createWebhook('Wishbot', {
  avatar: 'https://i.imgur.com/QztIcmt.jpeg'
})
  .then(webhook => webhook.send("Enter a wish after the `wish` command!"))
  .catch(console.error)
  
msg.channel.fetchWebhooks().then((webhooks) => {
       webhooks.forEach((wh) => wh.delete());
});
if (msg.content.match("&w") !== null || msg.content.match("&wish") !== null) {
  
    if (msg.webhookID){
      
    }
  else{
    if(msg.content === "&w" || msg.content === "&wish"){
      
    }
    else{
   
    msg.channel.createWebhook('Wishbot', {
  avatar: 'https://i.imgur.com/QztIcmt.jpeg'
})
  .then(webhook => webhook.send("Sorry, I don't have the capability to do that... Have this rat instead! 🐀"))
  .catch(console.error)
  
    
  
    }}
  msg.channel.fetchWebhooks().then((webhooks) => {
       webhooks.forEach((wh) => wh.delete());
});
  
}}

  if(/*oCount > 25 || */msg.content === "&soul" || msg.content === "&s"){
    msg.channel.createWebhook('Soulbot', {avatar: 'https://tel.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2FTEL.2Enews.2F2018.2F01.2F11.2Fed2046bd-8d8e-4730-88a1-387497ba43bc.2Epng/1200x500/crop-from/top/quality/80/ghostbot-enfin-une-appli-qui-vous-debarrasse-de-vos-rencards-pourris.jpg'}).then(webhook => {
      webhook.send('OOoooOOOoooOOOooOOOOoOooOOOOOOoooOOoOOoOOOOOoooOOOoooOOOooOOOOoOooOOOOOOoooOOoOOoOOOOOoooOOOoooOOOooOOOOoOooOOOOOOoooOOoOOoOOOOOoooOOOoooOOOooOOOOoOooOOOOOOoooOOoOOoOOOOOoooOOOoooOOOooOOOOoOooOOOOOOoooOOoOOoOOOOOoooOOOoooOOOooOOOOoOooOOOOOOoooOOoOOoOOOOOoooOOOoooOOOooOOOOoOooOOOOOOoooOOoOOoOOOOOoooOOOoooOOOooOOOOoOooOOOOOOoooOOoOOoOOOOOoooOOOoooOOOooOOOOoOooOOOOOOoooOOoOOoOOOOOoooOOOoooOOOooOOOOoOooOOOOOOoooOOoOOoOOOOOoooOOOoooOOOooOOOOoOooOOOOOOoooOOoOOoOOOOOoooOOOoooOOOooOOOOoOooOOOOOOoooOOoOOoOOOOOoooOOOoooOOOooOOOOoOooOOOOOOoooOOoOOoOOOOOoooOOOoooOOOooOOOOoOooOOOOOOoooOOoOOoOOOOOoooOOOoooOOOooOOOOoOooOOOOOOoooOOoOOoOOOOOoooOOOoooOOOooOOOOoOooOOOOOOoooOOoOOoOOOOOoooOOOoooOOOooOOOOoOooOOOOOOoooOOoOOoOOOOOoooOOOoooOOOooOOOOoOooOOOOOOoooOOoOOoOOOOOoooOOOoooOOOooOOOOoOooOOOOOOoooOOoOOoOOOOOoooOOOoooOOOooOOOOoOooOOOOOOoooOOoOOoOOOOOoooOOOoooOOOooOOOOoOooOOOOOOoooOOoOOoOOOOOoooOOOoooOOOooOOOOoOooOOOOOOoooOOoOOoOOOOOoooOOOoooOOOooOOOOoOooOOOOOOoooOOoOOoOOOOOoooOOOoooOOOooOOOOoOooOOOOOOoooOOoOOoOOOOOoooOOOoooOOOooOOOOoOooOOOOOOoooOOoOOoOOOOOoooOOOoooOOOooOOOOoOooOOOOOOoooOOoOOoOOOOOoooOOOoooOOOooOOOOoOooOOOOOOoooOOoOOoOOOOOoooOOOoooOOOooOOOOoOooOOOOOOoooOOoOOoOOOOOoooOOOoooOOOooOOOOoOooOOOOOOoooOOoOOoOOOOOoooOOOoooOOOooOOOOoOooOOOOOOoooOOoOOoOOOOOoooOOOoooOOOooOOOOoOooOOOOOOoooOOoOOoOOOOOoooOOOoooOOOooOOOOoOooOOOOOOoooOOoOOoOOOOOoooOOOoooOOOooOOOOoOooOOOOOOoooOOoOOoOOOOOoooOOOoooOOOooOOOOoOooOOOOOOoooOOoOOoOOOOOoooOOOoooOOOooOOOOoOooOOOOOOoooOOoOOoOOOOOoooOOOoooOOOooOOOOoOooOOOOOOoooOOoOOoOOO').then(sent => sent.delete());
    })
    msg.channel.fetchWebhooks().then((webhooks) => {
       webhooks.forEach((wh) => wh.delete());
});
    oCount = 0;
  }
  else{
    oCount++;
  }

});

client.on("message", msg => {

  let dumb = between(1, 71)
  if(dumb === 1){
    let word = msg.content.split(" ")
    if(Array.isArray(word) && word.length > 1){
      let ms = between(1, msg.content.length)
                                              }
  }
  if(msg.content.length < 500){
    let words = msg.content.split(" ")
    let syl = 0;
    let check1 = false;
    let check2 = false;
    let check3 = false;
    let line1 = ""
    let line2 = ""
    let line3 = ""
    words.forEach(el => {
      syl += pronouncing.syllableCount(pronouncing.phonesForWord(el.toLowerCase())[0]);
      
      if(syl < 6){
        line1 = line1 + el+ " " 
      }
      else if(syl < 13){
        line2 = line2  + el+ " "
      }
      else{
        line3 = line3  + el+ " "
      }
      if(syl === 5){
        check1 = true
      }
      if(syl === 12){
        check2 = true
      }
      if(syl === 17){
        check3 = true
      }
      if(syl > 17){
        check3 = false
      }
    })
    if(check1 === true && check2 === true && check3 === true){

       msg.channel.createWebhook('Haikubot', {
  avatar: 'https://www.buyourobot.com/wp-content/uploads/edd/2017/03/2165_cutan_thumb.jpg'
})
  .then(webhook => webhook.send(`${line1}\n${line2}\n${line3}`))
  .catch(console.error)
      
  msg.channel.fetchWebhooks().then((webhooks) => {
       webhooks.forEach((wh) => wh.delete());
});
    }
    //if(!msg.author.bot) msg.reply(msg.content)
  }
})

client.on("message", msg => { 
   
  if (msg.content === "&joke" || msg.content === "&j"){
  msg.channel.createWebhook('Jokebot', {
  avatar: 'https://th.bing.com/th/id/OIP.jJ_-wHi8WwI0xkrIQdjqRAHaHK?w=182&h=176&c=7&r=0&o=5&dpr=1.25&pid=1.7'
})
  .then(webhook => getJoke().then(joke => webhook.send(joke)))
  .catch(console.error)
       msg.channel.fetchWebhooks().then((webhooks) => {
       webhooks.forEach((wh) => wh.delete());
  
  })
}
});


client.on("message", msg => { 

   
  if (msg.content === "&f" || msg.content === "rip" || msg.content === "RIP" || msg.content === "Rip" || msg.content === "f" || msg.content === "F"){
  msg.channel.createWebhook('F-bot', {
  avatar: 'https://th.bing.com/th/id/OIP.OLNiwIGdbwMMUMXpxwf8fwHaIB?w=170&h=185&c=7&r=0&o=5&dpr=1.25&pid=1.7'
})
  .then(webhook => webhook.send({
    content: 'Press F to Pay Respects',
    author: msg.author.id,
    avatarURL: 'https://th.bing.com/th/id/OIP.OLNiwIGdbwMMUMXpxwf8fwHaIB?w=170&h=185&c=lol7&r=0&o=5&dpr=1.25&pid=1.7',
    //embeds: [fEmbed],
    //reaction: '🇫',
    
  }));
    fCh = msg.channel.id
    

    
       msg.channel.fetchWebhooks().then((webhooks) => {
       webhooks.forEach((wh) => wh.delete());
});
}//});

//client.on("message", msg => { 
if (msg.content === "Press F to Pay Respects"){
msg.react('🇫')
}
});

client.on("message", msg => { 
  
  if ((msg.content.match("69") !== null || msg.content === "69") && msg.content.match("<:") === null){
    if(msg.content === '<:tienes_gay:994272324448694332>') return;
  msg.channel.createWebhook('Nicebot', {
  avatar: 'https://th.bing.com/th/id/OIP.ctlWRHfxfdLixuJ7gb_3EQHaGo?pid=ImgDet&rs=1'
})
  .then(webhook => webhook.send("Magic Number Detected. Nice."));
       msg.channel.fetchWebhooks().then((webhooks) => {
       webhooks.forEach((wh) => wh.delete());
      });
  
}});

client.on("message", msg => { 
if (msg.content === "Magic Number Detected. Nice."){
  msg.react('🇳')
  msg.react('🇮')
  msg.react('🇨')
  msg.react('🇪')
}
});

client.login(botToken);