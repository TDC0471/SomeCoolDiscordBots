
const Discord = require('discord.js');
const prefix = ';';
const token = 'NzU4MzQzNTM5NTE1NDU3NTg2.X2tkdQ.RgHGrkAnXqvTKajIdSxokck4SMI';
const humanizeduration = require("humanize-duration")

const client = new Discord.Client();


client.login(token);

client.on('ready', () => {
	client.user.setActivity("you do ;invite | 24/7 online soon! ", { type: "WATCHING" });
});



const ball = [':8ball: As I see it, yes. :8ball:', ':8ball: Better not tell you now. :8ball:',  ':8ball: Cannot predict now. :8ball:' , ':8ball: Concentrate and ask again. :8ball:' , ':8ball:  Don’t count on it. :8ball:' , ':8ball: It is certain. :8ball:' , ':8ball: It is decidedly so. :8ball:' , ':8ball: Most likely. :8ball:' , ':8ball: Most likely. :8ball:' , ':8ball: My reply is no. :8ball:' , ':8ball: My sources say no. :8ball:' , ':8ball: Outlook not so good. :8ball:' , ':8ball: Outlook good. :8ball:' , ':8ball: Reply hazy, try again. :8ball:' , ':8ball: Signs point to yes. :8ball:' , ':8ball:  Very doubtful. :8ball:' , ':8ball:  Without a doubt. :8ball:' , ':8ball: You may rely on it. :8ball:' , ':8ball: Yes. :8ball:' , ':8ball: Yes – definitely. :8ball:' , ':8ball: You may rely on it. :8ball:'];







client.on('message', message =>{
  let args = message.content.toLowerCase().substring(prefix.length).split(' ');
  console.log(args);
  
 
  if (args[0] === 'invite') {
	const invitebed = new Discord.MessageEmbed().setColor("#000000").setTitle('Invite page!').addField('Link Below','[To invite press here](https://discord.com/oauth2/authorize?client_id=724766895521398827&scope=bot&permissions=1073217023)');   
	message.channel.send(invitebed)};
   
  
  if (args[0] === 'ping') {message.channel.send('Pong!')};


  if (args[0] === 'pong') {message.reply('Ping!')};


  if (args[0] === 'firework') {message.channel.send('__-----------------------˜”°••°”˜-----------------------__\n__------------------˜”°•.˜”°••°”˜.•°”˜------------------__\n--------˜”°•.˜”°•˜”°•.˜”°••°”˜.•°”˜•°”˜.•°”˜--------\n( ・ω・)o─━・*:・:・゜・:')};


  if (args[0] === 'srcb') {message.channel.send('https://sourceb.in/')};
  
  
  if (args[0] === '8ball') {
	const index = Math.floor(Math.random() * ball.length)
	if (!args[1]) return message.channel.send('If you want an answer, you first must ask a question.');
	message.channel.send(ball[index])};
   
  
  
  if (args[0] === 'repeat') 
   {
	if (!args[1]) return message.channel.send('Give me something to repeat'); else {message.delete();};
   (message.channel.send(args.join(" ").slice(6)))};
  
  // make so mention can only be args2
  //1000000000 is max for 32-bit
  //add a if blocked catch
  if (args[0] === 'dm') {
	let mention = message.mentions.users.first();     
	let arg3 = args[3];
	let fcut;
	let mentionMessage = args.join(" ").slice(fcut);
	message.delete();
	if (!args[1]) return message.channel.send('You must put the user you want to send the message to in the second word, and you must put time in seconds for the message to auto delete or put the word `none` if you dont want it to.').then(m => m.delete({timeout: 15000}));
	//if (args[2] != ' ') return message.channel.send('You must put a space after the mention').then(m => m.delete({timeout: 7000}));
	if (!args[3]) return message.channel.send('You must put time(seconds) for the message to auto delete or put the word `none` if you dont want it to.').then(m => m.delete({timeout: 7000}))
	if (!args[4]) return message.channel.send('You must put a message to send').then(m => m.delete({timeout: 7000}))
	if (!(args[1]).match(/<@![0-9]*>/g)) return message.channel.send('You must metion the user you want to send the message to in the second word').then(m => m.delete({timeout: 7000})); else {fcut = ((args[1]).length) + ((args[3]).length + 5); arg3 = args[3];};
	if (parseInt(args[3]) > 1000000) return message.channel.send('Please put a number equal or lower than `1000000`.').then(m => m.delete({timeout: 5000}))
	if (args[3] === 'none') return mention.send('This is a one way message: \n' + mentionMessage).then(message.channel.send('Your one way message was sent').then(m => m.delete({timeout: 7000})));
	if((args[3]).match(/^[0-9]/g)){
	mention.send('This one way message will self destruct itself in ' + args[3] +' seconds... \n' + mentionMessage).then(m => m.delete({timeout: arg3*1000})).catch(err => (message.channel.send("i work go play now!")))
	message.channel.send('Your one way message was sent').then(m => m.delete({timeout: 5000}));
}
	
	else{ return message.channel.send('You must put time(seconds) for the message to auto delete or put the word `none` if you dont want it to.').then(m => m.delete({timeout: 7000}))}
};
;



  if (args[0] === 'delete') { 
	let deleteAmount;
	if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply('You do not have the `MANAGE_MESSAGES` role');
	if (!args[1]) return message.channel.send('How many messages do you want to Delete?');  
	if ((args[1]).match(/^[0-9]/g)){
	if (parseInt(args[1])> 100) return message.reply('You can only delete 100 messages at a time!');
	if (parseInt(args[1])< 1) return message.reply('I cant delete 0 or less messages'); else {deleteAmount = parseInt(args[1])};
	message.channel.bulkDelete(deleteAmount, true).then(() => {
		message.channel.send('Cleared ' + args[1] + ' messages!').then(m => m.delete({timeout: 2000}));});} else {
		return message.channel.send('You need to put a **number** not a letter or word of messages for me to delete');};};


	if (args[0] === 'stats'){
		  const uptime = humanizeduration(client.uptime)
		  const Statembed = new Discord.MessageEmbed()
		  .setColor("#000000")
		  .setTitle("Stats for Incogware")
		  .addField('`Developer`' , '`TheDankchicken.js#0471`')
		  .addField('`Servers`' , '`'+ client.guilds.cache.size +"`" , true)
		  .addField('`Users`' , '`'+ client.users.cache.size +"`" , true)
		  .addField('`Ping`' , '`' + client.ws.ping + 'ms`' , true)
		  .addField('`Uptime since last update`' , '`' + uptime + '`' , false);
		  message.channel.send(Statembed);};


	if (args[0] === 'random') {
		  let numberargs;
		  function getRandomInt(max) {return Math.floor(Math.random() * Math.floor(max));};
		  if (!args[1]) return message.channel.send('If you want me to pick a number from 0-`number` you must give me a `number`.');
		  if (ParseInt(args[1] > 1000000000)) return message.channel.send('Put a number equal  or lower than `1000000000`');
		  if ((args[1]).match(/^[0-9]/g)){
		  if (ParseInt(args[1]) < 1) return message.reply('0 is that what you want??'); else {numberargs = parseInt(args[1])};
		  message.channel.send('Random number is... ' + getRandomInt(numberargs + 1));}else {return message.channel.send('If you want me to pick a number from 0-`number` you must give me a `number` not a letter.');};};

	

	
	



		 


});
