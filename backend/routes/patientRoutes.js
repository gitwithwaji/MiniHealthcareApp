const express = require('express');
const router = express.Router();
const Patient = require('../models/Patient');
const { calculateRisk, recommendSpecialist } = require('../services/aiServices');

router.post('/', async (req, res) => {
  try {
    console.log("Request body:", req.body);

    const patientData = req.body;

    // AI logic
    const risk = await calculateRisk(patientData);
    const specialist = await recommendSpecialist(risk);

    console.log("AI output:", risk, specialist);

    const patient = new Patient({
      ...patientData,
      riskLevel: risk,
      recommendedSpecialist: specialist
    });

    await patient.save();
    console.log("Patient saved:", patient);

    res.status(201).json(patient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  const patients = await Patient.find();
  res.json(patients);
});

module.exports = router;
