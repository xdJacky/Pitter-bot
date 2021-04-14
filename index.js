const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();

client.login(config.BOT_TOKEN);

client.on("message", function(message) {
  if (message.author.bot) return;
});
const prefix = ".";

client.on("message", function(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
});

client.on("message", function(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  const fs = require('fs');


  let rawdata = fs.readFileSync('unit-skills.json');
  let units = JSON.parse(rawdata);
  var unitlimit = JSON.stringify(units.UNITS.length)
  var name = unitFinder(message);
  for (i=0;i<unitlimit;i++){
    if(units.UNITS[i].Unit === name)
    {
      //console.log()
      var modUnits = JSON.stringify(units.UNITS[i]).replace(/["]+/g, '')
      modUnits = modUnits.replace(/[,]+/g,'\n')
      modUnits = modUnits.replace(/FIELD4:/, "")
      modUnits = modUnits.replace(/Image:/, "")
      message.reply(modUnits);

    break;
    };
 }
});

 client.on("message", function(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
      const commandBody = message.content.slice(prefix.length);
      const args = commandBody.split(' ');
      const command = args.shift().toLowerCase();
  if (command === "github") {
    message.reply("https://github.com/xdJacky/Pitter-bot")
    }
 });

  client.on("message", function(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
      const commandBody = message.content.slice(prefix.length);
      const args = commandBody.split(' ');
      const command = args.shift().toLowerCase();
  if (command === "jst") {
    let date_obj = new Date();
    let hrs = date_obj.getHours() + 9;
    let mins = date_obj.getMinutes();
      if( hrs > "24"){
        hrs = hrs - 24
       var date = "Time:"+hrs+" : "+mins
      }
    message.reply("Japanese Standard Time: " + date)
    }
 });

 client.on("message", function(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
      const commandBody = message.content.slice(prefix.length);
      const args = commandBody.split(' ');
      const command = args.shift().toLowerCase();
    if (command === "u") {
      let date_obj = new Date();
      let hrs = date_obj.getHours() + 9;
      let mins = date_obj.getMinutes();
      if( hrs > "24"){
          hrs = hrs - 24
      var updatehrs = diff(hrs,"15")
      var updatemins = diff(mins,"60")
      message.reply(updatehrs+" : "+updatemins)
       }
    }
 });

 client.on("message", function(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
      const commandBody = message.content.slice(prefix.length);
      const args = commandBody.split(' ');
      const command = args.shift().toLowerCase();
    if (command === "r") {
      let date_obj = new Date();
      let hrs = date_obj.getHours() + 9;
      let mins = date_obj.getMinutes();
      if( hrs > "24"){
          hrs = hrs - 24
      var updatehrs = diff(hrs,"23")
      var updatemins = diff(mins,"60")
      message.reply(updatehrs+" : "+updatemins)
       }
    }
 });

 function diff (num1, num2) {
  if (num1 > num2) {
    return num1 - num2
  } else {
    return num2 - num1
  }
}

 client.on("message", function(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
      const command = message.content.slice(prefix.length);
      if (command === "credits") {
        message.reply("High amount of credits to the Heavens door members and the Moderators of the PPP server for the master doc and thank you Plaub for the original bot")
    }
 });

  client.on("message", function(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  const fs = require('fs');
  let rawdataEX = fs.readFileSync('ex.json');
  let ex = JSON.parse(rawdataEX);
  var exlimit = JSON.stringify(ex.EXs.length)
 // var returnedUnit = unitFinder(message);
    var name = exFinder(message);
    for (i=0;i<exlimit;i++){
     if(ex.EXs[i].Unit === name){
        var modEX = JSON.stringify(ex.EXs[i]).replace(/["]+/g,'')
        modEX = modEX.replace(/[,]+/g,'\n')
        modEX = modEX.replace(/Image:/,'')
        modEX = modEX.replace(/[:]+/g, ': ')
        message.reply(modEX);
        break;
        
    }
  }
});

  function unitFinder (message) {
      const commandBody = message.content.slice(prefix.length);
      const args = commandBody.split(' ');
      const command = args.shift().toLowerCase();

      var commandArray = commandBody.split(" ");
      var responder = "No command recognised";

      if (command === "c") {
         

          if ( commandArray.length > 1){
            responder = "Unit not found";
            var unit = commandArray[1];
            responder = unit;
          }
        }
        return responder;
      }


  function exFinder (message) {
      const commandBody = message.content.slice(prefix.length);
      const args = commandBody.split(' ');
      const command = args.shift().toLowerCase();

      var commandArray = commandBody.split(" ");
      var responder = "No command recognised";

      if (command === "ex") {
         

          if ( commandArray.length > 1){
            responder = "EX not found";
            var ex = commandArray[1];
            responder = ex;
          }
      
      }
      return responder;
  };