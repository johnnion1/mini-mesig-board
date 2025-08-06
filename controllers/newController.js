async function newController(req, res) {
  if (req.url === "/") {
    res.render("new", { links: links });
  }
}
module.exports = newController;
