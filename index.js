const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();

client.login(config.BOT_TOKEN);
//const client = new Discord.Client();

//var someStr = 'He said "Hello, my name is Foo"';
//console.log(someStr.replace(/['"]+/g, ''));
//message.reply(someStr)
//message.replace(/['"]+/g, '')

/*client.on("message", function(message) {

});*/

//client.login(config.BOT_TOKEN);

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
  // var returnedUnit = unitFinder(message);
  var name = unitFinder(message);
  for (i=0;i<unitlimit;i++){
   //console.log(units.UNITS[i].Unit)
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
      const command = message.content.slice(prefix.length);
      if (command === "HD") {
        message.reply("All HD after 1992 know is"+'\n'+"-be shit"+'\n'+"-make shit"+'\n'+"-shit on Bot"+'\n'+"-make shit tier list"+'\n'+"and")
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
    //console.log(ex.EXs[i].Unit)
     if(ex.EXs[i].Unit === name){
      //var modEX = JSON.stringify(ex.EXs[i])
        var modEX = JSON.stringify(ex.EXs[i]).replace(/["]+/g,'')
        modEX = modEX.replace(/[,]+/g,'\n')
        //modEX = modEX.replace(/[ "FIELD4": "",]+/g,'')
        modEX = modEX.replace(/Image:/,'')
        modEX = modEX.replace(/[:]+/g, ': ')
        message.reply(modEX);
        break;
        
    }
  }
});

    client.on("message", function(message) {
      const commandBody = message.content.slice(prefix.length);
      const args = commandBody.split(' ');
      const command = args.shift().toLowerCase();
      if (command === "jst") {
        var d = new Date();
        var date = d.getHours();
        

          message.reply(date)
  }
});
  /*if (command === "ping") {  
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);

  }*/
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
            //console.log(unit)
              //const uJSON = require("./unit-skill.json");
              
              //var skill = unit + "\n" + uJSON.SKILL  + "\n"+ uJSON.EX;
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
            //console.log(unit)
              //const uJSON = require("./unit-skill.json");
              
              //var skill = unit + "\n" + uJSON.SKILL  + "\n"+ uJSON.EX;
            responder = ex;
          }
      
      }
      return responder;
  };