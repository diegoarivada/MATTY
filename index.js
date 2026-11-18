import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';
import initializeClass from './WolframAlpha.js';
dotenv.config();

const wolf = initializeClass(process.env.WOLF);

// discord.js 14: Intents.FLAGS became GatewayIntentBits. MessageContent is needed to read message text
// (turn on "Message Content Intent" for the bot in the Discord Developer Portal).
const client = new Client({
	intents: [ GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent ]
});

client.once('clientReady', () => {
	console.log('The bot is online');
});

client.on('messageCreate', (message) => {
	if (message.content === '!help') {
		message.reply({
			content: ' press ping < more in progress> '
		});
	}
});

client.on('messageCreate', (message) => {
	if (message.content === 'ping') {
		wolf.getShort('2+129').then((value) => {
			message.reply({
				content: value
			});
		}, console.error);
	}
});

client.login(process.env.TOKEN).catch((error) => {
	console.error(error);
});
