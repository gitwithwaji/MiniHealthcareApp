package com.healthcare.api;

import io.restassured.RestAssured;
import org.testng.annotations.Test;
import static org.hamcrest.Matchers.*;

public class PatientApiTests {

    @Test
    public void createPatientTest() {
        RestAssured.given()
            .contentType("application/json")
            .body("{\"firstName\":\"John\",\"lastName\":\"Doe\",\"email\":\"john@test.com\",\"phone\":\"1234567890\"}")
        .when()
            .post("http://localhost:5000/api/patients")
        .then()
            .statusCode(200)
            .body("firstName", equalTo("John"));
    }
}
