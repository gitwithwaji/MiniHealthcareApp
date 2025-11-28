const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const patientRoutes = require("./routes/patientRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const claimRoutes = require("./routes/claimRoutes");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/minihealthcare", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api/patients", patientRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/claims", claimRoutes);

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
