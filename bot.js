// const TelegramBot = require("node-telegram-bot-api");
// require("dotenv").config();
// // replace the value below with the Telegram token you receive from @BotFather
// const token = process.env.TELEGRAM_BOT_TOKEN;
// const FB_URL = process.env.FRONTEND_LINK;
// // Create a bot that uses 'polling' to fetch new updates
// const bot = new TelegramBot(token, { polling: true });

// // Matches "/echo [whatever]"
// bot.onText(/\/start/, async (msg) => {
//   console.log("start");
//   const chatId = msg.chat.id;
//   const telegramId = msg.from.id;
//   try {
//     await bot.sendMessage(chatId, "Welcome to my bot", {
//       reply_markup: {
//         inline_keyboard: [  
//           [
//             {
//               text: "Open web app",
//               web_app: {
//                 url: FB_URL,
//               },
//             },
//           ],
//         ],
//       },
//     });
//   } catch (e) {
//     console.log(e);
//   }
// });
// // Listen for any kind of message. There are different kinds of
// // messages.


const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();

const token = process.env.TELEGRAM_BOT_TOKEN;
const FB_URL = process.env.FRONTEND_LINK;
const GROUP_LINK = "https://t.me/+y0Pjh0Zgd-U2ZDhh";  // Replace with your actual group link

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, async (msg) => {
  const chatId = msg.chat.id;
  
  try {
    await bot.sendMessage(chatId, "Welcome to my bot! Join our community to chat with other players and start playing the game.", {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "Join the Community",
              url: GROUP_LINK,
            },
          ],
          [
            {
              text: "Open TD",
              web_app: {
                url: FB_URL,
              },
            },
          ],
        ],
      },
    });
  } catch (e) {
    console.log(e);
  }
});
