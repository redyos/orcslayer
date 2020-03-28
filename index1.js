const Discord = require("discord.js");
//const fs = require("fs");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
	//console.log(client);
	console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
});

/* var date1 = new Date();
var newDate = date1.getDate(); */
var nCount = 0;
var mCount = 0;
var commandObj = {};
commandObj["say"] = "hello world";
var json = JSON.stringify(commandObj);
//fs.writeFile('myjsonfile.json', json, 'utf8', callback);
/* fs.writeFile('myjsonfile.json', json, 'utf8', function writeFileCallback(err, data) {
    return;
}); */

/*
fs.readFile('myjsonfile.json', 'utf8', function readFileCallback(err, data) {
    if(err) {
        console.log(err);
    } else {
        obj = JSON.parse(data); //now it an object
        obj.table.push({id: 2, square:3}); //add some data
        json = JSON.stringify(obj); //convert it back to json
        fs.writeFile('myjsonfile.json', json, 'utf8', callback); // write it back 
    }
})
*/

client.on("message", async message => {

	if(message.author.bot) return;

	var d = new Date();
	var n = d.getDate();

	var parsedInput = message.content.trim().toLowerCase().replace(/[^a-zA-Z ]/g, "").split(/ +/g);
	//console.log(parsedInput);
	//console.log(message.mentions[0]);
	//console.log(/n+i+g+a+/gm.test('niga'));

	parsedInput.forEach(element => {
		element.replace(/[^a-zA-Z ]/g, "");
		//if(element.match(/n+i+g+a+/gm) || element.match(/n+i+g+e+r+/gm)) {
		if(element.match(/n+i+g+a+/gm) || element.match(/n+i+g+e+r+/gm)) {
			nCount += 1;
		} else if(element == "mickle") {
			mCount += 1;
		}

	})

	if(message.content.indexOf(config.prefix) !== 0) return;

	// Here we separate our "command" name, and our "arguments" for the command. 
	// e.g. if we have the message "+say Is this the real life?" , we'll get the following:
	// command = say
	// args = ["Is", "this", "the", "real", "life?"]

	const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();


	var person;
	if (message.mentions.users.size) {
		person = message.mentions.members.first();
	}

	switch(command) {
		case "slay": {
 			const embed = new Discord.MessageEmbed()
			message.channel.send({embed: {
					//"description": "hello",
					"description": `**${message.author}** slays the massive titan orc **${person}**`,
					"color": 0xFF0000,
					"image": {
						url: "attachment://deadorc.jpg"
					}
				},
				files: [{attachment: 'https://i.imgur.com/mv3OEP3.jpg', name: 'deadorc.jpg'}]
			});
			break;
		}
		case "countercounterorc": {
			if (message.member.roles.exists('id', '629746028936953899')) {
				const embed = new Discord.MessageEmbed()
				message.channel.send({embed: {
						"description": `**${message.author}** counters the counter-orc and orc fucks **${person}** with his massive orc arms!`,
						"color": 0xFF0000,
						"image": {
							url: "attachment://ccorc.jpg"
						}
					},
					files: [{attachment: 'https://i.imgur.com/Jpn75kY.jpg', name: 'ccorc.jpg'}]
				});
			}
			break;
		}
		case "countercountercounterorc":{
			const embed = new Discord.MessageEmbed()
			message.channel.send({embed: {
					//"description": "hello",
					"description": `**${message.author}** counters the counter-counter-orc and surprises **${person}**'s tight orc-hole with a booty blasting of their own`,
					"color": 0xFF0000,
					"image": {
						url: "attachment://sorc.jpg"
					}
				},
				files: [{attachment: 'https://i.imgur.com/rhUlRpw.jpg', name: 'sorc.jpg'}]
			});
			break;
		}
		case "insultorc" :{
			const embed = new Discord.MessageEmbed()
			message.channel.send({embed: {
					//"description": "hello",
					"description": `**${message.author}** begins insulting **${person}** and makes fun of their tiny beta orc pork`,
					"color": 0xFF0000,
					"image": {
						url: "attachment://sad.jpg"
					}
				},
				files: [{attachment: 'https://i.imgur.com/80KjBOD.jpg', name: 'sad.jpg'}]
			});
			break;
		}
		case "highfive" : {
			const embed = new Discord.MessageEmbed()
			message.channel.send({embed: {
					"description": `**${message.author}** gives **${person}** a rad high-five.`,
					"color": 0xFF0000,
					"image": {
						url: "attachment://hf.png"
					}
				},
				files: [{attachment: 'https://i.imgur.com/9a3BbDC.png', name: 'hf.png'}]
			});
			break;
		}
		case "highten" : {
			const embed = new Discord.MessageEmbed()
			message.channel.send({embed: {
					"description": `**${message.author}** gives **${person}** a **SUPER rad** high-ten.`,
					"color": 0xFF0000,
					"image": {
						url: "attachment://ht.jpg"
					}
				},
				files: [{attachment: 'https://i.imgur.com/1w3rxXf.jpg', name: 'ht.jpg'}]
			});
			break;
		}
		case "kiss" : {
			const embed = new Discord.MessageEmbed()
			message.channel.send({embed: {
					"description": `**${message.author}** kisses **${person}**.`,
					"color": 0xFF0000,
					"image": {
						url: "attachment://kiss.gif"
					}
				},
				files: [{attachment: 'https://i.imgur.com/6gPNNax.gif', name: 'kiss.gif'}]
			});
			break;
		}
		case "eatwumble" : {
			const embed = new Discord.MessageEmbed()
			message.channel.send({embed: {
					"description": `**${message.author}** eats Wumble.`,
					"color": 0xFF0000,
					"image": {
						url: "attachment://eatwumble.gif"
					}
				},
				files: [{attachment: 'https://i.imgur.com/vwWzROn.gif', name: 'eatwumble.gif'}]
			});
			break;
		}
		case "eatass" : {
			const embed = new Discord.MessageEmbed()
			message.channel.send({embed: {
					"description": `**${message.author}** *eats* **${person}**'s **ass**.`,
					"color": 0xFF0000,
					"image": {
						url: "attachment://eatass.gif"
					}
				},
				files: [{attachment: 'https://i.imgur.com/vwWzROn.gif', name: 'eatass.gif'}]
			});
			break;
		}
		case "orcimpregnate": {
			if (message.member.roles.exists('id', '629746028936953899') || message.member.roles.exists('id', '629746023564181534')) {
				const embed = new Discord.MessageEmbed()
				message.channel.send({embed: {
						"description": `**${person}** is held down by the massive titan orc and made a breeding cow for the orc army`,
						"color": 0xFF0000,
						"image": {
							url: "attachment://impregnate.gif"
						}
					},
					files: [{attachment: 'https://i.imgur.com/OiKDwMF.gif', name: 'impregnate.gif'}]
				});
			}
			break;
		}
		case "feet": {
			if (message.author.id == '84399913076531200') {
				const embed = new Discord.MessageEmbed()
				message.channel.send({embed: {
						"description": `**${message.author}** asks **${person}** to show toes or get the fuck out.`,
						"color": 0xFF0000,
						"image": {
							url: "attachment://feet.gif"
						}
					},
					files: [{attachment: 'https://i.imgur.com/7Qs78Oi.gif', name: 'feet.gif'}]
				});
			}
			break;
		}
		case "gm": {
			const embed = new Discord.MessageEmbed()
			message.channel.send({embed: {
					"description": `${message.author} wishes all the amazing members of Euphoria a good morning.`,
					"color": 0xFF0000,
					"image": {
						url: "attachment://gm.gif"
					}
				},
				files: [{attachment: 'https://i.imgur.com/MxDjHiX.gif', name: 'gm.gif'}]
			});
		break;
		}
		case "ncount": {
			//let out = "Today's n-word count is " + ncount;
			const embed = new Discord.MessageEmbed()
			message.channel.send({embed: {
					"description": `Today's n-word count is ` + nCount + `.`,
					"color": 0xFF0000,
				},
			});
		break;
		}
		case "mcount": {
			//let out = "Today's n-word count is " + ncount;
			const embed = new Discord.MessageEmbed()
			message.channel.send({embed: {
					"description": `Today's m-word count is ` + mCount + `.`,
					"color": 0xFF0000,
				},
			});
		break;
		}
		case "summonpickle": {
			const embed = new Discord.MessageEmbed()
			message.channel.send({embed: {
					//"description": `**${message.author}** thinks bullying Pickle is funny. Leave her alone.`,
					"color": 0xFF0000,
					"image": {
						url: "attachment://pickle.png"
					}
				},
				files: [{attachment: 'https://i.imgur.com/72Mol2f.png', name: 'pickle.png'}]
			});
		break;
		}
		case "summonmizi": {
			const embed = new Discord.MessageEmbed()
			message.channel.send({embed: {
					"description": `**${message.author}** wants everyone to check out this cute femboy!`,
					"color": 0xFF0000,
					"image": {
						url: "attachment://mizi.png"
					}
				},
				files: [{attachment: 'https://i.imgur.com/zlx8hh6.png', name: 'mizi.png'}]
			});
		break;
		}
		case "summonjem": {
			const embed = new Discord.MessageEmbed()
			message.channel.send({embed: {
					"color": 0xFF0000,
					"image": {
						url: "attachment://jem.png"
					}
				},
				files: [{attachment: 'https://i.imgur.com/DPi1Q5n.png', name: 'jem.png'}]
			});
		break;
		}
		case "cocksize": {
			let size = Math.floor(Math.random() * 10)
			var text = "";
			if(message.member.roles.exists('id', '629745908136804362') || message.member.roles.exists('id', '629746041209487389')) {
				text = "vagina depth";629746041209487389
			} else {
				text = "cock size";
			}
			const embed = new Discord.MessageEmbed()
			message.channel.send({embed: {
					"description": `**${message.author}**'s ` + text + ` is ` + size + ` inches.`,
					"color": 0xFF0000,
				},
			});
		break;
		}
		case "simp": {
			let size = Math.floor(Math.random() * 14)
			const embed = new Discord.MessageEmbed()
			message.channel.send({embed: {
					"description": `**${person}** simp.`,
					"color": 0xFF0000,
				},
			});
		break;
		}
        // !makecmd simp
/*         case "makecmd" : {
            console.log(message.attachments);
			const embed = new Discord.MessageEmbed()
			message.channel.send({embed: {
					"description": `**${message.author}** gives ` + `**${message.mentions.members[0]}**` + ` a **SUPER rad** high-ten.`,
					"color": 0xFF0000,
					"image": {
						url: "attachment://ht.jpg"
					}
				},
				files: [{attachment: 'ht.jpg', name: 'ht.jpg'}]
			});
			break;
		} */
	}

});

client.login(config.token);