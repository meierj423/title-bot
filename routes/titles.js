const express = require("express");
const router = express.Router();

// Displays most recently searched location
router.get("/api/titles", (req, res) => {
  return res.json(req.body);
});

module.exports = router;
