import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [patients, setPatients] = useState([]);
  const [age, setAge] = useState([]);
   const [symptoms, setSymptoms] = useState("");
  const [conditions, setConditions] = useState("");
  const [appointments, setAppointments] = useState([]);
  const [claims, setClaims] = useState([]);

  const [patientForm, setPatientForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    symptoms: "",
    conditions: ""
  });

  const [appointmentForm, setAppointmentForm] = useState({
    patientName: "",
    doctorName: "",
    date: ""
  });

  const [claimForm, setClaimForm] = useState({
    patientName: "",
    insuranceProvider: "",
    claimAmount: ""
  });

  useEffect(() => {
    fetchAll();
  }, []);

  const fetchAll = async () => {
    const p = await axios.get("http://localhost:5000/api/patients");
    const a = await axios.get("http://localhost:5000/api/appointments");
    const c = await axios.get("http://localhost:5000/api/claims");
    setPatients(p.data);
    setAppointments(a.data);
    setClaims(c.data);
  };

  const savePatient = async () => {
    await axios.post("http://localhost:5000/api/patients/", {
    ...patientForm,
    age,
    symptoms,
    conditions
  });
    fetchAll();
  };

  const saveAppointment = async () => {
    await axios.post("http://localhost:5000/api/appointments", appointmentForm);
    fetchAll();
  };

  const saveClaim = async () => {
    await axios.post("http://localhost:5000/api/claims", claimForm);
    fetchAll();
  };

  return (
    <div style={{ padding: 20 }}>

      <h2>Patient Form</h2>
      <input placeholder="First Name" onChange={(e) => setPatientForm({ ...patientForm, firstName: e.target.value })}/>  
      <input placeholder="Last Name" onChange={(e) => setPatientForm({ ...patientForm, lastName: e.target.value })}/>
      <input placeholder="Email" onChange={(e) => setPatientForm({ ...patientForm, email: e.target.value })}/>
      <input placeholder="Phone" onChange={(e) => setPatientForm({ ...patientForm, phone: e.target.value })}/>
      <input placeholder="Age" value={age} type="number" onChange={(e) => setAge(e.target.value)}/>
      <input placeholder="Symptoms" value={symptoms} onChange={(e) => setSymptoms(e.target.value)} />
      <input placeholder="Existing Conditions" value={conditions} onChange={(e) => setConditions(e.target.value)} />

      <button onClick={savePatient}>Save Patient</button>

      <h2>Appointment Form</h2>
      <input placeholder="Patient Name" onChange={(e) => setAppointmentForm({ ...appointmentForm, patientName: e.target.value })}/>
      <input placeholder="Doctor Name" onChange={(e) => setAppointmentForm({ ...appointmentForm, doctorName: e.target.value })}/>
      <input placeholder="Date" onChange={(e) => setAppointmentForm({ ...appointmentForm, date: e.target.value })}/>
      <button onClick={saveAppointment}>Save Appointment</button>

      <h2>Claim Form</h2>
      <input placeholder="Patient Name" onChange={(e) => setClaimForm({ ...claimForm, patientName: e.target.value })}/>
      <input placeholder="Insurance Provider" onChange={(e) => setClaimForm({ ...claimForm, insuranceProvider: e.target.value })}/>
      <input placeholder="Claim Amount" onChange={(e) => setClaimForm({ ...claimForm, claimAmount: e.target.value })}/>
      <button onClick={saveClaim}>Save Claim</button>

      <hr/>

      <h2>Patients</h2>
      <table border="1">
        <thead>
        <tr><th>Name</th><th>Email</th><th>Phone</th><th>Age</th><th>Symptoms</th><th>Existing Conditions</th></tr></thead>
        <tbody>
        {patients.map(p => (
          <tr key={p._id}>
            <td>{p.firstName} {p.lastName}</td>
            <td>{p.email}</td>
            <td>{p.phone}</td>
            <td>{p.age}</td>
            <td><p>Risk Level: {p.riskLevel}</p></td>
            <td><p>Recommended Specialist: {p.recommendedSpecialist}</p></td>
          </tr>
        ))}
        </tbody>
      </table>

      <h2>Appointments</h2>
      <table border="1">
        <thead>
        <tr><th>Patient</th><th>Doctor</th><th>Date</th></tr></thead>
        <tbody>
        {appointments.map(a => (
          <tr key={a._id}>
            <td>{a.patientName}</td>
            <td>{a.doctorName}</td>
            <td>{a.date}</td>
          </tr>
        ))}
        </tbody>
      </table>

      <h2>Claims</h2>
      <table border="1">
        <thead>
        <tr><th>Patient</th><th>Insurance</th><th>Amount</th></tr></thead>
        <tbody>
        {claims.map(c => (
          <tr key={c._id}>
            <td>{c.patientName}</td>
            <td>{c.insuranceProvider}</td>
            <td>{c.claimAmount}</td>
          </tr>
        ))}
        </tbody>
      </table>

    </div>
  );
}

export default App;
