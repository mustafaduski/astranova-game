const { Bot } = require("grammy");
const express = require("express");

// 1. ڕێکخستنا سێرڤەری دا کو Koyeb نەوەستیت
const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Astranova Bot is Online! 🚀");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// 2. دروستکرنا بۆتی (BOT_TOKEN ژ Koyeb دهێت)
const bot = new Bot(process.env.BOT_TOKEN);

bot.command("start", (ctx) => {
  ctx.reply("ب خێر بێی بۆ یارییا Astranova 🚀\n\nبۆ دەسپێکرنێ کلیک ل سەر دوگمەیا Play بکە:", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Play Game 🎮",
            web_app: { url: "https://astranova-game.netlify.app" } // لێنکێ تە یێ Netlify
          }
        ]
      ]
    }
  });
});

bot.start();
