const express = require("express");
const data = require("./../database/db");
const router = express.Router();

router.get("/get-user", (req, res) => {
  const { id } = req.query;
  res.send(data.data[id]);
});

module.exports = router;
