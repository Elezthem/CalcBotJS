const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Бот готов!`);
});

client.on('message', (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith('.calc')) {
    const args = message.content.slice('.calc'.length).trim().split(' ');

    if (args.length !== 3) {
      message.reply('Неверный формат. Используйте: .calc число оператор число');
      return;
    }

    const num1 = parseFloat(args[0]);
    const operator = args[1];
    const num2 = parseFloat(args[2]);

    if (isNaN(num1) || isNaN(num2)) {
      message.reply('Пожалуйста, введите числа для вычисления.');
      return;
    }

    let result;

    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        message.reply('Неверный оператор. Используйте: +, -, *, /');
        return;
    }

    message.reply(`Результат: ${result}`);
  }
});

const token = 'Ваш_токен';
client.login(token);
