# MiniHealthcareApp
This repository is a test demo for automating test cases on a Healthcare application. The repo is not a final version of any testing frameworks.

Project Structure
-----------------

healthcare-demo/                        # repo root (or keep as separate repos)
├── minihealthcare-app/                 # Full-stack app (backend + frontend)
│   ├── backend/
│   │   ├── package.json
│   │   └── server.js
│   └── frontend/
│       ├── package.json
│       └── src/
│           ├── App.js
│           ├── index.js
│           └── pages/
│               ├── PatientRegistration.js
│               ├── Appointment.js
│               └── Claims.js
├── healthcare-qa-automation/           # Automation framework + scripts
│   ├── pom.xml
│   ├── src/
│   │   ├── main/java/com/healthcare/...
│   │   └── test/java/com/healthcare/...
│   └── .github/workflows/ci.yml
└── docs/
    ├── TestPlan_HealthcareDemo.md
    ├── RTM_HealthcareDemo.xlsx (or .csv)
    ├── TestCases_HealthcareDemo.md
    ├── RiskRegister_HealthcareDemo.md
    └── ValidationReport_HealthcareDemo.md

