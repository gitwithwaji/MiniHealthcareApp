const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema({
 firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: Number,
  gender: String,
  email: { type: String, required: true },
  phone: String,
  symptoms: String,
  conditions: String,
  riskLevel: String,
  recommendedSpecialist: String
}, { timestamps: true });

module.exports = mongoose.model("Patient", PatientSchema);
