const router = require("express").Router();
const titleController = require("../../controllers/titleController");

// Matches with "/api/titles"
router.route("/").get(titleController.findTitle);

module.exports = router;
