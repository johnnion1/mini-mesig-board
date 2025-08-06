const links = require("../links");

async function getIndex(req, res) {
  if (req.url === "/") {
    res.render("index", {
      title: "Mini Mesigboard",
      links: links,
      messages: res.locals.messages,
    });
  }
}
async function getMessage(req, res) {
  res.render("message", {
    title: "View message",
    links: links,
    message: res.locals.message,
    totalMessages: res.locals.totalMessages,
    first: res.locals.first,
    last: res.locals.last,
  });
}

module.exports = { getIndex, getMessage };
