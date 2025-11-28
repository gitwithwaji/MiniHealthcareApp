package com.healthcare.api;

import io.restassured.RestAssured;
import org.testng.annotations.Test;

public class ClaimsApiTests {

    @Test
    public void createClaimTest() {
        RestAssured.given()
            .contentType("application/json")
            .body("{\"patientName\":\"John Doe\",\"insuranceProvider\":\"BlueCross\",\"claimAmount\":1000}")
        .when()
            .post("http://localhost:5000/api/claims")
        .then()
            .statusCode(200);
    }
}
