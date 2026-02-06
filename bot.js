const { Bot } = require("grammy");
const express = require("express");

// 1. دروستكرنا سێرڤه‌رێ Express دا كو Koyeb نه‌وه‌ستیت
const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Astranova Bot is Running Successfully! 🚀");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// 2. دروستكرنا بۆتێ تێلێگرامێ
// تێبینی: ل سه‌ر Koyeb مه‌ BOT_TOKEN دانا، ئه‌ڤجا لێره‌ ده‌ستكاریێ نه‌كه‌
const bot = new Bot(process.env.BOT_TOKEN);

// فه‌رمانا /start
bot.command("start", (ctx) => {
  ctx.reply("ب خێر بێی بۆ بۆتێ فه‌رمی یێ یارییا Astranova 🚀\n\nكلیك ل سه‌ر دوگمه‌یا خوارێ بكه‌ بۆ ده‌سپێكرنێ:", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Play Game 🎮",
            web_app: { url: "https://astranova-game.netlify.app" }
          }
        ]
      ]
    }
  });
});

// ده‌سپێكرنا بۆتی
bot.start();
console.log("Bot started...");