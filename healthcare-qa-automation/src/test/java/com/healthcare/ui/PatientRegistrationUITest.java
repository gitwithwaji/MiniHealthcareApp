package com.healthcare.ui;

import com.healthcare.utils.BaseTest;
import org.openqa.selenium.By;
import org.testng.annotations.Test;

public class PatientRegistrationUITest extends BaseTest {

    @Test
    public void registerPatientUI() {
        driver.get("http://localhost:3000");

        driver.findElement(By.xpath("//input[@placeholder='First Name']")).sendKeys("Jane");
        driver.findElement(By.xpath("//input[@placeholder='Last Name']")).sendKeys("Doe");
        driver.findElement(By.xpath("//input[@placeholder='Email']")).sendKeys("jane@test.com");
        driver.findElement(By.xpath("//input[@placeholder='Phone']")).sendKeys("1112223333");

        driver.findElement(By.xpath("//button[text()='Save Patient']")).click();
    }
}
