const { Router } = require("express");
const { getIndex, getMessage } = require("../controllers/indexController");
const CustomNotFoundError = require("../errors/CustomNotFoundError");
const messages = [
  {
    text: "Hello there,",
    user: "Obi",
    added: new Date(),
    id: 0,
  },
  {
    text: "Morning good!",
    user: "Gundolf",
    added: new Date(),
    id: 1,
  },
  {
    text: "I thought you were playin!",
    user: "Peter Man",
    added: new Date(),
    id: 2,
  },
  {
    text: "Hello warm seat is a happy seat.",
    user: "I-sit-on-you",
    added: new Date(),
    id: 3,
  },
];
const indexRouter = Router();
// NO

indexRouter.use((req, res, next) => {
  // NO

  if (req.url === "/") {
    res.locals.messages = messages;
    // NO
    /* do this in indexController instead: 
    exports.usersListGet = (req, res) => {
  res.render("index", {
    title: "User list",
    users: usersStorage.getUsers(), */
  }
  next();
});
indexRouter.get("/", getIndex);

indexRouter.use("/messages/:msgId", (req, res, next) => {
  const messageId = req.params.msgId;
  const message = messages.find((msg) => msg.id === Number(messageId));

  if (!message) {
    throw new CustomNotFoundError();
  }
  res.locals.first = message == messages[0];
  res.locals.last = message == messages[messages.length - 1];
  res.locals.message = message;
  res.locals.totalMessages = messages.length;
  next();
});
indexRouter.get("/messages/:msgId", getMessage);

indexRouter.get("/new", (req, res) => {
  res.render("form", { heading: "Write a new Message:" });
});

indexRouter.post("/new", (req, res) => {
  messages.push({
    user: req.body.authorName,
    text: req.body.messageContent,
    added: new Date(),
    id: messages.length,
  });
  res.redirect("/");
});

module.exports = { indexRouter, messages };
