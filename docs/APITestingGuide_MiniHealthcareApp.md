# API Testing Guide – Healthcare Demo

## Base URL
http://localhost:5000/api

## Endpoints

### 1. Patient
- **POST** `/patients` – Add patient
- **GET** `/patients` – List all patients
- **PUT** `/patients/:id` – Update patient
- **DELETE** `/patients/:id` – Delete patient

### 2. Appointment
- **POST** `/appointments`
- **GET** `/appointments`
- **PUT** `/appointments/:id`
- **DELETE** `/appointments/:id`

### 3. Claims
- **POST** `/claims`
- **GET** `/claims`
- **PUT** `/claims/:id`
- **DELETE** `/claims/:id`

## Example Test Case
| Endpoint | Method | Input | Expected Output |
|----------|--------|-------|----------------|
| /patients | POST | {firstName, lastName, email} | 201 Created, patient saved |
