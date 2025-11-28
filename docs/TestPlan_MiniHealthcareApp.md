# Test Plan – MiniHealthcareApp

**Project Name:** MiniHealthcareApp  
**Prepared By:** Abdul Wajid  
**Date:** 20-July-2023  
**Version:** 1.0

---

## 1. Introduction
This test plan defines the scope, objectives, approach, and resources for testing the MiniHealthcareApp, a healthcare patient registration, appointment, and claims management system.

## 2. Objectives
- Verify all patient, appointment, and claims workflows.
- Ensure data integrity between frontend, backend, and MongoDB.
- Validate API functionality, security, and performance.
- Automate regression tests using Selenium and TestNG.
- Integrate tests with CI/CD pipeline.

## 3. Scope
**In Scope:**  
- Patient registration, listing, and editing  
- Appointment creation, update, and deletion  
- Claims submission and validation  
- API testing for all CRUD operations  
- Frontend UI testing across browsers  
- Performance and load testing  

**Out of Scope:**  
- Third-party integrations beyond current APIs  
- Mobile app testing (web-only for now)

## 4. Test Approach
- **Manual Testing:** UI validation for forms, tables, and data consistency.  
- **Automated Testing:** Selenium + TestNG for UI, Java for API tests, Postman for quick API validation.  
- **Performance Testing:** Load testing using JMeter or Locust.  
- **CI/CD Integration:** Tests executed automatically on GitHub Actions on every push.

## 5. Test Deliverables
- Test cases (TestCases_MiniHealthcareApp.md)  
- RTM (RTM_MiniHealthcareApp.xlsx)  
- Bug reports (BugReportTemplate.md)  
- Validation report (ValidationReport_MiniHealthcareApp.md)

## 6. Environment
- **Frontend:** React.js, Node.js  
- **Backend:** Express.js, MongoDB  
- **Testing:** Selenium WebDriver, TestNG, JUnit, Postman, JMeter  
- **CI/CD:** GitHub Actions

## 7. Roles & Responsibilities
- QA Engineer: Write and execute test cases, report defects  
- Developer: Fix defects, review code  
- Project Manager: Approve test plans and validation reports

## 8. Schedule
| Activity | Start Date | End Date |
|----------|------------|----------|
| Test Plan Preparation | 20-May-2023 | 22-May-2023 |
| Test Case Creation | 25-May-2023 | 28-May-2023 |
| Test Execution | 29-May-2023 | 31-May-2023 |
| Defect Reporting | 01-Jun-2023 | 05-Jun-2023 |
| Validation Report | 06-Jun-2023 | 06-Jun-2023 |
