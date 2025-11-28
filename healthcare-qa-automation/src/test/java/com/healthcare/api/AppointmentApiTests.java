package com.healthcare.api;

import io.restassured.RestAssured;
import org.testng.annotations.Test;
import static org.hamcrest.Matchers.*;

public class AppointmentApiTests {

    @Test
    public void createAppointmentTest() {
        RestAssured.given()
            .contentType("application/json")
            .body("{\"patientName\":\"John Doe\",\"doctorName\":\"Dr Smith\",\"date\":\"2025-02-10\"}")
        .when()
            .post("http://localhost:5000/api/appointments")
        .then()
            .statusCode(200)
            .body("doctorName", equalTo("Dr Smith"));
    }
}
