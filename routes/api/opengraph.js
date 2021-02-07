const router = require("express").Router();
const opengraphController = require("../../controllers/openGraphController");

// Matches with "/api/opengraph"
router.route("/").get(opengraphController.findTitle);

module.exports = router;
