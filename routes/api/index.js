const path = require("path");
const router = require("express").Router();
const openGraphRoutes = require("./opengraph");

// OpenGraph Routes
router.use("/opengraph", openGraphRoutes);

// For anything else, render the html page
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
