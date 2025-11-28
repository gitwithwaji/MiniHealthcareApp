const mongoose = require("mongoose");

const ClaimSchema = new mongoose.Schema({
  patientName: String,
  insuranceProvider: String,
  claimAmount: Number,
});

module.exports = mongoose.model("Claim", ClaimSchema);
