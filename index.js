const SlackBot = require("slackbots");
const axios = require("axios");

const bot = new SlackBot({
  token: "xoxb-1255590225363-1262586185507-hnolWYQPiRr8fAGsGbFy2nvu",
  name: "jokebot",
});

// Start Handler
bot.on("start", () => {
  const params = {
    icon_emoji: ":face_with_monocle:",
  };

  bot.postMessageToChannel("general", "Time to laugh!!!", params);
});
