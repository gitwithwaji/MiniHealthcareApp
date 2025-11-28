# MiniHealthcareApp
This repository is a test demo for automating test cases on a Healthcare application. The repo is not a final version of any testing frameworks.

# Project Structure 

```healthcare-demo/                        # repo root (or keep as separate repos)
├── minihealthcare-app/                 # Full-stack app (backend + frontend)
├── backend/
│   ├── package.json
│   ├── server.js
│   ├── .env
│   │
│   ├── config/
│   │   └── db.js
│   │
│   ├── models/
│   │   ├── Patient.js
│   │   ├── Appointment.js
│   │   └── Claim.js
│   │
│   └── routes/
│       ├── patientRoutes.js
│       ├── appointmentRoutes.js
│       └── claimRoutes.js
healthcare-qa-automation/
│   ├── pom.xml
│   └── src/
│       ├── main/
│       │   └── java/
│       │       └── com/healthcare/
│       │           └── config/
│       │               └── ConfigLoader.java
│       └── test/
│           └── java/
│               └── com/healthcare/
│                   ├── api/
│                   │   ├── PatientApiTests.java
│                   │   ├── AppointmentApiTests.java
│                   │   └── ClaimsApiTests.java
│                   ├── ui/
│                   │   ├── PatientRegistrationUITest.java
│                   │   ├── AppointmentUITest.java
│                   │   └── ClaimsUITest.java
│                   ├── performance/
│                   │   └── LoadTests.java
│                   └── utils/
│                       ├── BaseTest.java
│                       └── TestDataGenerator.java
│
│   └── .github/
│       └── workflows/
│           └── ci.yml
└── docs/
    ├── TestPlan_HealthcareDemo.md
    ├── RTM_HealthcareDemo.xlsx (or .csv)
    ├── TestCases_HealthcareDemo.md
    ├── RiskRegister_HealthcareDemo.md
    └── ValidationReport_HealthcareDemo.md

