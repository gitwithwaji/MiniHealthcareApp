import React, { useState } from "react";

export default function PatientRegistration() {
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [email,setEmail] = useState("");
  const [dob,setDob] = useState("");
  const [result,setResult] = useState(null);

  async function onSubmit(e) {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/api/patients", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName, email, dob })
    });
    const data = await res.json();
    setResult(data);
  }

  return (
    <div>
      <h2>Patient Registration</h2>
      <form onSubmit={onSubmit}>
        <div><input placeholder="First name" value={firstName} onChange={e=>setFirstName(e.target.value)} required /></div>
        <div><input placeholder="Last name" value={lastName} onChange={e=>setLastName(e.target.value)} required /></div>
        <div><input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} type="email" required /></div>
        <div><input placeholder="DOB (YYYY-MM-DD)" value={dob} onChange={e=>setDob(e.target.value)} /></div>
        <button type="submit">Register</button>
      </form>
      {result && <div style={{ marginTop: 20 }}>
        <strong>Registered:</strong> {result.id} - {result.firstName} {result.lastName}
      </div>}
    </div>
  );
}
