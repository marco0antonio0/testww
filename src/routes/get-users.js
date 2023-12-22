const express = require("express");
const data = require("./../database/db");
const router = express.Router();

router.get("/get-users", (req, res) => {
  res.send(data);
});

module.exports = router;
