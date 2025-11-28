// Simulated AI Risk Prediction Service
function calculateRisk(patient) {
  const { age, symptoms, conditions } = patient;

  let riskScore = 0;

  if (age > 60) riskScore += 2;
  if (symptoms.toLowerCase().includes("chest pain")) riskScore += 3;
  if (symptoms.toLowerCase().includes("breath")) riskScore += 2;
  if (conditions.toLowerCase().includes("diabetes")) riskScore += 2;
  if (conditions.toLowerCase().includes("heart")) riskScore += 3;

  if (riskScore >= 6) return "HIGH";
  if (riskScore >= 3) return "MEDIUM";
  return "LOW";
}

function recommendSpecialist(risk) {
  if (risk === "HIGH") return "Cardiologist";
  if (risk === "MEDIUM") return "General Physician";
  return "Routine Checkup";
}

module.exports = { calculateRisk, recommendSpecialist };
