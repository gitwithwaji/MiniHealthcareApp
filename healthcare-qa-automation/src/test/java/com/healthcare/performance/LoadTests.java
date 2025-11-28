package com.healthcare.performance;

import io.restassured.RestAssured;
import org.testng.annotations.Test;

public class LoadTests {

    @Test
    public void loadTestPatientsApi() {
        for(int i=0; i<50; i++) {
            RestAssured.get("http://localhost:5000/api/patients")
                .then().statusCode(200);
        }
    }
}
