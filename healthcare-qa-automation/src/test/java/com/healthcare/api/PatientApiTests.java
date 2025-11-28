package com.healthcare.api;

import io.restassured.RestAssured;
import io.restassured.response.Response;

import org.testng.annotations.Test;
import static io.restassured.RestAssured.given;
import static org.junit.jupiter.api.Assertions.assertEquals;

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

    @Test
    public void testAIPrediction() {
        Response response =
            given()
                .contentType("application/json")
                .body("{ \"firstName\":\"John\", \"age\":70, \"symptoms\":\"chest pain\" }")
            .when()
                .post("/patients/add")
            .then()
                .statusCode(201)
                .extract().response();

        String risk = response.jsonPath().getString("riskLevel");
        assertEquals("HIGH", risk);
    }

}
