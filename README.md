# MiniHealthcareApp
This repository is a test demo for automating test cases on a Healthcare application. The repo is not a final version of any testing frameworks.

# Project Structure 

```healthcare-demo/                        # repo root (or keep as separate repos)
├── minihealthcare-app/                 # Full-stack app (backend + frontend)
│   ├── backend/ <br>
│   │   ├── package.json <br>
│   │   └── server.js <br>
│   └── frontend/ <br>
│       ├── package.json <br>
│       └── src/ <br>
│           ├── App.js <br>
│           ├── index.js <br>
│           └── pages/ <br>
│               ├── PatientRegistration.js <br>
│               ├── Appointment.js <br>
│               └── Claims.js <br>
├── healthcare-qa-automation/           # Automation framework + scripts <br>
│   ├── pom.xml <br>
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

