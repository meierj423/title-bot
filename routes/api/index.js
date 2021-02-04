const path = require("path");
const router = require("express").Router();
const titleRoutes = require("./titles");

// Title routes
router.use("/titles", titleRoutes);

// For anything else, render the html page
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
