import React, { useState } from "react";

export default function Appointment() {
  const [patientId, setPatientId] = useState("");
  const [date, setDate] = useState("");
  const [reason, setReason] = useState("");
  const [result, setResult] = useState(null);

  async function submit(e) {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/api/appointments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ patientId, date, reason })
    });
    const data = await res.json();
    setResult(data);
  }

  return (
    <div>
      <h2>Book Appointment</h2>
      <form onSubmit={submit}>
        <div><input placeholder="Patient ID" value={patientId} onChange={e=>setPatientId(e.target.value)} required /></div>
        <div><input placeholder="Date YYYY-MM-DD" value={date} onChange={e=>setDate(e.target.value)} required /></div>
        <div><input placeholder="Reason" value={reason} onChange={e=>setReason(e.target.value)} /></div>
        <button type="submit">Book</button>
      </form>
      {result && <div style={{ marginTop: 20 }}>
        <strong>Appointment ID:</strong> {result.id}
      </div>}
    </div>
  );
}
