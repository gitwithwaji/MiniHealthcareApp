import React, { useState } from "react";

export default function Claims() {
  const [patientId,setPatientId] = useState("");
  const [appointmentId,setAppointmentId] = useState("");
  const [claimAmount,setClaimAmount] = useState("");
  const [diagnosisCode,setDiagnosisCode] = useState("");
  const [result,setResult] = useState(null);

  async function submit(e) {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/api/claims", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ patientId, appointmentId, claimAmount: Number(claimAmount), diagnosisCode })
    });
    const data = await res.json();
    setResult(data);
  }

  async function getStatus(id) {
    const r = await fetch(`http://localhost:3000/api/claims/${id}`);
    const d = await r.json();
    setResult(d);
  }

  return (
    <div>
      <h2>Submit Claim</h2>
      <form onSubmit={submit}>
        <div><input placeholder="Patient ID" value={patientId} onChange={e=>setPatientId(e.target.value)} required /></div>
        <div><input placeholder="Appointment ID (optional)" value={appointmentId} onChange={e=>setAppointmentId(e.target.value)} /></div>
        <div><input placeholder="Claim Amount" value={claimAmount} onChange={e=>setClaimAmount(e.target.value)} required /></div>
        <div><input placeholder="Diagnosis Code" value={diagnosisCode} onChange={e=>setDiagnosisCode(e.target.value)} /></div>
        <button type="submit">Submit Claim</button>
      </form>
      <div style={{ marginTop: 20 }}>
        <input placeholder="Check claim by ID" id="checkId"/>
        <button onClick={() => getStatus(document.getElementById('checkId').value)}>Check Status</button>
      </div>
      {result && <pre style={{ background: '#eee', padding: 10 }}>{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
}
