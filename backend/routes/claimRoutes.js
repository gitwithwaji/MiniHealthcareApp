const express = require("express");
const router = express.Router();
const Claim = require("../models/Claim");

router.post("/", async (req, res) => {
  const claim = new Claim(req.body);
  await claim.save();
  res.json(claim);
});

router.get("/", async (req, res) => {
  const claims = await Claim.find();
  res.json(claims);
});

module.exports = router;
